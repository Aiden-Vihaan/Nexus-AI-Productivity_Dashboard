export interface Trace {
  traceId: string;

  operation: string;

  startedAt: string;

  durationMs?: number;

  metadata?: Record<
    string,
    unknown
  >;
}

export class Tracer {
  start(
    operation: string,
    metadata?: Record<
      string,
      unknown
    >
  ): Trace {
    return {
      traceId:
        crypto.randomUUID(),

      operation,

      startedAt:
        new Date().toISOString(),

      metadata
    };
  }

  finish(
    trace: Trace
  ): Trace {
    return {
      ...trace,

      durationMs:
        Date.now() -
        new Date(
          trace.startedAt
        ).getTime()
    };
  }
}
