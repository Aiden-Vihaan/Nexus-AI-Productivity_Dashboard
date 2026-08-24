import {
  PredictionEvidence
} from "./prediction-types";

export function createEvidence(
  factor: string,
  weight: number,
  description: string
): PredictionEvidence {
  return {
    factor,
    weight: Math.min(
      1,
      Math.max(0, weight)
    ),
    description
  };
}
