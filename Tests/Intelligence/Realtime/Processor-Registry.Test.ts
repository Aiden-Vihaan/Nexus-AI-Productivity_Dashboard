import { ProcessorRegistry } from "../../../src/intelligence/realtime/processors/processor-registry";
import { TaskEventProcessor } from "../../../src/intelligence/realtime/processors/task-event-processor";
import { ContextEventProcessor } from "../../../src/intelligence/realtime/processors/context-event-processor";
import { createNexusEvent } from "../../../src/intelligence/realtime/event-factory/event-factory";
import { NexusEventType } from "../../../src/intelligence/realtime/realtime-types/event-types";

describe("ProcessorRegistry", () => {
  it("should register processors", () => {
    const registry =
      new ProcessorRegistry();

    registry.register(
      new TaskEventProcessor()
    );

    registry.register(
      new ContextEventProcessor()
    );

    expect(
      registry.size()
    ).toBe(2);
  });

  it("should prevent duplicate registration", () => {
    const registry =
      new ProcessorRegistry();

    registry.register(
      new TaskEventProcessor()
    );

    registry.register(
      new TaskEventProcessor()
    );

    expect(
      registry.size()
    ).toBe(1);
  });

  it("should find processors that support an event", () => {
    const registry =
      new ProcessorRegistry();

    registry.register(
      new TaskEventProcessor()
    );

    registry.register(
      new ContextEventProcessor()
    );

    const event = createNexusEvent({
      eventType:
        NexusEventType.TASK_COMPLETED,
      source: "test",
      entityId: "task-001",
      payload: {
        taskId: "task-001"
      }
    });

    const processors =
      registry.findProcessors(event);

    expect(
      processors
    ).toHaveLength(1);

    expect(
      processors[0].name
    ).toBe("task-event-processor");
  });
});
