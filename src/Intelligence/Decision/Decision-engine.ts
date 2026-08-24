import {
  Prediction
} from "../prediction";

import {
  Decision,
  DecisionRequest,
  DecisionResult,
  DecisionType
} from "./decision-types";

import {
  decisionPolicies
} from "./decision-policies";

import {
  decisionActions
} from "./decision-actions";

import {
  calculateDecisionScore
} from "./decision-scoring";

import {
  isDecisionEligible
} from "./decision-eligibility";

import {
  createDecisionEvidence,
  buildDecisionRationale
} from "./decision-explanations";

import {
  rankDecisions
} from "./decision-ranking";

function createDecisionId(): string {
  return `decision_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

function getDecisionType(
  predictionType: Prediction["type"]
): DecisionType | undefined {
  switch (
    predictionType
  ) {
    case "break_needed":
      return "suggest_break";

    case "focus_loss":
      return "protect_focus";

    case "task_completion":
      return "prepare_for_completion";

    default:
      return undefined;
  }
}

function calculateUrgency(
  prediction: Prediction
): number {
  const horizon =
    Math.max(
      1,
      prediction.horizonMinutes
    );

  return Number(
    Math.min(
      1,
      60 / horizon
    ).toFixed(2)
  );
}

function calculateUserImpact(
  prediction: Prediction
): number {
  switch (
    prediction.type
  ) {
    case "focus_loss":
      return 0.85;

    case "break_needed":
      return 0.75;

    case "task_completion":
      return 0.55;

    default:
      return 0.5;
  }
}

function calculateInterventionCost(
  prediction: Prediction
): number {
  switch (
    prediction.type
  ) {
    case "focus_loss":
      return 0.1;

    case "break_needed":
      return 0.4;

    case "task_completion":
      return 0.2;

    default:
      return 0.5;
  }
}

function determinePriority(
  score: number
): Decision["priority"] {
  if (score >= 0.85) {
    return "critical";
  }

  if (score >= 0.7) {
    return "high";
  }

  if (score >= 0.55) {
    return "medium";
  }

  return "low";
}

export class DecisionEngine {
  decide(
    request: DecisionRequest
  ): DecisionResult {
    const decisions: Decision[] =
      [];

    const recentDecisionTypes =
      request.recentDecisionTypes ??
      [];

    for (
      const prediction of
        request.predictions
    ) {
      const decisionType =
        getDecisionType(
          prediction.type
        );

      if (
        !decisionType
      ) {
        continue;
      }

      const policy =
        decisionPolicies[
          decisionType
        ];

      const eligible =
        isDecisionEligible({
          prediction,

          policy,

          recentDecisionTypes,

          lastInterventionAt:
            request.lastInterventionAt
        });

      if (!eligible) {
        continue;
      }

      const userImpact =
        calculateUserImpact(
          prediction
        );

      const urgency =
        calculateUrgency(
          prediction
        );

      const interventionCost =
        calculateInterventionCost(
          prediction
        );

      const score =
        calculateDecisionScore({
          prediction,

          userImpact,

          interventionCost,

          urgency
        });

      if (
        score <
        policy.minimumDecisionScore
      ) {
        continue;
      }

      const evidence = [
        createDecisionEvidence(
          "prediction_probability",
          prediction.probability,
          `The prediction has a probability of ${Math.round(
            prediction.probability *
              100
          )}%.`
        ),

        createDecisionEvidence(
          "prediction_confidence",
          prediction.confidence,
          `The prediction confidence is ${Math.round(
            prediction.confidence *
              100
          )}%.`
        ),

        createDecisionEvidence(
          "user_impact",
          userImpact,
          "The predicted event may materially affect the user's productivity state."
        )
      ];

      const action =
        decisionActions[
          decisionType
        ];

      decisions.push({
        id:
          createDecisionId(),

        userId:
          request.userId,

        type:
          decisionType,

        priority:
          determinePriority(
            score
          ),

        intervention:
          action.intervention,

        title:
          action.title,

        description:
          action.description,

        rationale:
          buildDecisionRationale(
            evidence
          ),

        score,

        confidence:
          prediction.confidence,

        urgency,

        userImpact,

        interventionCost,

        predictionId:
          prediction.id,

        evidence,

        createdAt:
          new Date().toISOString(),

        expiresAt:
          prediction.expiresAt
      });
    }

    return {
      decisions:
        rankDecisions(
          decisions
        ),

      generatedAt:
        new Date().toISOString(),

      contextVersion:
        request.context.version
    };
  }
}
