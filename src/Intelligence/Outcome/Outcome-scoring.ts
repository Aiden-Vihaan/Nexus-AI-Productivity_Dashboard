import {
  OutcomeEffect,
  OutcomeSignal
} from "./outcome-types";

import {
  calculateAggregateSignalImpact
} from "./outcome-signals";

export function calculateOutcomeScore(
  signals: OutcomeSignal[]
): number {
  if (
    signals.length === 0
  ) {
    return 0;
  }

  const impact =
    calculateAggregateSignalImpact(
      signals
    );

  return Math.max(
    -1,
    Math.min(
      1,
      impact
    )
  );
}

export function classifyOutcomeEffect(
  score: number
): OutcomeEffect {
  if (
    score >= 0.25
  ) {
    return "positive";
  }

  if (
    score <= -0.25
  ) {
    return "negative";
  }

  if (
    Math.abs(score) <
    0.25
  ) {
    return "neutral";
  }

  return "unknown";
}

export function calculateOutcomeConfidence(
  signals: OutcomeSignal[]
): number {
  if (
    signals.length === 0
  ) {
    return 0;
  }

  const total =
    signals.reduce(
      (
        accumulator,
        signal
      ) =>
        accumulator +
        signal.confidence,
      0
    );

  return Math.max(
    0,
    Math.min(
      1,
      total /
        signals.length
    )
  );
}
