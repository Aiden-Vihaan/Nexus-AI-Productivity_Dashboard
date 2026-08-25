import {
  AIConfidenceLevel
} from "./ai-types";

export function calculateAIConfidence(
  evidenceCount: number,
  contextCompleteness: number,
  responseQuality: number
): number {
  const evidenceScore =
    Math.min(
      1,
      evidenceCount / 10
    );

  return Math.max(
    0,
    Math.min(
      1,
      evidenceScore * 0.35 +
        contextCompleteness *
          0.35 +
        responseQuality *
          0.30
    )
  );
}

export function getConfidenceLevel(
  confidence: number
): AIConfidenceLevel {
  if (confidence < 0.2) {
    return "very_low";
  }

  if (confidence < 0.4) {
    return "low";
  }

  if (confidence < 0.7) {
    return "medium";
  }

  if (confidence < 0.9) {
    return "high";
  }

  return "very_high";
}
