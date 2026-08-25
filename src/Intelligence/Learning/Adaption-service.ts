import {
  LearningCandidate
} from "./learning-types";

import {
  Adaptation,
  AdaptationResult,
  AdaptationPolicy
} from "./adaptation-types";

import {
  LearningStore
} from "./learning-store";

import {
  calculateAdaptationPriority
} from "./adaptation-scoring";

import {
  evaluateLearningCandidate
} from "./learning-policy";

export class AdaptationService {
  constructor(
    private readonly store:
      LearningStore,

    private readonly policy:
      AdaptationPolicy
  ) {}

  async apply(
    candidate: LearningCandidate
  ): Promise<AdaptationResult> {
    const decision =
      evaluateLearningCandidate(
        candidate,
        this.policy
      );

    if (
      !decision.approved
    ) {
      const rejected:
        Adaptation = {
        id:
          `adaptation_${Date.now()}`,

        candidateId:
          candidate.id,

        userId:
          candidate.userId,

        target:
          candidate.target,

        previousValue:
          candidate.currentValue,

        newValue:
          candidate.proposedValue,

        status:
          "rejected",

        reason:
          decision.reason,

        confidence:
          candidate.confidence,

        createdAt:
          new Date().toISOString()
      };

      await this.store.saveAdaptation(
        rejected
      );

      return {
        applied:
          false,

        adaptation:
          rejected,

        reason:
          decision.reason
      };
    }

    const priority =
      calculateAdaptationPriority(
        candidate
      );

    if (
      priority <= 0
    ) {
      const rejected:
        Adaptation = {
        id:
          `adaptation_${Date.now()}`,

        candidateId:
          candidate.id,

        userId:
          candidate.userId,

        target:
          candidate.target,

        previousValue:
          candidate.currentValue,

        newValue:
          candidate.proposedValue,

        status:
          "rejected",

        reason:
          "Adaptation risk exceeds expected benefit.",

        confidence:
          candidate.confidence,

        createdAt:
          new Date().toISOString()
      };

      await this.store.saveAdaptation(
        rejected
      );

      return {
        applied:
          false,

        adaptation:
          rejected,

        reason:
          rejected.reason
      };
    }

    const adaptation:
      Adaptation = {
      id:
        `adaptation_${Date.now()}`,

      candidateId:
        candidate.id,

      userId:
        candidate.userId,

      target:
        candidate.target,

      previousValue:
        candidate.currentValue,

      newValue:
        candidate.proposedValue,

      status:
        "applied",

      reason:
        candidate.reason,

      confidence:
        candidate.confidence,

      createdAt:
        new Date().toISOString(),

      appliedAt:
        new Date().toISOString()
    };

    await this.store.saveAdaptation(
      adaptation
    );

    return {
      applied:
        true,

      adaptation
    };
  }

  async getHistory(
    userId: string
  ): Promise<Adaptation[]> {
    return this.store.getAdaptations(
      userId
    );
  }
}
