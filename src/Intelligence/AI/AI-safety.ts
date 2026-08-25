export interface AISafetyResult {
  allowed: boolean;

  reasons: string[];

  sanitizedContent: string;
}

const MAX_INPUT_LENGTH =
  20000;

const MAX_OUTPUT_LENGTH =
  10000;

export function validateAIInput(
  input: string
): AISafetyResult {
  const reasons: string[] = [];

  if (!input.trim()) {
    reasons.push(
      "Input cannot be empty."
    );
  }

  if (
    input.length >
    MAX_INPUT_LENGTH
  ) {
    reasons.push(
      "Input exceeds maximum allowed length."
    );
  }

  return {
    allowed:
      reasons.length === 0,

    reasons,

    sanitizedContent:
      input.trim()
  };
}

export function validateAIOutput(
  output: string
): AISafetyResult {
  const reasons: string[] = [];

  if (!output.trim()) {
    reasons.push(
      "AI output cannot be empty."
    );
  }

  if (
    output.length >
    MAX_OUTPUT_LENGTH
  ) {
    reasons.push(
      "AI output exceeds maximum allowed length."
    );
  }

  return {
    allowed:
      reasons.length === 0,

    reasons,

    sanitizedContent:
      output.trim()
  };
}
