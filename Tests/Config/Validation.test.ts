import {
  validateConfiguration
} from "../../src/config/validation";

describe(
  "Configuration Validation",
  () => {
    it(
      "should validate a development configuration",
      () => {
        const result =
          validateConfiguration({
            environment:
              "development",

            applicationName:
              "NEXUS",

            port:
              3000,

            apiPrefix:
              "/api",

            databaseUrl:
              "memory://nexus",

            aiProvider:
              "mock",

            sessionSecret:
              "development-secret",

            logLevel:
              "info",

            rateLimitWindowMs:
              60_000,

            rateLimitMaxRequests:
              100
          });

        expect(
          result.valid
        ).toBe(true);
      }
    );

    it(
      "should reject insecure production configuration",
      () => {
        const result =
          validateConfiguration({
            environment:
              "production",

            applicationName:
              "NEXUS",

            port:
              3000,

            apiPrefix:
              "/api",

            databaseUrl:
              "production-db",

            aiProvider:
              "production",

            sessionSecret:
              "development-secret",

            logLevel:
              "info",

            rateLimitWindowMs:
              60_000,

            rateLimitMaxRequests:
              100
          });

        expect(
          result.valid
        ).toBe(false);
      }
    );
  }
);
