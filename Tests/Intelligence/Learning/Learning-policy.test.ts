import {
  evaluateLearningCandidate
} from "../../../src/intelligence/learning/learning-policy";

describe(
  "Learning Policy",
  () => {
    const baseCandidate =
      {
        id:
          "candidate-001",

        userId:
          "user-001",

        target:
          "focus_threshold",

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
            "focus_protection",

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
      "should approve strong evidence",
      () => {
        const decision =
          evaluateLearningCandidate(
            baseCandidate
          );

        expect(
          decision.approved
        ).toBe(true);
      }
    );

    it(
      "should reject insufficient evidence",
      () => {
        const candidate = {
          ...baseCandidate,

          evidence: {
            ...baseCandidate.evidence,

            sampleSize:
              3
          }
        };

        const decision =
          evaluateLearningCandidate(
            candidate
          );

        expect(
          decision.approved
        ).toBe(false);
      }
    );

    it(
      "should reject low confidence",
      () => {
        const candidate = {
          ...baseCandidate,

          confidence:
            0.3
        };

        const decision =
          evaluateLearningCandidate(
            candidate
          );

        expect(
          decision.approved
        ).toBe(false);
      }
    );

    it(
      "should reject excessive changes",
      () => {
        const candidate = {
          ...baseCandidate,

          proposedValue:
            1.5
        };

        const decision =
          evaluateLearningCandidate(
            candidate
          );

        expect(
          decision.approved
        ).toBe(false);
      }
    );
  }
);
