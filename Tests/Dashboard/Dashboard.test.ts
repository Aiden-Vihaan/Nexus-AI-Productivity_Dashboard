import {
  DashboardService
} from "../../src/dashboard/dashboard-service";

describe(
  "DashboardService",
  () => {
    it(
      "should assemble a unified dashboard",
      () => {
        const service =
          new DashboardService();

        const dashboard =
          service.build(
            "user-001",
            {
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

              interventions: [],

              memories: [],

              insights: []
            }
          );

        expect(
          dashboard.userId
        ).toBe(
          "user-001"
        );

        expect(
          dashboard.productivityScore
        ).toBe(87);

        expect(
          dashboard.focusScore
        ).toBe(92);
      }
    );
  }
);
