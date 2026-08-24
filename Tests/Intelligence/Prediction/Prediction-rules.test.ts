import {
  predictFocusLoss,
  predictBreakNeeded
} from "../../../src/intelligence/prediction/prediction-rules";

describe(
  "Prediction Rules",
  () => {
    it(
      "should detect possible focus loss under high workload",
      () => {
        const prediction =
          predictFocusLoss({
            userId:
              "user-001",

            focus:
              "focused",

            workload:
              "overloaded",

            session:
              "active",

            activeTask: {
              taskId:
                "task-001"
            },

            confidence:
              0.8,

            recentActivityCount:
              12,

            capturedAt:
              new Date().toISOString(),

            version:
              5
          });

        expect(
          prediction
        ).toBeDefined();

        expect(
          prediction?.type
        ).toBe(
          "focus_loss"
        );
      }
    );

    it(
      "should identify a possible break requirement",
      () => {
        const prediction =
          predictBreakNeeded({
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
              8
          });

        expect(
          prediction
        ).toBeDefined();

        expect(
          prediction?.type
        ).toBe(
          "break_needed"
        );
      }
    );
  }
);
