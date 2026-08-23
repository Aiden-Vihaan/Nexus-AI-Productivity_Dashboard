import { validateNexusEvent } from "../../../src/intelligence/realtime/event-validation/event-validator";

describe("NEXUS Event Validator", () => {
  const validEvent = {
    eventId: "event-001",
    eventType: "TASK_CREATED",
    eventVersion: 1,
    timestamp: new Date().toISOString(),
    source: "task-service",
    traceId: "trace-001",
    entityId: "task-001",
    payload: {},
    metadata: {}
  };

  it("should accept a valid event", () => {
    expect(() =>
      validateNexusEvent(validEvent)
    ).not.toThrow();
  });

  it("should reject an event without an event ID", () => {
    expect(() =>
      validateNexusEvent({
        ...validEvent,
        eventId: ""
      })
    ).toThrow();
  });

  it("should reject an event without a type", () => {
    expect(() =>
      validateNexusEvent({
        ...validEvent,
        eventType: ""
      })
    ).toThrow();
  });

  it("should reject an event without a trace ID", () => {
    expect(() =>
      validateNexusEvent({
        ...validEvent,
        traceId: ""
      })
    ).toThrow();
  });
});
