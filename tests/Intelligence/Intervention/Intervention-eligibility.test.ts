import {
  evaluateInterventionEligibility
} from "../../../src/intelligence/intervention/intervention-eligibility";

describe(
  "Intervention Eligibility",
  () => {
    const policy = {
      type:
        "dashboard_signal" as const,

      minimumScore:
        0.55,

      maximumInterruptionCost:
        0.5,

      maximumRecentInterventions:
        8,

      maximumRecentHighFrictionInterventions:
        3,

      cooldownMinutes:
        15,

      requiresExplicitApproval:
        false
    };

    it(
      "should allow a valid intervention",
      () => {
        const result =
          evaluateInterventionEligibility(
            {
              userId:
                "user-001",

              decisionId:
                "decision-001",

              type:
                "dashboard_signal",

              priority:
                "medium",

              score:
                0.75,

              interruptionCost:
                0.2,

              payload: {
                title:
                  "Focus signal",

                message:
                  "Your focus state changed."
              },

              expiresAt:
                new Date(
                  Date.now() +
                    60 *
                      1000
                ).toISOString(),

              recentInterventionCount:
                1,

              recentHighFrictionCount:
                0
            },

            policy
          );

        expect(
          result.eligible
        ).toBe(true);
      }
    );

    it(
      "should reject low score interventions",
      () => {
        const result =
          evaluateInterventionEligibility(
            {
              userId:
                "user-001",

              decisionId:
                "decision-002",

              type:
                "dashboard_signal",

              priority:
                "low",

              score:
                0.3,

              interruptionCost:
                0.2,

              payload: {
                title:
                  "Signal",

                message:
                  "Test."
              },

              expiresAt:
                new Date(
                  Date.now() +
                    60 *
                      1000
                ).toISOString(),

              recentInterventionCount:
                0,

              recentHighFrictionCount:
                0
            },

            policy
          );

        expect(
          result.eligible
        ).toBe(false);
      }
    );

    it(
      "should reject expired interventions",
      () => {
        const result =
          evaluateInterventionEligibility(
            {
              userId:
                "user-001",

              decisionId:
                "decision-003",

              type:
                "dashboard_signal",

              priority:
                "medium",

              score:
                0.8,

              interruptionCost:
                0.2,

              payload: {
                title:
                  "Expired",

                message:
                  "Expired intervention."
              },

              expiresAt:
                new Date(
                  Date.now() -
                    1000
                ).toISOString(),

              recentInterventionCount:
                0,

              recentHighFrictionCount:
                0
            },

            policy
          );

        expect(
          result.eligible
        ).toBe(false);
      }
    );
  }
);
