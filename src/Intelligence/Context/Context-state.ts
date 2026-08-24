import {
  UserContextState,
  FocusState,
  WorkloadState,
  SessionState
} from "./context-types";

export function createInitialContext(
  userId: string
): UserContextState {
  return {
    userId,

    focusState: "idle",

    workloadState: "unknown",

    sessionState: "inactive",

    recentActivity: [],

    confidence: {
      score: 0,
      factors: [],
      calculatedAt:
        new Date().toISOString()
    },

    updatedAt:
      new Date().toISOString(),

    version: 1
  };
}

export function updateContextVersion(
  context: UserContextState
): UserContextState {
  return {
    ...context,

    version: context.version + 1,

    updatedAt:
      new Date().toISOString()
  };
}
