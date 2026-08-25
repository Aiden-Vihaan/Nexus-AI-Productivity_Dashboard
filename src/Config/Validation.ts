import {
  EnvironmentConfig
} from "./environment";

export interface ConfigValidationResult {
  valid: boolean;

  errors: string[];
}

export function validateConfiguration(
  config: EnvironmentConfig
): ConfigValidationResult {
  const errors: string[] = [];

  if (!config.applicationName) {
    errors.push(
      "Application name is required."
    );
  }

  if (
    config.port < 1 ||
    config.port > 65535
  ) {
    errors.push(
      "Port must be between 1 and 65535."
    );
  }

  if (!config.databaseUrl) {
    errors.push(
      "Database URL is required."
    );
  }

  if (
    config.environment ===
      "production" &&
    config.sessionSecret ===
      "development-secret"
  ) {
    errors.push(
      "Production must use a secure session secret."
    );
  }

  if (
    config.rateLimitMaxRequests <
    1
  ) {
    errors.push(
      "Rate limit must allow at least one request."
    );
  }

  return {
    valid:
      errors.length === 0,

    errors
  };
}
