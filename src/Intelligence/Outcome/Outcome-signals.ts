import {
  OutcomeSignal
} from "./outcome-types";

export function calculateSignalDelta(
  signal: OutcomeSignal
): number {
  if (
    signal.baseline === undefined
  ) {
    return 0;
  }

  return signal.value -
    signal.baseline;
}

export function calculateNormalizedDelta(
  signal: OutcomeSignal
): number {
  if (
    signal.baseline === undefined
  ) {
    return 0;
  }

  if (
    signal.baseline === 0
  ) {
    return signal.value;
  }

  return (
    signal.value -
    signal.baseline
  ) / Math.abs(signal.baseline);
}

export function calculateSignalImpact(
  signal: OutcomeSignal
): number {
  const delta =
    calculateNormalizedDelta(
      signal
    );

  const directionalDelta =
    signal.direction ===
    "decrease"
      ? -delta
      : signal.direction ===
          "increase"
        ? delta
        : 0;

  return (
    directionalDelta *
    signal.confidence
  );
}

export function calculateAggregateSignalImpact(
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
        calculateSignalImpact(
          signal
        ),
      0
    );

  return total /
    signals.length;
}
