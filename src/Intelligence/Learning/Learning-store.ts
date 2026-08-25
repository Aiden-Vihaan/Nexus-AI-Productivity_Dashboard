import {
  LearningCandidate,
  LearningDecision
} from "./learning-types";

import {
  Adaptation
} from "./adaptation-types";

export interface LearningStore {
  saveCandidate(
    candidate: LearningCandidate
  ): Promise<void>;

  getCandidates(
    userId: string
  ): Promise<
    LearningCandidate[]
  >;

  saveDecision(
    decision: LearningDecision
  ): Promise<void>;

  saveAdaptation(
    adaptation: Adaptation
  ): Promise<void>;

  getAdaptations(
    userId: string
  ): Promise<Adaptation[]>;
}

export class InMemoryLearningStore
  implements LearningStore {
  private candidates:
    LearningCandidate[] = [];

  private decisions:
    LearningDecision[] = [];

  private adaptations:
    Adaptation[] = [];

  async saveCandidate(
    candidate: LearningCandidate
  ): Promise<void> {
    this.candidates.push(
      candidate
    );
  }

  async getCandidates(
    userId: string
  ): Promise<
    LearningCandidate[]
  > {
    return this.candidates.filter(
      candidate =>
        candidate.userId ===
        userId
    );
  }

  async saveDecision(
    decision: LearningDecision
  ): Promise<void> {
    this.decisions.push(
      decision
    );
  }

  async saveAdaptation(
    adaptation: Adaptation
  ): Promise<void> {
    this.adaptations.push(
      adaptation
    );
  }

  async getAdaptations(
    userId: string
  ): Promise<Adaptation[]> {
    return this.adaptations.filter(
      adaptation =>
        adaptation.userId ===
        userId
    );
  }
}
