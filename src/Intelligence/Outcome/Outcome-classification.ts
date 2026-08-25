import {
  OutcomeType
} from "./outcome-types";

export interface OutcomeClassification {
  type: OutcomeType;

  effect:
    | "positive"
    | "negative"
    | "neutral"
    | "unknown";

  confidence: number;
}

export function classifyUserResponse(
  response: string
): OutcomeClassification {
  const normalized =
    response
      .trim()
      .toLowerCase();

  switch (
    normalized
  ) {
    case "accept":
    case "accepted":
    case "complete":
    case "completed":
      return {
        type:
          "accepted",

        effect:
          "positive",

        confidence:
          0.95
      };

    case "dismiss":
    case "dismissed":
      return {
        type:
          "dismissed",

        effect:
          "negative",

        confidence:
          0.9
      };

    case "ignore":
    case "ignored":
      return {
        type:
          "ignored",

        effect:
          "neutral",

        confidence:
          0.8
      };

    case "defer":
    case "deferred":
      return {
        type:
          "deferred",

        effect:
          "neutral",

        confidence:
          0.85
      };

    default:
      return {
        type:
          "neutral",

        effect:
          "unknown",

        confidence:
          0.3
      };
  }
}
