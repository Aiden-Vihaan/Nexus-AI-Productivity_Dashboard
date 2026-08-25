import {
  evaluateInterventionBudget
} from "../../../src/intelligence/intervention/intervention-budget";

describe(
  "Intervention Budget",
  () => {
    it(
      "should allow interventions when budget remains",
      () => {
        const result =
          evaluateInterventionBudget({
            maxInterventionsPerHour:
              10,

            maxHighFrictionPerHour:
              3,

            currentInterventions:
              4,

            currentHighFriction:
              1
          });

        expect(
          result.allowed
        ).toBe(true);

        expect(
          result.remainingInterventions
        ).toBe(6);
      }
    );

    it(
      "should block exhausted budgets",
      () => {
        const result =
          evaluateInterventionBudget({
            maxInterventionsPerHour:
              10,

            maxHighFrictionPerHour:
              3,

            currentInterventions:
              10,

            currentHighFriction:
              1
          });

        expect(
          result.allowed
        ).toBe(false);
      }
    );
  }
);
