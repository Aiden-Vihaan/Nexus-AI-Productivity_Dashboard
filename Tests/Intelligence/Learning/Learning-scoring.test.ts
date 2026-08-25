import {
  calculateEvidenceScore,
  calculateLearningConfidence,
  createLearningCandidate
} from "../../../src/intelligence/learning/learning-scoring";

describe(
  "Learning Scoring",
  () => {
    const evidence = {
      id:
        "evidence-001",

      userId:
        "user-001",

      interventionType:
        "focus_protection",

      signals: [],

      sampleSize:
        20,

      averageConfidence:
        0.9,

      effectiveness:
        0.6,

      consistency:
        0.85,

      createdAt:
        new Date().toISOString()
    };

    it(
      "should calculate evidence score",
      () => {
        const score =
          calculateEvidenceScore(
            evidence
          );

        expect(
          score
        ).toBeGreaterThan(
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
      "should calculate learning confidence",
      () => {
        const confidence =
          calculateLearningConfidence(
            evidence
          );

        expect(
          confidence
        ).toBeCloseTo(
          0.875
        );
      }
    );

    it(
      "should create a learning candidate",
      () => {
        const candidate =
          createLearningCandidate(
            "user-001",
            "focus_threshold",
            0.7,
            0.75,
            evidence,
            "Repeated positive outcomes."
          );

        expect(
          candidate.id
        ).toBeDefined();

        expect(
          candidate.direction
        ).toBe(
          "increase"
        );

        expect(
          candidate.score
        ).toBeGreaterThan(
          0
        );
      }
    );
  }
);
