import {
  calculateDecisionScore
} from "../../../src/intelligence/decision/decision-scoring";

describe(
  "Decision Scoring",
  () => {
    it(
      "should produce a bounded score",
      () => {
        const score =
          calculateDecisionScore({
            prediction: {
              id:
                "prediction-001",

              userId:
                "user-001",

              type:
                "focus_loss",

              title:
                "Focus loss",

              description:
                "Test",

              probability:
                0.9,

              confidence:
                0.9,

              priority:
                "high",

              horizonMinutes:
                30,

              evidence: [],

              createdAt:
                new Date().toISOString(),

              expiresAt:
                new Date().toISOString()
            },

            userImpact:
              0.8,

            interventionCost:
              0.1,

            urgency:
              0.8
          });

        expect(
          score
        ).toBeGreaterThanOrEqual(
          0
        );

        expect(
          score
        ).toBeLessThanOrEqual(
          1
        );
      }
    );

    it(
      "should favor high impact and high confidence decisions",
      () => {
        const score =
          calculateDecisionScore({
            prediction: {
              id:
                "prediction-002",

              userId:
                "user-001",

              type:
                "focus_loss",

              title:
                "Focus loss",

              description:
                "Test",

              probability:
                0.95,

              confidence:
                0.95,

              priority:
                "high",

              horizonMinutes:
                15,

              evidence: [],

              createdAt:
                new Date().toISOString(),

              expiresAt:
                new Date().toISOString()
            },

            userImpact:
              0.9,

            interventionCost:
              0.1,

            urgency:
              0.9
          });

        expect(
          score
        ).toBeGreaterThan(
          0.7
        );
      }
    );
  }
);
