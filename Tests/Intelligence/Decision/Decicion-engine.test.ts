import {
  DecisionEngine
} from "../../../src/intelligence/decision/decision-engine";

describe(
  "DecisionEngine",
  () => {
    const engine =
      new DecisionEngine();

    it(
      "should generate a break suggestion from a strong break prediction",
      () => {
        const result =
          engine.decide({
            userId:
              "user-001",

            predictions: [
              {
                id:
                  "prediction-001",

                userId:
                  "user-001",

                type:
                  "break_needed",

                title:
                  "Break may be beneficial",

                description:
                  "A short break may help.",

                probability:
                  0.85,

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
                  new Date(
                    Date.now() +
                      15 *
                        60 *
                        1000
                  ).toISOString()
              }
            ],

            context: {
              userId:
                "user-001",

              focus:
                "focused",

              workload:
                "heavy",

              session:
                "active",

              activeTask: {
                taskId:
                  "task-001"
              },

              confidence:
                0.9,

              recentActivityCount:
                15,

              capturedAt:
                new Date().toISOString(),

              version:
                10
            }
          });

        expect(
          result.decisions.length
        ).toBeGreaterThan(0);

        expect(
          result.decisions[0].type
        ).toBe(
          "suggest_break"
        );
      }
    );

    it(
      "should not generate a decision from a weak prediction",
      () => {
        const result =
          engine.decide({
            userId:
              "user-001",

            predictions: [
              {
                id:
                  "prediction-002",

                userId:
                  "user-001",

                type:
                  "break_needed",

                title:
                  "Weak prediction",

                description:
                  "Weak signal.",

                probability:
                  0.3,

                confidence:
                  0.4,

                priority:
                  "low",

                horizonMinutes:
                  30,

                evidence: [],

                createdAt:
                  new Date().toISOString(),

                expiresAt:
                  new Date(
                    Date.now() +
                      30 *
                        60 *
                        1000
                  ).toISOString()
              }
            ],

            context: {
              userId:
                "user-001",

              focus:
                "focused",

              workload:
                "balanced",

              session:
                "active",

              activeTask:
                undefined,

              confidence:
                0.8,

              recentActivityCount:
                3,

              capturedAt:
                new Date().toISOString(),

              version:
                11
            }
          });

        expect(
          result.decisions.length
        ).toBe(0);
      }
    );
  }
);
