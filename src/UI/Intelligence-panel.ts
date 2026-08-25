import {
  DashboardState
} from "../dashboard/dashboard-types";

import {
  createPredictionView
} from "../intelligence/prediction-view";

import {
  createInterventionView
} from "../intelligence/intervention-view";

import {
  createInsightCard
} from "../intelligence/insight-card";

export interface IntelligencePanelModel {
  predictions: ReturnType<
    typeof createPredictionView
  >[];

  interventions: ReturnType<
    typeof createInterventionView
  >[];

  insights: ReturnType<
    typeof createInsightCard
  >[];
}

export function createIntelligencePanelModel(
  state: DashboardState
): IntelligencePanelModel {
  return {
    predictions:
      state.predictions.map(
        createPredictionView
      ),

    interventions:
      state.interventions.map(
        createInterventionView
      ),

    insights:
      state.insights.map(
        createInsightCard
      )
  };
}
