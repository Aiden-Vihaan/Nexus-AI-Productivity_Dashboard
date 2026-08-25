import {
  createPredictionView
} from "../../src/intelligence/prediction-view";

describe(
  "PredictionView",
  () => {
    it(
      "should convert probability to presentation values",
      () => {
        const result =
          createPredictionView({
            id:
              "prediction-001",

            title:
              "Potential focus decline",

            probability:
              0.82,

            confidence:
              0.91,

            horizon:
              "short",

            explanation:
              "Recent workload indicates elevated cognitive load.",

            recommendedAction:
              "Schedule a short recovery period."
          });

        expect(
          result.probabilityPercent
        ).toBe(82);

        expect(
          result.confidencePercent
        ).toBe(91);

        expect(
          result.riskLevel
        ).toBe("high");
      }
    );
  }
);
