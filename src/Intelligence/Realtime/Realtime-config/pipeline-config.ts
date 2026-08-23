export const realtimePipelineConfig = {
  latencyTargets: {
    eventIngestionMs: 50,
    contextProcessingMs: 80,
    predictionProcessingMs: 100,
    personalizationProcessingMs: 50,
    decisionProcessingMs: 50,
    endToEndCriticalPathMs: 300
  },

  retry: {
    maxAttempts: 3,
    initialBackoffMs: 100,
    maxBackoffMs: 5000
  },

  delivery: {
    mode: "AT_LEAST_ONCE"
  }
} as const;
