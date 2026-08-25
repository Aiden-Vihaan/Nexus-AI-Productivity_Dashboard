import {
  AIRequest,
  AIResponse
} from "./ai-types";

import {
  AIProviderClient
} from "./ai-provider";

import {
  AICache
} from "./ai-cache";

import {
  SafeAIFallback
} from "./ai-fallback";

import {
  validateAIInput,
  validateAIOutput
} from "./ai-safety";

import {
  calculateAIConfidence,
  getConfidenceLevel
} from "./ai-confidence";

export class AIOrchestrator {
  constructor(
    private readonly provider:
      AIProviderClient,

    private readonly cache:
      AICache = new AICache(),

    private readonly fallback:
      SafeAIFallback =
      new SafeAIFallback()
  ) {}

  async execute(
    request: AIRequest
  ): Promise<AIResponse> {
    const input =
      request.messages
        .map(
          message =>
            message.content
        )
        .join("\n");

    const validation =
      validateAIInput(
        input
      );

    if (!validation.allowed) {
      return this.fallback.createFallback(
        request.id,
        validation.reasons.join(
          " "
        )
      );
    }

    const cacheKey =
      this.createCacheKey(
        request
      );

    const cached =
      this.cache.get<AIResponse>(
        cacheKey
      );

    if (cached) {
      return {
        ...cached,

        cached: true
      };
    }

    const startedAt =
      Date.now();

    try {
      const providerResponse =
        await this.provider.generate(
          request
        );

      const outputValidation =
        validateAIOutput(
          providerResponse.content
        );

      if (
        !outputValidation.allowed
      ) {
        return this.fallback.createFallback(
          request.id,
          outputValidation.reasons.join(
            " "
          )
        );
      }

      const confidence =
        calculateAIConfidence(
          request.context
            ? Object.keys(
                request.context
              ).length
            : 0,
          request.context
            ? 0.8
            : 0.4,
          0.8
        );

      const response: AIResponse =
        {
          requestId:
            request.id,

          provider:
            this.provider.name as any,

          model:
            providerResponse.model,

          content:
            outputValidation.sanitizedContent,

          confidence,

          confidenceLevel:
            getConfidenceLevel(
              confidence
            ),

          latencyMs:
            Date.now() -
            startedAt,

          cached: false,

          createdAt:
            new Date().toISOString(),

          metadata:
            providerResponse.metadata
        };

      this.cache.set(
        cacheKey,
        response,
        30_000
      );

      return response;
    } catch (error) {
      return this.fallback.createFallback(
        request.id,
        error instanceof Error
          ? error.message
          : "Unknown AI provider error."
      );
    }
  }

  private createCacheKey(
    request: AIRequest
  ): string {
    return JSON.stringify({
      userId:
        request.userId,

      type:
        request.type,

      messages:
        request.messages,

      context:
        request.context
    });
  }
}
