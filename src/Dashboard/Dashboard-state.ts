import {
  DashboardState
} from "./dashboard-types";

export function createEmptyDashboardState(
  userId: string
): DashboardState {
  return {
    userId,

    generatedAt:
      new Date().toISOString(),

    productivityScore: 0,

    focusScore: 0,

    energyScore: 0,

    cognitiveLoad: 0,

    tasks: [],

    predictions: [],

    interventions: [],

    memories: [],

    insights: []
  };
}

export function normalizeScore(
  value: number
): number {
  return Math.max(
    0,
    Math.min(
      100,
      Math.round(value)
    )
  );
}
