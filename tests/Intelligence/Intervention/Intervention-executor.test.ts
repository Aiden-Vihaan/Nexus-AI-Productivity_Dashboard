import {
  DefaultInterventionExecutor
} from "../../../src/intelligence/intervention/intervention-executor";

describe(
  "Intervention Executor",
  () => {
    it(
      "should execute a valid intervention",
      async () => {
        const executor =
          new DefaultInterventionExecutor();

        const result =
          await executor.execute({
            id:
              "intervention-001",

            userId:
              "user-001",

            decisionId:
              "decision-001",

            type:
              "dashboard_signal",

            priority:
              "medium",

            status:
              "executing",

            payload: {
              title:
                "NEXUS signal",

              message:
                "Test intervention."
            },

            score:
              0.8,

            interruptionCost:
              0.2,

            createdAt:
              new Date().toISOString(),

            expiresAt:
              new Date(
                Date.now() +
                  60000
              ).toISOString()
          });

        expect(
          result.success
        ).toBe(true);

        expect(
          result.status
        ).toBe(
          "delivered"
        );
      }
    );

    it(
      "should reject null interventions",
      async () => {
        const executor =
          new DefaultInterventionExecutor();

        const result =
          await executor.execute({
            id:
              "intervention-002",

            userId:
              "user-001",

            decisionId:
              "decision-002",

            type:
              "none",

            priority:
              "low",

            status:
              "executing",

            payload: {
              title:
                "",

              message:
                ""
            },

            score:
              0,

            interruptionCost:
              0,

            createdAt:
              new Date().toISOString(),

            expiresAt:
              new Date().toISOString()
          });

        expect(
          result.success
        ).toBe(false);
      }
    );
  }
);
