import {
  OutcomeService
} from "../../../src/intelligence/outcome/outcome-service";

describe(
  "OutcomeService",
  () => {
    it(
      "should create and store an outcome",
      async () => {
        const service =
          new OutcomeService();

        const result =
          await service.observe({
            userId:
              "user-001",

            interventionId:
              "intervention-001",

            decisionId:
              "decision-001",

            type:
              "completed",

            source:
              "behavioral_signal",

            signals: [
              {
                name:
                  "focus",

                value:
                  0.9,

                baseline:
                  0.6,

                direction:
                  "increase",

                confidence:
                  0.9
              }
            ],

            observedAt:
              new Date().toISOString()
          });

        expect(
          result.accepted
        ).toBe(true);

        expect(
          result.outcome.id
        ).toBeDefined();

        expect(
          result.outcome.effect
        ).toBe(
          "positive"
        );

        expect(
          result.outcome.confidence
        ).toBeGreaterThan(
          0
        );
      }
    );

    it(
      "should reject missing intervention ids",
      async () => {
        const service =
          new OutcomeService();

        const result =
          await service.observe({
            userId:
              "user-001",

            interventionId:
              "",

            decisionId:
              "decision-001",

            type:
              "completed",

            source:
              "automatic",

            signals: [],

            observedAt:
              new Date().toISOString()
          });

        expect(
          result.accepted
        ).toBe(false);
      }
    );
  }
);
