import { ContextEventProcessor } from "../../../src/intelligence/realtime/processors/context-event-processor";
import { createNexusEvent } from "../../../src/intelligence/realtime/event-factory/event-factory";
import { NexusEventType } from "../../../src/intelligence/realtime/realtime-types/event-types";

describe("ContextEventProcessor", () => {
  const processor =
    new ContextEventProcessor();

  it("should support context events", () => {
    const event = createNexusEvent({
      eventType:
        NexusEventType.CONTEXT_UPDATED,
      source: "test",
      entityId: "user-001",
      payload: {
        focus: "deep-work"
      }
    });

    expect(
      processor.supports(event)
    ).toBe(true);
  });

  it("should process context events", async () => {
    const event = createNexusEvent({
      eventType:
        NexusEventType.FOCUS_CHANGED,
      source: "test",
      entityId: "user-001",
      payload: {
        focus: "coding"
      }
    });

    const result =
      await processor.process(event);

    expect(
      result.processed
    ).toBe(true);

    expect(
      result.metadata?.entityId
    ).toBe("user-001");
  });
});
