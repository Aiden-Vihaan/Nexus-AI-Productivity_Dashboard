import {
  MetricsRegistry
} from "../../src/observability/metrics";

describe(
  "MetricsRegistry",
  () => {
    it(
      "should increment counters",
      () => {
        const metrics =
          new MetricsRegistry();

        metrics.increment(
          "api.requests"
        );

        metrics.increment(
          "api.requests",
          2
        );

        expect(
          metrics.get(
            "api.requests"
          )
        ).toBe(3);
      }
    );
  }
);
