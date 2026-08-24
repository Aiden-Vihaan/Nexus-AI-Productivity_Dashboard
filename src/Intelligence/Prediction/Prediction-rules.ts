import {
  Prediction,
  UserContextSnapshot
} from "./prediction-types";

import {
  createEvidence
} from "./prediction-explanations";

import {
  calculatePredictionConfidence
} from "./prediction-confidence";

function createPredictionId(): string {
  return `prediction_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

function createExpiry(
  horizonMinutes: number
): string {
  return new Date(
    Date.now() +
      horizonMinutes * 60 * 1000
  ).toISOString();
}

export function predictTaskCompletion(
  context: UserContextSnapshot
): Prediction | undefined {
  if (
    !context.activeTask ||
    context.focus !== "focused"
  ) {
    return undefined;
  }

  const evidence = [
    createEvidence(
      "active_task",
      0.35,
      "A task is currently active."
    ),

    createEvidence(
      "focused_state",
      0.35,
      "The current focus state is focused."
    ),

    createEvidence(
      "active_session",
      context.session === "active"
        ? 0.2
        : 0,
      "An active productivity session is in progress."
    )
  ].filter(
    item => item.weight > 0
  );

  const confidence =
    calculatePredictionConfidence(
      evidence,
      context.confidence
    );

  return {
    id: createPredictionId(),

    userId:
      context.userId,

    type:
      "task_completion",

    title:
      "Task completion is likely",

    description:
      `The current task "${context.activeTask.title ?? context.activeTask.taskId}" appears likely to progress toward completion if the current focus state continues.`,

    probability:
      Math.min(
        0.95,
        0.45 +
          evidence.reduce(
            (sum, item) =>
              sum + item.weight,
            0
          )
      ),

    confidence,

    priority:
      "medium",

    horizonMinutes:
      60,

    evidence,

    createdAt:
      new Date().toISOString(),

    expiresAt:
      createExpiry(60)
  };
}

export function predictFocusLoss(
  context: UserContextSnapshot
): Prediction | undefined {
  if (
    context.focus !== "focused"
  ) {
    return undefined;
  }

  const evidence = [];

  if (
    context.recentActivityCount > 8
  ) {
    evidence.push(
      createEvidence(
        "high_activity_frequency",
        0.3,
        "A high number of recent activities may indicate context switching."
      )
    );
  }

  if (
    context.workload === "heavy" ||
    context.workload === "overloaded"
  ) {
    evidence.push(
      createEvidence(
        "high_workload",
        0.35,
        "Current workload is elevated."
      )
    );
  }

  if (
    evidence.length === 0
  ) {
    return undefined;
  }

  const confidence =
    calculatePredictionConfidence(
      evidence,
      context.confidence
    );

  return {
    id: createPredictionId(),

    userId:
      context.userId,

    type:
      "focus_loss",

    title:
      "Focus loss may occur",

    description:
      "Current contextual signals indicate an increased possibility of losing focus.",

    probability:
      Math.min(
        0.9,
        0.35 +
          evidence.reduce(
            (sum, item) =>
              sum + item.weight,
            0
          )
      ),

    confidence,

    priority:
      context.workload ===
        "overloaded"
        ? "high"
        : "medium",

    horizonMinutes:
      30,

    evidence,

    createdAt:
      new Date().toISOString(),

    expiresAt:
      createExpiry(30)
  };
}

export function predictBreakNeeded(
  context: UserContextSnapshot
): Prediction | undefined {
  if (
    context.focus !== "focused"
  ) {
    return undefined;
  }

  if (
    context.recentActivityCount <
    10
  ) {
    return undefined;
  }

  const evidence = [
    createEvidence(
      "extended_activity",
      0.45,
      "The user has accumulated substantial recent activity."
    )
  ];

  if (
    context.workload ===
      "heavy" ||
    context.workload ===
      "overloaded"
  ) {
    evidence.push(
      createEvidence(
        "high_workload",
        0.3,
        "Workload is currently elevated."
      )
    );
  }

  const confidence =
    calculatePredictionConfidence(
      evidence,
      context.confidence
    );

  return {
    id: createPredictionId(),

    userId:
      context.userId,

    type:
      "break_needed",

    title:
      "A short break may be beneficial",

    description:
      "Current activity patterns suggest that a short recovery period may help maintain sustainable focus.",

    probability:
      Math.min(
        0.9,
        0.4 +
          evidence.reduce(
            (sum, item) =>
              sum + item.weight,
            0
          )
      ),

    confidence,

    priority:
      "medium",

    horizonMinutes:
      15,

    evidence,

    createdAt:
      new Date().toISOString(),

    expiresAt:
      createExpiry(15)
  };
}
