import {
  AIProvider
} from "./ai-types";

export interface AIModelConfiguration {
  provider: AIProvider;

  model: string;

  temperature: number;

  maxTokens: number;

  timeoutMs: number;
}

export const DEFAULT_AI_MODEL:
  AIModelConfiguration = {
    provider: "mock",

    model:
      "nexus-mock-model",

    temperature: 0.2,

    maxTokens: 1000,

    timeoutMs: 10000
  };

export function createModelConfiguration(
  overrides:
    Partial<AIModelConfiguration> = {}
): AIModelConfiguration {
  return {
    ...DEFAULT_AI_MODEL,

    ...overrides
  };
}
