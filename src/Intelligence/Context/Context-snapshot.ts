import {
  UserContextState
} from "./context-types";

export interface ContextSnapshot {
  userId: string;

  focus: string;

  workload: string;

  session: string;

  activeTask:
    | {
        taskId: string;
        title?: string;
      }
    | undefined;

  confidence: number;

  recentActivityCount: number;

  capturedAt: string;

  version: number;
}

export function createContextSnapshot(
  context: UserContextState
): ContextSnapshot {
  return {
    userId:
      context.userId,

    focus:
      context.focusState,

    workload:
      context.workloadState,

    session:
      context.sessionState,

    activeTask:
      context.activeTask
        ? {
            taskId:
              context.activeTask.taskId,

            title:
              context.activeTask.title
          }
        : undefined,

    confidence:
      context.confidence.score,

    recentActivityCount:
      context.recentActivity.length,

    capturedAt:
      new Date().toISOString(),

    version:
      context.version
  };
}
