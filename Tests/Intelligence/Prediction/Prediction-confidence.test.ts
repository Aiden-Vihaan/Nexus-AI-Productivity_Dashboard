import {
  calculatePredictionConfidence
} from "../../../src/intelligence/prediction/prediction-confidence";

describe(
  "Prediction Confidence",
  () => {
    it(
      "should return zero when there is no evidence",
      () => {
        const result =
          calculatePredictionConfidence(
            [],
            0.8
          );

        expect(
          result
        ).toBe(0);
      }
    );

    it(
      "should produce a bounded confidence score",
      () => {
        const result =
          calculatePredictionConfidence(
            [
              {
                factor:
                  "active_task",

                weight:
                  0.5,

                description:
                  "Active task detected."
              }
            ],
            0.8
          );

        expect(
          result
        ).toBeGreaterThan(0);

        expect(
          result
        ).toBeLessThanOrEqual(1);
      }
    );
  }
);
