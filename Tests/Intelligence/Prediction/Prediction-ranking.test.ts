import {
  rankPredictions
} from "../../../src/intelligence/prediction/prediction-ranking";

describe(
  "Prediction Ranking",
  () => {
    it(
      "should rank stronger predictions first",
      () => {
        const predictions =
          [
            {
              id:
                "prediction-1",

              userId:
                "user-001",

              type:
                "focus_loss" as const,

              title:
                "Low prediction",

              description:
                "Test",

              probability:
                0.3,

              confidence:
                0.4,

              priority:
                "low" as const,

              horizonMinutes:
                30,

              evidence:
                [],

              createdAt:
                new Date().toISOString(),

              expiresAt:
                new Date().toISOString()
            },

            {
              id:
                "prediction-2",

              userId:
                "user-001",

              type:
                "break_needed" as const,

              title:
                "Strong prediction",

              description:
                "Test",

              probability:
                0.9,

              confidence:
                0.9,

              priority:
                "high" as const,

              horizonMinutes:
                15,

              evidence:
                [],

              createdAt:
                new Date().toISOString(),

              expiresAt:
                new Date().toISOString()
            }
          ];

        const result =
          rankPredictions(
            predictions
          );

        expect(
          result[0].id
        ).toBe(
          "prediction-2"
        );
      }
    );
  }
);
