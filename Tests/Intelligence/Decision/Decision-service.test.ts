import {
  DecisionService
} from "../../../src/intelligence/decision/decision-service";

describe(
  "DecisionService",
  () => {
    it(
      "should return a decision result",
      () => {
        const service =
          new DecisionService();

        const result =
          service.generateDecisions({
            userId:
              "user-001",

            predictions: [],

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
                4,

              capturedAt:
                new Date().toISOString(),

              version:
                20
            }
          });

        expect(
          result.decisions
        ).toEqual([]);

        expect(
          result.contextVersion
        ).toBe(20);

        expect(
          result.generatedAt
        ).toBeDefined();
      }
    );
  }
);
