import { TaskEventProcessor } from "../../../src/intelligence/realtime/processors/task-event-processor";
import { createNexusEvent } from "../../../src/intelligence/realtime/event-factory/event-factory";
import { NexusEventType } from "../../../src/intelligence/realtime/realtime-types/event-types";

describe("TaskEventProcessor", () => {
  const processor =
    new TaskEventProcessor();

  it("should support task events", () => {
    const event = createNexusEvent({
      eventType:
        NexusEventType.TASK_COMPLETED,
      source: "test",
      entityId: "task-001",
      payload: {
        taskId: "task-001"
      }
    });

    expect(
      processor.supports(event)
    ).toBe(true);
  });

  it("should reject unrelated events", () => {
    const event = createNexusEvent({
      eventType:
        NexusEventType.SESSION_STARTED,
      source: "test",
      entityId: "session-001",
      payload: {}
    });

    expect(
      processor.supports(event)
    ).toBe(false);
  });

  it("should request a prediction after task completion", async () => {
    const event = createNexusEvent({
      eventType:
        NexusEventType.TASK_COMPLETED,
      source: "test",
      entityId: "task-001",
      payload: {
        taskId: "task-001"
      }
    });

    const result =
      await processor.process(event);

    expect(
      result.processed
    ).toBe(true);

    expect(
      result.emittedEvents
    ).toHaveLength(1);

    expect(
      result.emittedEvents[0].eventType
    ).toBe(
      NexusEventType.PREDICTION_REQUESTED
    );
  });

  it("should update context when a task starts", async () => {
    const event = createNexusEvent({
      eventType:
        NexusEventType.TASK_STARTED,
      source: "test",
      entityId: "task-001",
      payload: {
        taskId: "task-001",
        title: "Build intelligence engine"
      }
    });

    const result =
      await processor.process(event);

    expect(
      result.emittedEvents
    ).toHaveLength(1);

    expect(
      result.emittedEvents[0].eventType
    ).toBe(
      NexusEventType.CONTEXT_UPDATED
    );
  });
});
