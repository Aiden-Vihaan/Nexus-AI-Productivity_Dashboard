import { createNexusEvent } from "../../../src/intelligence/realtime/event-factory/event-factory";

describe("NEXUS Event Factory", () => {
  it("should create a valid NEXUS event", () => {
    const event = createNexusEvent({
      eventType: "TASK_COMPLETED",
      source: "task-service",
      entityId: "task-001",
      payload: {
        taskId: "task-001"
      }
    });

    expect(event.eventId).toBeDefined();
    expect(event.eventType).toBe("TASK_COMPLETED");
    expect(event.eventVersion).toBe(1);
    expect(event.timestamp).toBeDefined();
    expect(event.source).toBe("task-service");
    expect(event.entityId).toBe("task-001");
    expect(event.traceId).toBeDefined();
  });

  it("should generate unique event IDs", () => {
    const first = createNexusEvent({
      eventType: "TASK_CREATED",
      source: "task-service",
      entityId: "task-001",
      payload: {}
    });

    const second = createNexusEvent({
      eventType: "TASK_CREATED",
      source: "task-service",
      entityId: "task-002",
      payload: {}
    });

    expect(first.eventId).not.toBe(
      second.eventId
    );
  });

  it("should preserve a supplied trace ID", () => {
    const event = createNexusEvent({
      eventType: "TASK_UPDATED",
      source: "task-service",
      entityId: "task-001",
      traceId: "trace-123",
      payload: {}
    });

    expect(event.traceId).toBe("trace-123");
  });
});
