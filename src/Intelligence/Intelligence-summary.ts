import {
  DashboardState
} from "../dashboard/dashboard-types";

export interface IntelligenceSummary {
  activeTasks: number;

  completedTasks: number;

  predictedRisks: number;

  activeInterventions: number;

  memoryCount: number;

  insightCount: number;

  dominantSignal:
    | "focus"
    | "energy"
    | "cognitive-load"
    | "productivity";
}

export function createIntelligenceSummary(
  state: DashboardState
): IntelligenceSummary {
  const activeTasks =
    state.tasks.filter(
      task =>
        task.status !==
        "completed"
    ).length;

  const completedTasks =
    state.tasks.filter(
      task =>
        task.status ===
        "completed"
    ).length;

  const predictedRisks =
    state.predictions.filter(
      prediction =>
        prediction.probability >=
        0.6
    ).length;

  const scores = {
    focus:
      state.focusScore,

    energy:
      state.energyScore,

    cognitiveLoad:
      100 -
      state.cognitiveLoad,

    productivity:
      state.productivityScore
  };

  const dominantSignal =
    Object.entries(
      scores
    ).sort(
      ([, a], [, b]) =>
        b - a
    )[0][0];

  return {
    activeTasks,

    completedTasks,

    predictedRisks,

    activeInterventions:
      state.interventions.length,

    memoryCount:
      state.memories.length,

    insightCount:
      state.insights.length,

    dominantSignal:
      dominantSignal as IntelligenceSummary[
        "dominantSignal"
      ]
  };
}
