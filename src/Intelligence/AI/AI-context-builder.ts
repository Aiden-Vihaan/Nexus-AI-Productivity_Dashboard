import {
  PersonalizationContext
} from "../personalization/personalization-types";

export interface AIContext {
  userId: string;

  currentContext:
    Record<string, unknown>;

  memories:
    Array<Record<string, unknown>>;

  predictions:
    Array<Record<string, unknown>>;

  decisions:
    Array<Record<string, unknown>>;

  constraints:
    Array<Record<string, unknown>>;
}

export function buildAIContext(
  personalization:
    PersonalizationContext,

  predictions:
    Array<Record<string, unknown>> = [],

  decisions:
    Array<Record<string, unknown>> = [],

  constraints:
    Array<Record<string, unknown>> = []
): AIContext {
  return {
    userId:
      personalization.userId,

    currentContext:
      personalization.context,

    memories:
      personalization
        .relevantMemories
        .map(result => ({
          key:
            result.memory.key,

          value:
            result.memory.value,

          confidence:
            result.memory
              .confidence,

          relevance:
            result.score
        })),

    predictions,

    decisions,

    constraints
  };
}
