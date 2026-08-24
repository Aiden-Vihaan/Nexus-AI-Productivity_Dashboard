import {
  decisionPolicies
} from "../../../src/intelligence/decision/decision-policies";

describe(
  "Decision Policies",
  () => {
    it(
      "should define a break policy",
      () => {
        const policy =
          decisionPolicies[
            "suggest_break"
          ];

        expect(
          policy.minimumPredictionProbability
        ).toBeGreaterThan(0);

        expect(
          policy.minimumConfidence
        ).toBeGreaterThan(0);

        expect(
          policy.cooldownMinutes
        ).toBeGreaterThan(0);
      }
    );

    it(
      "should define policies for all actionable decision types",
      () => {
        expect(
          decisionPolicies[
            "suggest_break"
          ]
        ).toBeDefined();

        expect(
          decisionPolicies[
            "protect_focus"
          ]
        ).toBeDefined();

        expect(
          decisionPolicies[
            "prioritize_task"
          ]
        ).toBeDefined();

        expect(
          decisionPolicies[
            "reduce_context_switching"
          ]
        ).toBeDefined();

        expect(
          decisionPolicies[
            "prepare_for_completion"
          ]
        ).toBeDefined();
      }
    );
  }
);
