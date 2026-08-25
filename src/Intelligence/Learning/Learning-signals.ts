import {
  LearningSignal,
  LearningEvidence
} from "./learning-types";

export function calculateAverageConfidence(
  signals: LearningSignal[]
): number {
  if (signals.length === 0) {
    return 0;
  }

  const total = signals.reduce(
    (sum, signal) =>
      sum + signal.confidence,
    0
  );

  return total / signals.length;
}

export function calculateSignalStrength(
  signals: LearningSignal[]
): number {
  if (signals.length === 0) {
    return 0;
  }

  const total = signals.reduce(
    (sum, signal) =>
      sum +
      Math.abs(signal.value) *
        signal.confidence,
    0
  );

  return Math.min(
    1,
    total / signals.length
  );
}

export function buildLearningEvidence(
  userId: string,
  interventionType: string,
  signals: LearningSignal[],
  sampleSize: number,
  effectiveness: number,
  consistency: number
): LearningEvidence {
  return {
    id: `evidence_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 8)}`,

    userId,

    interventionType,

    signals,

    sampleSize,

    averageConfidence:
      calculateAverageConfidence(
        signals
      ),

    effectiveness,

    consistency,

    createdAt:
      new Date().toISOString()
  };
}
