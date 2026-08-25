import {
  createIntelligenceSummary
} from "../../src/intelligence/intelligence-summary";

describe(
  "IntelligenceSummary",
  () => {
    it(
      "should summarize dashboard intelligence",
      () => {
        const summary =
          createIntelligenceSummary({
            userId:
              "user-001",

            generatedAt:
              new Date().toISOString(),

            productivityScore:
              90,

            focusScore:
              95,

            energyScore:
              70,

            cognitiveLoad:
              30,

            tasks: [
              {
                id:
                  "task-1",

                title:
                  "Complete architecture",

                status:
                  "in-progress",

                priority:
                  "high",

                estimatedMinutes:
                  60,

                energyRequired:
                  "high"
              }
            ],

            predictions: [],

            interventions: [],

            memories: [],

            insights: []
          });

        expect(
          summary.activeTasks
        ).toBe(1);

        expect(
          summary.completedTasks
        ).toBe(0);

        expect(
          summary.dominantSignal
        ).toBe("focus");
      }
    );
  }
);
