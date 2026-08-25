import {
  calculateAIConfidence,
  getConfidenceLevel
} from "../../../src/intelligence/ai/ai-confidence";

describe(
  "AI Confidence",
  () => {
    it(
      "should calculate bounded confidence",
      () => {
        const confidence =
          calculateAIConfidence(
            8,
            0.9,
            0.9
          );

        expect(
          confidence
        ).toBeGreaterThanOrEqual(
          0
        );

        expect(
          confidence
        ).toBeLessThanOrEqual(
          1
        );
      }
    );

    it(
      "should classify confidence",
      () => {
        expect(
          getConfidenceLevel(
            0.1
          )
        ).toBe(
          "very_low"
        );

        expect(
          getConfidenceLevel(
            0.95
          )
        ).toBe(
          "very_high"
        );
      }
    );
  }
);
