import {
  AIRequest,
  AIProviderResponse
} from "./ai-types";

export interface AIProviderClient {
  readonly name: string;

  generate(
    request: AIRequest
  ): Promise<AIProviderResponse>;
}

export class MockAIProvider
  implements AIProviderClient {
  readonly name = "mock";

  async generate(
    request: AIRequest
  ): Promise<AIProviderResponse> {
    return {
      model:
        "nexus-mock-model",

      content:
        "NEXUS generated a structured intelligence response based on the supplied context.",

      usage: {
        inputTokens: 0,

        outputTokens: 0,

        totalTokens: 0
      },

      finishReason:
        "stop"
    };
  }
}
