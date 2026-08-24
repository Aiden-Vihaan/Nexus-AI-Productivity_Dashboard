import {
  ContextConfidence,
  UserContextState
} from "./context-types";

export function calculateContextConfidence(
  context: UserContextState
): ContextConfidence {
  const factors: string[] = [];

  let score = 0;

  if (
    context.sessionState === "active"
  ) {
    score += 0.25;
    factors.push("active_session");
  }

  if (context.activeTask) {
    score += 0.30;
    factors.push("active_task");
  }

  if (
    context.recentActivity.length > 0
  ) {
    score += 0.20;
    factors.push("recent_activity");
  }

  if (
    context.focusState !== "idle"
  ) {
    score += 0.15;
    factors.push("known_focus_state");
  }

  if (
    context.workloadState !== "unknown"
  ) {
    score += 0.10;
    factors.push("known_workload_state");
  }

  return {
    score: Math.min(
      1,
      Number(score.toFixed(2))
    ),

    factors,

    calculatedAt:
      new Date().toISOString()
  };
}
