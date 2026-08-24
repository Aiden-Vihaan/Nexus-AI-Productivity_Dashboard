import {
  createInitialContext
} from "../../../src/intelligence/context/context-state";

import {
  applyEventToContext
} from "../../../src/intelligence/context/context-updater";

import {
  createNexusEvent
} from "../../../src/intelligence/realtime/event-factory/event-factory";

import {
  NexusEventType
} from "../../../src/intelligence/realtime/realtime-types/event-types";

describe("Context Updater", () => {
  it("should activate a session", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const event =
      createNexusEvent({
        eventType:
          NexusEventType.SESSION_STARTED,

        source:
          "test",

        entityId:
          "session-001",

        payload: {}
      });

    const result =
      applyEventToContext(
        context,
        event
      );

    expect(
      result.sessionState
    ).toBe("active");
  });

  it("should set an active task", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const event =
      createNexusEvent({
        eventType:
          NexusEventType.TASK_STARTED,

        source:
          "test",

        entityId:
          "task-001",

        payload: {
          taskId:
            "task-001",

          title:
            "Build context engine",

          priority:
            "high",

          estimatedMinutes:
            90
        }
      });

    const result =
      applyEventToContext(
        context,
        event
      );

    expect(
      result.activeTask?.taskId
    ).toBe("task-001");

    expect(
      result.activeTask?.title
    ).toBe(
      "Build context engine"
    );

    expect(
      result.focusState
    ).toBe("focused");

    expect(
      result.sessionState
    ).toBe("active");
  });

  it("should remove an active task after completion", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const started =
      createNexusEvent({
        eventType:
          NexusEventType.TASK_STARTED,

        source:
          "test",

        entityId:
          "task-001",

        payload: {
          taskId:
            "task-001"
        }
      });

    const activeContext =
      applyEventToContext(
        context,
        started
      );

    const completed =
      createNexusEvent({
        eventType:
          NexusEventType.TASK_COMPLETED,

        source:
          "test",

        entityId:
          "task-001",

        payload: {
          taskId:
            "task-001"
        }
      });

    const result =
      applyEventToContext(
        activeContext,
        completed
      );

    expect(
      result.activeTask
    ).toBeUndefined();

    expect(
      result.focusState
    ).toBe("completed");
  });

  it("should preserve recent activity", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const event =
      createNexusEvent({
        eventType:
          NexusEventType.SESSION_STARTED,

        source:
          "test",

        entityId:
          "session-001",

        payload: {}
      });

    const result =
      applyEventToContext(
        context,
        event
      );

    expect(
      result.recentActivity
    ).toHaveLength(1);

    expect(
      result.recentActivity[0].eventType
    ).toBe(
      NexusEventType.SESSION_STARTED
    );
  });

  it("should increment context version", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const event =
      createNexusEvent({
        eventType:
          NexusEventType.SESSION_STARTED,

        source:
          "test",

        entityId:
          "session-001",

        payload: {}
      });

    const result =
      applyEventToContext(
        context,
        event
      );

    expect(
      result.version
    ).toBe(2);
  });
});
