import {
  FeedbackSummary,
  Outcome
} from "./outcome-types";

export interface OutcomeStore {
  save(
    outcome: Outcome
  ): Promise<void>;

  getByIntervention(
    interventionId: string
  ): Promise<Outcome[]>;

  getByUser(
    userId: string
  ): Promise<Outcome[]>;

  saveFeedback(
    feedback: FeedbackSummary
  ): Promise<void>;

  getFeedback(
    userId: string,

    interventionType: string
  ): Promise<
    FeedbackSummary | undefined
  >;
}

export class InMemoryOutcomeStore
  implements OutcomeStore {
  private outcomes: Outcome[] =
    [];

  private feedback:
    FeedbackSummary[] =
    [];

  async save(
    outcome: Outcome
  ): Promise<void> {
    this.outcomes.push(
      outcome
    );
  }

  async getByIntervention(
    interventionId: string
  ): Promise<Outcome[]> {
    return this.outcomes.filter(
      outcome =>
        outcome.interventionId ===
        interventionId
    );
  }

  async getByUser(
    userId: string
  ): Promise<Outcome[]> {
    return this.outcomes.filter(
      outcome =>
        outcome.userId ===
        userId
    );
  }

  async saveFeedback(
    feedback: FeedbackSummary
  ): Promise<void> {
    const existingIndex =
      this.feedback.findIndex(
        item =>
          item.userId ===
            feedback.userId &&
          item.interventionType ===
            feedback.interventionType
      );

    if (
      existingIndex >= 0
    ) {
      this.feedback[
        existingIndex
      ] = feedback;

      return;
    }

    this.feedback.push(
      feedback
    );
  }

  async getFeedback(
    userId: string,

    interventionType: string
  ): Promise<
    FeedbackSummary | undefined
  > {
    return this.feedback.find(
      item =>
        item.userId ===
          userId &&
        item.interventionType ===
          interventionType
    );
  }
}
