import {
  DashboardState
} from "../dashboard/dashboard-types";

import {
  createIntelligenceSummary
} from "../intelligence/intelligence-summary";

export interface CommandCenterModel {
  greeting: string;

  productivityScore: number;

  focusScore: number;

  energyScore: number;

  cognitiveLoad: number;

  summary: ReturnType<
    typeof createIntelligenceSummary
  >;

  primaryInsight?: string;

  primaryAction?: string;
}

export function createCommandCenterModel(
  state: DashboardState
): CommandCenterModel {
  const summary =
    createIntelligenceSummary(
      state
    );

  const primaryInsight =
    state.insights[0]?.title;

  const primaryAction =
    state.interventions[0]?.title;

  return {
    greeting:
      "Good morning. NEXUS is online.",

    productivityScore:
      state.productivityScore,

    focusScore:
      state.focusScore,

    energyScore:
      state.energyScore,

    cognitiveLoad:
      state.cognitiveLoad,

    summary,

    primaryInsight,

    primaryAction
  };
}
