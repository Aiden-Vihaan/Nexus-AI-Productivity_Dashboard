import {
  validateAIInput,
  validateAIOutput
} from "../../../src/intelligence/ai/ai-safety";

describe(
  "AI Safety",
  () => {
    it(
      "should reject empty input",
      () => {
        const result =
          validateAIInput("");

        expect(
          result.allowed
        ).toBe(false);
      }
    );

    it(
      "should accept valid input",
      () => {
        const result =
          validateAIInput(
            "Analyze my productivity context."
          );

        expect(
          result.allowed
        ).toBe(true);
      }
    );

    it(
      "should reject empty output",
      () => {
        const result =
          validateAIOutput("");

        expect(
          result.allowed
        ).toBe(false);
      }
    );
  }
);
