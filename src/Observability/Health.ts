export interface HealthCheck {
  name: string;

  status:
    | "healthy"
    | "degraded"
    | "unhealthy";

  latencyMs?: number;

  details?: Record<
    string,
    unknown
  >;
}

export interface SystemHealth {
  status:
    | "healthy"
    | "degraded"
    | "unhealthy";

  timestamp: string;

  checks: HealthCheck[];
}

export function buildSystemHealth(
  checks: HealthCheck[]
): SystemHealth {
  const hasUnhealthy =
    checks.some(
      check =>
        check.status ===
        "unhealthy"
    );

  const hasDegraded =
    checks.some(
      check =>
        check.status ===
        "degraded"
    );

  return {
    status: hasUnhealthy
      ? "unhealthy"
      : hasDegraded
      ? "degraded"
      : "healthy",

    timestamp:
      new Date().toISOString(),

    checks
  };
}
