import {
  PredictionEngine
} from "../../../src/intelligence/prediction/prediction-engine";

import {
  UserContextSnapshot
} from "../../../src/intelligence/prediction/prediction-types";

describe(
  "PredictionEngine",
  () => {
    const engine =
      new PredictionEngine();

    it(
      "should predict task completion when the user is focused on an active task",
      () => {
        const context:
          UserContextSnapshot = {
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
              "Build prediction engine"
          },

          confidence:
            0.8,

          recentActivityCount:
            5,

          capturedAt:
            new Date().toISOString(),

          version:
            4
        };

        const predictions =
          engine.predict(
            context
          );

        expect(
          predictions.length
        ).toBeGreaterThan(0);

        expect(
          predictions.some(
            prediction =>
              prediction.type ===
              "task_completion"
          )
        ).toBe(true);
      }
    );

    it(
      "should not predict task completion without an active task",
      () => {
        const context:
          UserContextSnapshot = {
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
            5,

          capturedAt:
            new Date().toISOString(),

          version:
            2
        };

        const predictions =
          engine.predict(
            context
          );

        expect(
          predictions.some(
            prediction =>
              prediction.type ===
              "task_completion"
          )
        ).toBe(false);
      }
    );
  }
);
