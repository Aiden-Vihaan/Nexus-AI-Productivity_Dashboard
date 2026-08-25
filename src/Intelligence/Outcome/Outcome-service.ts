import {
  Outcome,
  OutcomeObservation,
  OutcomeResult
} from "./outcome-types";

import {
  calculateOutcomeConfidence,
  calculateOutcomeScore,
  classifyOutcomeEffect
} from "./outcome-scoring";

import {
  OutcomeStore,
  InMemoryOutcomeStore
} from "./outcome-store";

function createOutcomeId(): string {
  return `outcome_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

export class OutcomeService {
  constructor(
    private readonly store:
      OutcomeStore =
      new InMemoryOutcomeStore()
  ) {}

  async observe(
    observation: OutcomeObservation
  ): Promise<OutcomeResult> {
    if (
      !observation.interventionId
    ) {
      return {
        accepted:
          false,

        reason:
          "Intervention ID is required.",

        outcome:
          {} as Outcome
      };
    }

    if (
      !observation.decisionId
    ) {
      return {
        accepted:
          false,

        reason:
          "Decision ID is required.",

        outcome:
          {} as Outcome
      };
    }

    const score =
      calculateOutcomeScore(
        observation.signals
      );

    const confidence =
      calculateOutcomeConfidence(
        observation.signals
      );

    const effect =
      classifyOutcomeEffect(
        score
      );

    const outcome:
      Outcome = {
      id:
        createOutcomeId(),

      userId:
        observation.userId,

      interventionId:
        observation.interventionId,

      decisionId:
        observation.decisionId,

      type:
        observation.type,

      source:
        observation.source,

      status:
        "classified",

      effect,

      score,

      confidence,

      signals:
        observation.signals,

      observedAt:
        observation.observedAt,

      classifiedAt:
        new Date().toISOString(),

      metadata:
        observation.metadata
    };

    await this.store.save(
      outcome
    );

    return {
      accepted:
        true,

      outcome
    };
  }

  async getInterventionOutcomes(
    interventionId: string
  ): Promise<Outcome[]> {
    return this.store.getByIntervention(
      interventionId
    );
  }

  async getUserOutcomes(
    userId: string
  ): Promise<Outcome[]> {
    return this.store.getByUser(
      userId
    );
  }
}
