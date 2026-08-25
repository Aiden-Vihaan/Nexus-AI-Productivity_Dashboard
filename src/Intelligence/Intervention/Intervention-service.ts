import {
  interventionPolicies
} from "./intervention-policies";

import {
  interventionActions
} from "./intervention-actions";

import {
  evaluateInterventionEligibility
} from "./intervention-eligibility";

import {
  evaluateInterventionBudget
} from "./intervention-budget";

import {
  calculateInterventionPriority
} from "./intervention-priority";

import {
  DefaultInterventionExecutor,

  InterventionExecutor
} from "./intervention-executor";

import {
  Intervention,

  InterventionRequest,

  InterventionResult
} from "./intervention-types";

function createInterventionId(): string {
  return `intervention_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

export class InterventionService {
  constructor(
    private readonly executor:
      InterventionExecutor =
        new DefaultInterventionExecutor()
  ) {}

  async process(
    request: InterventionRequest
  ): Promise<InterventionResult> {
    const policy =
      interventionPolicies[
        request.type
      ];

    const eligibility =
      evaluateInterventionEligibility(
        request,
        policy
      );

    if (
      !eligibility.eligible
    ) {
      const rejectedIntervention:
        Intervention = {
        id:
          createInterventionId(),

        userId:
          request.userId,

        decisionId:
          request.decisionId,

        type:
          request.type,

        priority:
          request.priority,

        status:
          "cancelled",

        payload:
          request.payload,

        score:
          request.score,

        interruptionCost:
          request.interruptionCost,

        createdAt:
          new Date().toISOString(),

        expiresAt:
          request.expiresAt
      };

      return {
        intervention:
          rejectedIntervention,

        accepted:
          false,

        reason:
          eligibility.reason,

        generatedAt:
          new Date().toISOString()
      };
    }

    const highFriction =
      request.interruptionCost >=
      0.6;

    const budget =
      evaluateInterventionBudget({
        maxInterventionsPerHour:
          policy.maximumRecentInterventions,

        maxHighFrictionPerHour:
          policy.maximumRecentHighFrictionInterventions,

        currentInterventions:
          request.recentInterventionCount,

        currentHighFriction:
          request.recentHighFrictionCount
      });

    if (
      !budget.allowed
    ) {
      const rejectedIntervention:
        Intervention = {
        id:
          createInterventionId(),

        userId:
          request.userId,

        decisionId:
          request.decisionId,

        type:
          request.type,

        priority:
          request.priority,

        status:
          "cancelled",

        payload:
          request.payload,

        score:
          request.score,

        interruptionCost:
          request.interruptionCost,

        createdAt:
          new Date().toISOString(),

        expiresAt:
          request.expiresAt
      };

      return {
        intervention:
          rejectedIntervention,

        accepted:
          false,

        reason:
          budget.reason,

        generatedAt:
          new Date().toISOString()
      };
    }

    if (
      highFriction &&
      budget.remainingHighFriction <=
        0
    ) {
      const rejectedIntervention:
        Intervention = {
        id:
          createInterventionId(),

        userId:
          request.userId,

        decisionId:
          request.decisionId,

        type:
          request.type,

        priority:
          request.priority,

        status:
          "cancelled",

        payload:
          request.payload,

        score:
          request.score,

        interruptionCost:
          request.interruptionCost,

        createdAt:
          new Date().toISOString(),

        expiresAt:
          request.expiresAt
      };

      return {
        intervention:
          rejectedIntervention,

        accepted:
          false,

        reason:
          "High-friction intervention budget exhausted.",

        generatedAt:
          new Date().toISOString()
      };
    }

    const defaultAction =
      interventionActions[
        request.type
      ];

    const intervention:
      Intervention = {
      id:
        createInterventionId(),

      userId:
        request.userId,

      decisionId:
        request.decisionId,

      type:
        request.type,

      priority:
        calculateInterventionPriority(
          request.score,

          request.interruptionCost
        ),

      status:
        "approved",

      payload: {
        ...defaultAction.defaultPayload,

        ...request.payload
      },

      score:
        request.score,

      interruptionCost:
        request.interruptionCost,

      createdAt:
        new Date().toISOString(),

      expiresAt:
        request.expiresAt
    };

    intervention.status =
      "executing";

    const execution =
      await this.executor.execute(
        intervention
      );

    if (
      execution.success
    ) {
      intervention.status =
        "delivered";

      intervention.deliveredAt =
        execution.deliveredAt;
    } else {
      intervention.status =
        "failed";
    }

    return {
      intervention,

      accepted:
        execution.success,

      reason:
        execution.error,

      generatedAt:
        new Date().toISOString()
    };
  }
}
