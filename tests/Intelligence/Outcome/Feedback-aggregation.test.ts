import {
  aggregateFeedback
} from "../../../src/intelligence/outcome/feedback-aggregation";

describe(
  "Feedback Aggregation",
  () => {
    it(
      "should aggregate intervention outcomes",
      () => {
        const result =
          aggregateFeedback(
            "user-001",

            "dashboard_signal",

            [
              {
                id:
                  "outcome-1",

                userId:
                  "user-001",

                interventionId:
                  "intervention-1",

                decisionId:
                  "decision-1",

                type:
                  "completed",

                source:
                  "behavioral_signal",

                status:
                  "classified",

                effect:
                  "positive",

                score:
                  0.8,

                confidence:
                  0.9,

                signals:
                  [],

                observedAt:
                  new Date().toISOString(),

                metadata:
                  {
                    interventionType:
                      "dashboard_signal"
                  }
              },

              {
                id:
                  "outcome-2",

                userId:
                  "user-001",

                interventionId:
                  "intervention-2",

                decisionId:
                  "decision-2",

                type:
                  "dismissed",

                source:
                  "user_action",

                status:
                  "classified",

                effect:
                  "negative",

                score:
                  -0.4,

                confidence:
                  0.8,

                signals:
                  [],

                observedAt:
                  new Date().toISOString(),

                metadata:
                  {
                    interventionType:
                      "dashboard_signal"
                  }
              }
            ]
          );

        expect(
          result.sampleSize
        ).toBe(2);

        expect(
          result.positiveOutcomes
        ).toBe(1);

        expect(
          result.negativeOutcomes
        ).toBe(1);

        expect(
          result.effectiveness
        ).toBe(0);
      }
    );
  }
);
