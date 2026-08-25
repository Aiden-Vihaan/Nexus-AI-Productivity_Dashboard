import {
  DashboardPrediction
} from "../dashboard/dashboard-types";

export interface PredictionView {
  id: string;

  title: string;

  probabilityPercent: number;

  confidencePercent: number;

  riskLevel:
    | "low"
    | "medium"
    | "high";

  explanation: string;

  recommendedAction?: string;
}

function getRiskLevel(
  probability: number
): PredictionView["riskLevel"] {
  if (probability >= 0.75) {
    return "high";
  }

  if (probability >= 0.5) {
    return "medium";
  }

  return "low";
}

export function createPredictionView(
  prediction: DashboardPrediction
): PredictionView {
  return {
    id:
      prediction.id,

    title:
      prediction.title,

    probabilityPercent:
      Math.round(
        prediction.probability * 100
      ),

    confidencePercent:
      Math.round(
        prediction.confidence * 100
      ),

    riskLevel:
      getRiskLevel(
        prediction.probability
      ),

    explanation:
      prediction.explanation,

    recommendedAction:
      prediction.recommendedAction
  };
}
