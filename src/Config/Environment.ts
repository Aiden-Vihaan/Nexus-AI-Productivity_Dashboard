export type Environment =
  | "development"
  | "test"
  | "staging"
  | "production";

export interface EnvironmentConfig {
  environment: Environment;

  applicationName: string;

  port: number;

  apiPrefix: string;

  databaseUrl: string;

  aiProvider: string;

  sessionSecret: string;

  logLevel: string;

  rateLimitWindowMs: number;

  rateLimitMaxRequests: number;
}

function getEnvironment(): Environment {
  const value =
    process.env.NODE_ENV ||
    "development";

  if (
    value === "production" ||
    value === "staging" ||
    value === "test" ||
    value === "development"
  ) {
    return value;
  }

  return "development";
}

function getNumber(
  value: string | undefined,
  fallback: number
): number {
  const parsed =
    Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
}

export function loadEnvironmentConfig():
  EnvironmentConfig {
  return {
    environment:
      getEnvironment(),

    applicationName:
      process.env.APP_NAME ||
      "NEXUS",

    port:
      getNumber(
        process.env.PORT,
        3000
      ),

    apiPrefix:
      process.env.API_PREFIX ||
      "/api",

    databaseUrl:
      process.env.DATABASE_URL ||
      "memory://nexus",

    aiProvider:
      process.env.AI_PROVIDER ||
      "mock",

    sessionSecret:
      process.env.SESSION_SECRET ||
      "development-secret",

    logLevel:
      process.env.LOG_LEVEL ||
      "info",

    rateLimitWindowMs:
      getNumber(
        process.env.RATE_LIMIT_WINDOW_MS,
        60000
      ),

    rateLimitMaxRequests:
      getNumber(
        process.env.RATE_LIMIT_MAX_REQUESTS,
        100
      )
  };
}
