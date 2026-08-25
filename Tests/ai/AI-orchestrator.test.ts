import {
  AIOrchestrator
} from "../../../src/intelligence/ai/ai-orchestrator";

import {
  MockAIProvider
} from "../../../src/intelligence/ai/ai-provider";

describe(
  "AIOrchestrator",
  () => {
    it(
      "should execute an AI request",
      async () => {
        const orchestrator =
          new AIOrchestrator(
            new MockAIProvider()
          );

        const response =
          await orchestrator.execute({
            id:
              "request-001",

            userId:
              "user-001",

            type:
              "recommendation",

            messages: [
              {
                role:
                  "user",

                content:
                  "Help prioritize my work."
              }
            ],

            context: {
              priority:
                "high"
            }
          });

        expect(
          response.content
        ).toBeTruthy();

        expect(
          response.confidence
        ).toBeGreaterThanOrEqual(
          0
        );

        expect(
          response.confidence
        ).toBeLessThanOrEqual(
          1
        );
      }
    );

    it(
      "should use cache for repeated requests",
      async () => {
        const orchestrator =
          new AIOrchestrator(
            new MockAIProvider()
          );

        const request = {
          id:
            "request-002",

          userId:
            "user-001",

          type:
            "recommendation" as const,

          messages: [
            {
              role:
                "user" as const,

              content:
                "Prioritize my tasks."
            }
          ]
        };

        const first =
          await orchestrator.execute(
            request
          );

        const second =
          await orchestrator.execute(
            request
          );

        expect(
          first.cached
        ).toBe(false);

        expect(
          second.cached
        ).toBe(true);
      }
    );
  }
);
