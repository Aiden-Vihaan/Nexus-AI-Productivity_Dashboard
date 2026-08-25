import {
  parseAIResponse,
  parseJSONResponse
} from "../../../src/intelligence/ai/ai-response-parser";

describe(
  "AI Response Parser",
  () => {
    it(
      "should parse text response",
      () => {
        const result =
          parseAIResponse(
            "Focus on the highest priority task."
          );

        expect(
          result.summary
        ).toBe(
          "Focus on the highest priority task."
        );
      }
    );

    it(
      "should parse valid JSON",
      () => {
        const result =
          parseJSONResponse(
            '{"priority":"high"}'
          );

        expect(
          result.priority
        ).toBe(
          "high"
        );
      }
    );

    it(
      "should safely reject invalid JSON",
      () => {
        const result =
          parseJSONResponse(
            "invalid"
          );

        expect(
          result
        ).toEqual({});
      }
    );
  }
);
