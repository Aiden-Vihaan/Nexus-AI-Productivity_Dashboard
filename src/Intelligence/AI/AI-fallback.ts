import {
  AIResponse
} from "./ai-types";

export interface AIFallbackStrategy {
  createFallback(
    requestId: string,
    reason: string
  ): AIResponse;
}

export class SafeAIFallback
  implements AIFallbackStrategy {
  createFallback(
    requestId: string,
    reason: string
  ): AIResponse {
    return {
      requestId,

      provider: "local",

      model:
        "nexus-safe-fallback",

      content:
        "NEXUS could not confidently generate an AI response. Existing deterministic intelligence remains active.",

      confidence: 0.1,

      confidenceLevel:
        "very_low",

      latencyMs: 0,

      cached: false,

      createdAt:
        new Date().toISOString(),

      metadata: {
        fallback: true,

        reason
      }
    };
  }
}
