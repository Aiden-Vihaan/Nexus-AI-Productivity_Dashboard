import {
  DashboardInsight
} from "../dashboard/dashboard-types";

export interface InsightCard {
  id: string;

  headline: string;

  body: string;

  category: DashboardInsight["type"];

  confidenceLabel:
    | "low"
    | "moderate"
    | "high";

  confidence: number;

  action?: string;
}

function getConfidenceLabel(
  confidence: number
): InsightCard["confidenceLabel"] {
  if (confidence >= 0.8) {
    return "high";
  }

  if (confidence >= 0.55) {
    return "moderate";
  }

  return "low";
}

export function createInsightCard(
  insight: DashboardInsight
): InsightCard {
  return {
    id: insight.id,

    headline:
      insight.title,

    body:
      insight.description,

    category:
      insight.type,

    confidenceLabel:
      getConfidenceLabel(
        insight.confidence
      ),

    confidence:
      insight.confidence
  };
}
