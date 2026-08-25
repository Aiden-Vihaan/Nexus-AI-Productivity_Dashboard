import {
  buildAIContext
} from "../../../src/intelligence/ai/ai-context-builder";

describe(
  "AI Context Builder",
  () => {
    it(
      "should construct AI context from personalization data",
      () => {
        const context =
          buildAIContext(
            {
              userId:
                "user-001",

              context: {
                activity:
                  "deep_work"
              },

              relevantMemories: [
                {
                  memory: {
                    id:
                      "memory-001",

                    userId:
                      "user-001",

                    category:
                      "preference",

                    key:
                      "focus_mode",

                    value:
                      "silent",

                    source:
                      "explicit",

                    confidence:
                      0.9,

                    importance:
                      0.8,

                    relevance:
                      0.8,

                    status:
                      "active",

                    observationCount:
                      5,

                    createdAt:
                      new Date().toISOString(),

                    updatedAt:
                      new Date().toISOString(),

                    lastObservedAt:
                      new Date().toISOString()
                  },

                  score:
                    0.9,

                  reason:
                    "Highly relevant"
                }
              ],

              generatedAt:
                new Date().toISOString()
            }
          );

        expect(
          context.userId
        ).toBe(
          "user-001"
        );

        expect(
          context.memories.length
        ).toBe(1);
      }
    );
  }
);
