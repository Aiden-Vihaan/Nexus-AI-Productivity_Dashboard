import {
  calculateOutcomeScore,
  calculateOutcomeConfidence,
  classifyOutcomeEffect
} from "../../../src/intelligence/outcome/outcome-scoring";

describe(
  "Outcome Scoring",
  () => {
    it(
      "should calculate a positive outcome",
      () => {
        const score =
          calculateOutcomeScore([
            {
              name:
                "focus",

              value:
                0.9,

              baseline:
                0.6,

              direction:
                "increase",

              confidence:
                0.9
            }
          ]);

        expect(
          score
        ).toBeGreaterThan(
          0
        );
      }
    );

    it(
      "should classify positive outcomes",
      () => {
        expect(
          classifyOutcomeEffect(
            0.5
          )
        ).toBe(
          "positive"
        );
      }
    );

    it(
      "should classify negative outcomes",
      () => {
        expect(
          classifyOutcomeEffect(
            -0.5
          )
        ).toBe(
          "negative"
        );
      }
    );

    it(
      "should classify neutral outcomes",
      () => {
        expect(
          classifyOutcomeEffect(
            0.05
          )
        ).toBe(
          "neutral"
        );
      }
    );

    it(
      "should calculate confidence",
      () => {
        const confidence =
          calculateOutcomeConfidence([
            {
              name:
                "focus",

              value:
                0.8,

              baseline:
                0.6,

              direction:
                "increase",

              confidence:
                0.8
            },

            {
              name:
                "completion",

              value:
                0.9,

              baseline:
                0.7,

              direction:
                "increase",

              confidence:
                0.9
            }
          ]);

        expect(
          confidence
        ).toBeCloseTo(
          0.85
        );
      }
    );
  }
);
