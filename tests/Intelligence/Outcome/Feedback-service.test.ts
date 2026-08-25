import {
  FeedbackService
} from "../../../src/intelligence/outcome/feedback-service";

import {
  InMemoryOutcomeStore
} from "../../../src/intelligence/outcome/outcome-store";

describe(
  "FeedbackService",
  () => {
    it(
      "should generate feedback from outcomes",
      async () => {
        const store =
          new InMemoryOutcomeStore();

        await store.save({
          id:
            "outcome-001",

          userId:
            "user-001",

          interventionId:
            "intervention-001",

          decisionId:
            "decision-001",

          type:
            "completed",

          source:
            "behavioral_signal",

          status:
            "classified",

          effect:
            "positive",

          score:
            0.7,

          confidence:
            0.9,

          signals:
            [],

          observedAt:
            new Date().toISOString(),

          metadata: {
            interventionType:
              "inline_suggestion"
          }
        });

        const service =
          new FeedbackService(
            store
          );

        const feedback =
          await service.generateFeedback(
            "user-001",

            "inline_suggestion"
          );

        expect(
          feedback.sampleSize
        ).toBe(1);

        expect(
          feedback.positiveOutcomes
        ).toBe(1);

        expect(
          feedback.effectiveness
        ).toBe(1);
      }
    );
  }
);
