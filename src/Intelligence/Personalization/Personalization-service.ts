import {
  MemoryService
} from "./memory-service";

import {
  PersonalizationContext,
  PersonalizationDecision,
  PersonalizationSignal
} from "./personalization-types";

export class PersonalizationService {
  constructor(
    private readonly memoryService:
      MemoryService
  ) {}

  async buildContext(
    userId: string,
    context:
      Record<string, unknown>
  ): Promise<PersonalizationContext> {
    const relevantMemories =
      await this.memoryService.search(
        userId,
        context,
        10
      );

    return {
      userId,

      context,

      relevantMemories,

      generatedAt:
        new Date().toISOString()
    };
  }

  async generateDecision(
    userId: string,
    context:
      Record<string, unknown>
  ): Promise<PersonalizationDecision> {
    const personalizationContext =
      await this.buildContext(
        userId,
        context
      );

    const signals:
      PersonalizationSignal[] =
      personalizationContext
        .relevantMemories.map(
          result => ({
            key:
              result.memory.key,

            value:
              result.memory.value,

            confidence:
              result.memory
                .confidence,

            source:
              "memory"
          })
        );

    const confidence =
      signals.length === 0
        ? 0
        : signals.reduce(
            (sum, signal) =>
              sum +
              signal.confidence,
            0
          ) / signals.length;

    return {
      userId,

      signals,

      confidence,

      reason:
        signals.length > 0
          ? "Decision enriched using relevant user memories."
          : "No relevant user memories were available.",

      generatedAt:
        new Date().toISOString()
    };
  }
}
