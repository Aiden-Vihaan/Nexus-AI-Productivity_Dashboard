import {
  calculateInterventionPriority
} from "../../../src/intelligence/intervention/intervention-priority";

describe(
  "Intervention Priority",
  () => {
    it(
      "should classify critical interventions",
      () => {
        expect(
          calculateInterventionPriority(
            0.98,
            0.05
          )
        ).toBe(
          "critical"
        );
      }
    );

    it(
      "should classify high priority interventions",
      () => {
        expect(
          calculateInterventionPriority(
            0.82,
            0.1
          )
        ).toBe(
          "high"
        );
      }
    );

    it(
      "should classify low priority interventions",
      () => {
        expect(
          calculateInterventionPriority(
            0.4,
            0.2
          )
        ).toBe(
          "low"
        );
      }
    );
  }
);
