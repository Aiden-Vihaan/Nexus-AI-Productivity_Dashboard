import {
  aggregateFeedback
} from "./feedback-aggregation";

import {
  FeedbackSummary
} from "./outcome-types";

import {
  OutcomeStore
} from "./outcome-store";

export class FeedbackService {
  constructor(
    private readonly store:
      OutcomeStore
  ) {}

  async generateFeedback(
    userId: string,

    interventionType: string
  ): Promise<FeedbackSummary> {
    const outcomes =
      await this.store.getByUser(
        userId
      );

    const relevantOutcomes =
      outcomes.filter(
        outcome =>
          outcome.metadata
            ?.interventionType ===
          interventionType
      );

    const feedback =
      aggregateFeedback(
        userId,

        interventionType,

        relevantOutcomes
      );

    await this.store.saveFeedback(
      feedback
    );

    return feedback;
  }

  async getExistingFeedback(
    userId: string,

    interventionType: string
  ): Promise<
    FeedbackSummary | undefined
  > {
    return this.store.getFeedback(
      userId,

      interventionType
    );
  }
}
