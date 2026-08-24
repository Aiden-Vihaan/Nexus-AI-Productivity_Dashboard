import {
  Prediction
} from "../prediction";

export interface DecisionScoreInput {
  prediction: Prediction;

  userImpact: number;

  interventionCost: number;

  urgency: number;
}

export function calculateDecisionScore(
  input: DecisionScoreInput
): number {
  const probability =
    input.prediction.probability;

  const confidence =
    input.prediction.confidence;

  const impact =
    Math.min(
      1,
      Math.max(0, input.userImpact)
    );

  const urgency =
    Math.min(
      1,
      Math.max(0, input.urgency)
    );

  const cost =
    Math.min(
      1,
      Math.max(0, input.interventionCost)
    );

  const score =
    probability * 0.30 +
    confidence * 0.25 +
    impact * 0.20 +
    urgency * 0.15 -
    cost * 0.10;

  return Number(
    Math.min(
      1,
      Math.max(0, score)
    ).toFixed(2)
  );
}
