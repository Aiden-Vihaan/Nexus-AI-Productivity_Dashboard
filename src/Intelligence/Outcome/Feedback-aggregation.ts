import {
  FeedbackSummary,
  Outcome
} from "./outcome-types";

export function aggregateFeedback(
  userId: string,

  interventionType: string,

  outcomes: Outcome[]
): FeedbackSummary {
  if (
    outcomes.length === 0
  ) {
    return {
      userId,

      interventionType,

      sampleSize:
        0,

      positiveOutcomes:
        0,

      negativeOutcomes:
        0,

      neutralOutcomes:
        0,

      averageScore:
        0,

      averageConfidence:
        0,

      effectiveness:
        0,

      updatedAt:
        new Date().toISOString()
    };
  }

  const positiveOutcomes =
    outcomes.filter(
      outcome =>
        outcome.effect ===
        "positive"
    ).length;

  const negativeOutcomes =
    outcomes.filter(
      outcome =>
        outcome.effect ===
        "negative"
    ).length;

  const neutralOutcomes =
    outcomes.filter(
      outcome =>
        outcome.effect ===
        "neutral"
    ).length;

  const averageScore =
    outcomes.reduce(
      (
        accumulator,
        outcome
      ) =>
        accumulator +
        outcome.score,
      0
    ) /
    outcomes.length;

  const averageConfidence =
    outcomes.reduce(
      (
        accumulator,
        outcome
      ) =>
        accumulator +
        outcome.confidence,
      0
    ) /
    outcomes.length;

  const effectiveness =
    (
      positiveOutcomes -
      negativeOutcomes
    ) /
    outcomes.length;

  return {
    userId,

    interventionType,

    sampleSize:
      outcomes.length,

    positiveOutcomes,

    negativeOutcomes,

    neutralOutcomes,

    averageScore,

    averageConfidence,

    effectiveness,

    updatedAt:
      new Date().toISOString()
  };
}
