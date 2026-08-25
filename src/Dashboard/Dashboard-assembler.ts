import {
  DashboardState
} from "./dashboard-types";

import {
  normalizeScore
} from "./dashboard-state";

export interface DashboardSignals {
  productivityScore?: number;

  focusScore?: number;

  energyScore?: number;

  cognitiveLoad?: number;

  tasks?: DashboardState["tasks"];

  predictions?: DashboardState["predictions"];

  interventions?: DashboardState["interventions"];

  memories?: DashboardState["memories"];

  insights?: DashboardState["insights"];
}

export function assembleDashboard(
  userId: string,
  signals: DashboardSignals
): DashboardState {
  return {
    userId,

    generatedAt:
      new Date().toISOString(),

    productivityScore:
      normalizeScore(
        signals.productivityScore ?? 0
      ),

    focusScore:
      normalizeScore(
        signals.focusScore ?? 0
      ),

    energyScore:
      normalizeScore(
        signals.energyScore ?? 0
      ),

    cognitiveLoad:
      normalizeScore(
        signals.cognitiveLoad ?? 0
      ),

    tasks:
      signals.tasks ?? [],

    predictions:
      signals.predictions ?? [],

    interventions:
      signals.interventions ?? [],

    memories:
      signals.memories ?? [],

    insights:
      signals.insights ?? []
  };
}
