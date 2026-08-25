import {
  InterventionService
} from "../../../src/intelligence/intervention/intervention-service";

describe(
  "InterventionService",
  () => {
    it(
      "should process an eligible intervention",
      async () => {
        const service =
          new InterventionService();

        const result =
          await service.process({
            userId:
              "user-001",

            decisionId:
              "decision-001",

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
                "Focus signal",

              message:
                "Your focus state may be changing."
            },

            expiresAt:
              new Date(
                Date.now() +
                  60000
              ).toISOString(),

            recentInterventionCount:
              0,

            recentHighFrictionCount:
              0
          });

        expect(
          result.accepted
        ).toBe(true);

        expect(
          result.intervention.status
        ).toBe(
          "delivered"
        );

        expect(
          result.intervention.deliveredAt
        ).toBeDefined();
      }
    );

    it(
      "should reject an intervention that exceeds the score threshold",
      async () => {
        const service =
          new InterventionService();

        const result =
          await service.process({
            userId:
              "user-001",

            decisionId:
              "decision-002",

            type:
              "notification",

            priority:
              "low",

            score:
              0.4,

            interruptionCost:
              0.4,

            payload: {
              title:
                "Weak signal",

              message:
                "This should not be delivered."
            },

            expiresAt:
              new Date(
                Date.now() +
                  60000
              ).toISOString(),

            recentInterventionCount:
              0,

            recentHighFrictionCount:
              0
          });

        expect(
          result.accepted
        ).toBe(false);

        expect(
          result.intervention.status
        ).toBe(
          "cancelled"
        );
      }
    );
  }
);
