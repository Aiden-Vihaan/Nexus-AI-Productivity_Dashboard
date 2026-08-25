import {
  buildAIMessages
} from "../../../src/intelligence/ai/ai-prompt-builder";

describe(
  "AI Prompt Builder",
  () => {
    it(
      "should create system and user messages",
      () => {
        const messages =
          buildAIMessages(
            "recommendation",
            {
              userId:
                "user-001",

              currentContext: {
                energy:
                  "high"
              },

              memories: [],

              predictions: [],

              decisions: [],

              constraints: []
            }
          );

        expect(
          messages.length
        ).toBe(2);

        expect(
          messages[0].role
        ).toBe(
          "system"
        );

        expect(
          messages[1].role
        ).toBe(
          "user"
        );
      }
    );
  }
);
