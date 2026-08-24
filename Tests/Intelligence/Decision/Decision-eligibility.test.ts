import {
  isDecisionEligible
} from "../../../src/intelligence/decision/decision-eligibility";

describe(
  "Decision Eligibility",
  () => {
    const policy = {
      type:
        "suggest_break" as const,

      minimumPredictionProbability:
        0.65,

      minimumConfidence:
        0.65,

      maximumInterventionCost:
        0.55,

      minimumDecisionScore:
        0.55,

      cooldownMinutes:
        30
    };

    it(
      "should allow a strong prediction",
      () => {
        const result =
          isDecisionEligible({
            prediction: {
              id:
                "prediction-001",

              userId:
                "user-001",

              type:
                "break_needed",

              title:
                "Break",

              description:
                "Test",

              probability:
                0.9,

              confidence:
                0.9,

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

            policy,

            recentDecisionTypes: []
          });

        expect(
          result
        ).toBe(true);
      }
    );

    it(
      "should reject weak predictions",
      () => {
        const result =
          isDecisionEligible({
            prediction: {
              id:
                "prediction-002",

              userId:
                "user-001",

              type:
                "break_needed",

              title:
                "Break",

              description:
                "Test",

              probability:
                0.4,

              confidence:
                0.4,

              priority:
                "low",

              horizonMinutes:
                15,

              evidence: [],

              createdAt:
                new Date().toISOString(),

              expiresAt:
                new Date().toISOString()
            },

            policy,

            recentDecisionTypes: []
          });

        expect(
          result
        ).toBe(false);
      }
    );

    it(
      "should prevent repeated decision types",
      () => {
        const result =
          isDecisionEligible({
            prediction: {
              id:
                "prediction-003",

              userId:
                "user-001",

              type:
                "break_needed",

              title:
                "Break",

              description:
                "Test",

              probability:
                0.9,

              confidence:
                0.9,

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

            policy,

            recentDecisionTypes: [
              "suggest_break"
            ]
          });

        expect(
          result
        ).toBe(false);
      }
    );
  }
);
