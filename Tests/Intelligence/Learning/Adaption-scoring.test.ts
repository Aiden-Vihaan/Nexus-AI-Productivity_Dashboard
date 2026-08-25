import {
  calculateAdaptationRisk,
  calculateAdaptationBenefit,
  calculateAdaptationPriority
} from "../../../src/intelligence/learning/adaptation-scoring";

describe(
  "Adaptation Scoring",
  () => {
    const candidate = {
      id:
        "candidate-001",

      userId:
        "user-001",

      target:
        "notification_threshold",

      currentValue:
        0.7,

      proposedValue:
        0.75,

      direction:
        "increase" as const,

      evidence: {
        id:
          "evidence-001",

        userId:
          "user-001",

        interventionType:
          "notification",

        signals: [],

        sampleSize:
          20,

        averageConfidence:
          0.9,

        effectiveness:
          0.6,

        consistency:
          0.9,

        createdAt:
          new Date().toISOString()
      },

      score:
        0.8,

      confidence:
        0.9,

      status:
        "observed" as const,

      reason:
        "Repeated positive outcomes.",

      createdAt:
        new Date().toISOString()
    };

    it(
      "should calculate risk",
      () => {
        const risk =
          calculateAdaptationRisk(
            candidate
          );

        expect(
          risk
        ).toBeGreaterThanOrEqual(
          0
        );

        expect(
          risk
        ).toBeLessThanOrEqual(
          1
        );
      }
    );

    it(
      "should calculate benefit",
      () => {
        const benefit =
          calculateAdaptationBenefit(
            candidate
          );

        expect(
          benefit
        ).toBeGreaterThan(
          0
        );
      }
    );

    it(
      "should calculate priority",
      () => {
        const priority =
          calculateAdaptationPriority(
            candidate
          );

        expect(
          priority
        ).toBeGreaterThan(
          0
        );
      }
    );
  }
);
