import {
  NexusEvent
} from "../realtime/realtime-types/event";

import {
  NexusEventType
} from "../realtime/realtime-types/event-types";

import {
  UserContextState,
  ActiveTaskContext,
  RecentActivity
} from "./context-types";

import {
  calculateContextConfidence
} from "./context-confidence";

import {
  updateContextVersion
} from "./context-state";

interface TaskPayload {
  taskId?: string;
  title?: string;
  priority?: string;
  estimatedMinutes?: number;
}

export function applyEventToContext(
  context: UserContextState,
  event: NexusEvent
): UserContextState {
  const nextContext = {
    ...context,

    recentActivity: [
      {
        eventType: event.eventType,
        timestamp: event.timestamp,
        entityId: event.entityId
      },
      ...context.recentActivity
    ].slice(0, 20)
  };

  switch (
    event.eventType as NexusEventType
  ) {
    case NexusEventType.SESSION_STARTED:
      nextContext.sessionState =
        "active";

      break;

    case NexusEventType.SESSION_ENDED:
      nextContext.sessionState =
        "ended";

      nextContext.activeTask =
        undefined;

      nextContext.focusState =
        "idle";

      break;

    case NexusEventType.FOCUS_CHANGED:
      nextContext.focusState =
        extractFocusState(event);

      break;

    case NexusEventType.TASK_STARTED:
      nextContext.sessionState =
        "active";

      nextContext.focusState =
        "focused";

      nextContext.activeTask =
        createActiveTask(event);

      break;

    case NexusEventType.TASK_COMPLETED:
      nextContext.focusState =
        "completed";

      if (
        nextContext.activeTask?.taskId ===
        event.entityId
      ) {
        nextContext.activeTask =
          undefined;
      }

      break;

    case NexusEventType.TASK_DEFERRED:
      nextContext.focusState =
        "paused";

      if (
        nextContext.activeTask?.taskId ===
        event.entityId
      ) {
        nextContext.activeTask =
          undefined;
      }

      break;

    case NexusEventType.CONTEXT_UPDATED:
      applyContextPayload(
        nextContext,
        event
      );

      break;

    default:
      break;
  }

  const versionedContext =
    updateContextVersion(
      nextContext
    );

  versionedContext.confidence =
    calculateContextConfidence(
      versionedContext
    );

  return versionedContext;
}

function createActiveTask(
  event: NexusEvent
): ActiveTaskContext {
  const payload =
    event.payload as TaskPayload;

  return {
    taskId:
      payload.taskId ??
      event.entityId ??
      "unknown",

    title:
      payload.title,

    startedAt:
      event.timestamp,

    estimatedMinutes:
      payload.estimatedMinutes,

    priority:
      payload.priority
  };
}

function extractFocusState(
  event: NexusEvent
) {
  const payload =
    event.payload as {
      focusState?: string;
    };

  const validStates = [
    "idle",
    "starting",
    "focused",
    "distracted",
    "paused",
    "completed"
  ];

  if (
    payload.focusState &&
    validStates.includes(
      payload.focusState
    )
  ) {
    return payload.focusState as
      | "idle"
      | "starting"
      | "focused"
      | "distracted"
      | "paused"
      | "completed";
  }

  return "idle" as const;
}

function applyContextPayload(
  context: UserContextState,
  event: NexusEvent
): void {
  const payload =
    event.payload as {
      focusState?: string;
      workloadState?: string;
      sessionState?: string;
    };

  const focusStates = [
    "idle",
    "starting",
    "focused",
    "distracted",
    "paused",
    "completed"
  ];

  const workloadStates = [
    "light",
    "balanced",
    "heavy",
    "overloaded",
    "unknown"
  ];

  const sessionStates = [
    "inactive",
    "active",
    "paused",
    "ended"
  ];

  if (
    payload.focusState &&
    focusStates.includes(
      payload.focusState
    )
  ) {
    context.focusState =
      payload.focusState as any;
  }

  if (
    payload.workloadState &&
    workloadStates.includes(
      payload.workloadState
    )
  ) {
    context.workloadState =
      payload.workloadState as any;
  }

  if (
    payload.sessionState &&
    sessionStates.includes(
      payload.sessionState
    )
  ) {
    context.sessionState =
      payload.sessionState as any;
  }
}
