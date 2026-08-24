import {
  rankDecisions
} from "../../../src/intelligence/decision/decision-ranking";

describe(
  "Decision Ranking",
  () => {
    it(
      "should rank stronger decisions first",
      () => {
        const base = {
          userId:
            "user-001",

          intervention:
            "dashboard_signal" as const,

          description:
            "Test",

          rationale:
            "Test",

          confidence:
            0.8,

          userImpact:
            0.8,

          interventionCost:
            0.2,

          predictionId:
            "prediction-001",

          evidence: [],

          createdAt:
            new Date().toISOString(),

          expiresAt:
            new Date().toISOString()
        };

        const decisions = [
          {
            ...base,

            id:
              "decision-1",

            type:
              "prepare_for_completion" as const,

            priority:
              "low" as const,

            title:
              "Low priority",

            score:
              0.4,

            urgency:
              0.3
          },

          {
            ...base,

            id:
              "decision-2",

            type:
              "suggest_break" as const,

            priority:
              "high" as const,

            title:
              "High priority",

            score:
              0.9,

            urgency:
              0.9
          }
        ];

        const result =
          rankDecisions(
            decisions
          );

        expect(
          result[0].id
        ).toBe(
          "decision-2"
        );
      }
    );
  }
);
