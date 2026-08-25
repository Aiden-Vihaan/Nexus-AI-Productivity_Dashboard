import {
  createCommandCenterModel
} from "../../src/ui/command-center";

describe(
  "CommandCenter",
  () => {
    it(
      "should create a command center model",
      () => {
        const model =
          createCommandCenterModel({
            userId:
              "user-001",

            generatedAt:
              new Date().toISOString(),

            productivityScore:
              87,

            focusScore:
              92,

            energyScore:
              76,

            cognitiveLoad:
              34,

            tasks: [],

            predictions: [],

            interventions: [
              {
                id:
                  "intervention-1",

                title:
                  "Enter focus mode",

                type:
                  "focus",

                priority:
                  "high",

                confidence:
                  0.89,

                reason:
                  "Your focus window is approaching."
              }
            ],

            memories: [],

            insights: [
              {
                id:
                  "insight-1",

                title:
                  "High-focus window detected",

                description:
                  "Your recent activity suggests an optimal focus period.",

                type:
                  "pattern",

                confidence:
                  0.91,

                createdAt:
                  new Date().toISOString()
              }
            ]
          });

        expect(
          model.productivityScore
        ).toBe(87);

        expect(
          model.primaryInsight
        ).toBe(
          "High-focus window detected"
        );

        expect(
          model.primaryAction
        ).toBe(
          "Enter focus mode"
        );
      }
    );
  }
);
