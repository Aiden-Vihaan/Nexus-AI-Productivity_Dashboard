import {
  PredictionEvidence
} from "./prediction-types";

export function calculatePredictionConfidence(
  evidence: PredictionEvidence[],
  contextConfidence: number
): number {
  if (evidence.length === 0) {
    return 0;
  }

  const totalEvidenceWeight =
    evidence.reduce(
      (total, item) =>
        total + item.weight,
      0
    );

  const normalizedEvidence =
    Math.min(
      1,
      totalEvidenceWeight
    );

  const confidence =
    normalizedEvidence * 0.7 +
    contextConfidence * 0.3;

  return Number(
    Math.min(
      1,
      confidence
    ).toFixed(2)
  );
}
