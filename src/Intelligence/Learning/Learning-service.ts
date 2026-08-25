import {
  LearningEvidence,
  LearningCandidate,
  LearningDecision
} from "./learning-types";

import {
  createLearningCandidate
} from "./learning-scoring";

import {
  evaluateLearningCandidate,
  DEFAULT_LEARNING_POLICY
} from "./learning-policy";

import {
  AdaptationPolicy
} from "./adaptation-types";

import {
  LearningStore,
  InMemoryLearningStore
} from "./learning-store";

export class LearningService {
  constructor(
    private readonly store:
      LearningStore =
      new InMemoryLearningStore(),

    private readonly policy:
      AdaptationPolicy =
      DEFAULT_LEARNING_POLICY
  ) {}

  async createCandidate(
    userId: string,
    target: string,
    currentValue: number,
    proposedValue: number,
    evidence: LearningEvidence,
    reason: string
  ): Promise<LearningCandidate> {
    const candidate =
      createLearningCandidate(
        userId,
        target,
        currentValue,
        proposedValue,
        evidence,
        reason
      );

    await this.store.saveCandidate(
      candidate
    );

    return candidate;
  }

  evaluateCandidate(
    candidate: LearningCandidate
  ): LearningDecision {
    return evaluateLearningCandidate(
      candidate,
      this.policy
    );
  }

  async evaluateAndStore(
    candidate: LearningCandidate
  ): Promise<LearningDecision> {
    const decision =
      this.evaluateCandidate(
        candidate
      );

    await this.store.saveDecision(
      decision
    );

    return decision;
  }

  async getCandidates(
    userId: string
  ): Promise<
    LearningCandidate[]
  > {
    return this.store.getCandidates(
      userId
    );
  }
}
