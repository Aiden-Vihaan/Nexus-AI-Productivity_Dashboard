import {
  PredictionService
} from "../../../src/intelligence/prediction/prediction-service";

describe(
  "PredictionService",
  () => {
    it(
      "should generate predictions from context",
      () => {
        const service =
          new PredictionService();

        const predictions =
          service.generatePredictions({
            userId:
              "user-001",

            context: {
              userId:
                "user-001",

              focus:
                "focused",

              workload:
                "balanced",

              session:
                "active",

              activeTask: {
                taskId:
                  "task-001",

                title:
                  "Architecture work"
              },

              confidence:
                0.85,

              recentActivityCount:
                6,

              capturedAt:
                new Date().toISOString(),

              version:
                3
            }
          });

        expect(
          Array.isArray(
            predictions
          )
        ).toBe(true);
      }
    );
  }
);
