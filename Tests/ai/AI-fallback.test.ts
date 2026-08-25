import {
  SafeAIFallback
} from "../../../src/intelligence/ai/ai-fallback";

describe(
  "AI Fallback",
  () => {
    it(
      "should return safe fallback response",
      () => {
        const fallback =
          new SafeAIFallback();

        const response =
          fallback.createFallback(
            "request-001",
            "Provider unavailable"
          );

        expect(
          response.requestId
        ).toBe(
          "request-001"
        );

        expect(
          response.metadata
            ?.fallback
        ).toBe(true);

        expect(
          response.confidence
        ).toBeLessThan(
          0.5
        );
      }
    );
  }
);
