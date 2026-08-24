import { InMemoryEventBus } from "../../../src/intelligence/realtime/event-bus/in-memory-event-bus";
import { InMemoryIdempotencyStore } from "../../../src/intelligence/realtime/idempotency/in-memory-idempotency-store";
import { ProcessorRegistry } from "../../../src/intelligence/realtime/processors/processor-registry";
import { TaskEventProcessor } from "../../../src/intelligence/realtime/processors/task-event-processor";
import { ContextEventProcessor } from "../../../src/intelligence/realtime/processors/context-event-processor";
import { RealtimePipeline } from "../../../src/intelligence/realtime/pipeline/realtime-pipeline";
import { createNexusEvent } from "../../../src/intelligence/realtime/event-factory/event-factory";
import { NexusEventType } from "../../../src/intelligence/realtime/realtime-types/event-types";

describe("RealtimePipeline", () => {
  function createPipeline() {
    const bus =
      new InMemoryEventBus(
        new InMemoryIdempotencyStore()
      );

    const registry =
      new ProcessorRegistry();

    registry.register(
      new TaskEventProcessor()
    );

    registry.register(
      new ContextEventProcessor()
    );

    return {
      bus,
      pipeline:
        new RealtimePipeline(
          bus,
          registry
        )
    };
  }

  it("should route an event to the correct processor", async () => {
    const {
      pipeline
    } = createPipeline();

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
      await pipeline.process(event);

    expect(
      result.processorCount
    ).toBe(1);

    expect(
      result.processorNames
    ).toContain(
      "task-event-processor"
    );
  });

  it("should report emitted events", async () => {
    const {
      pipeline
    } = createPipeline();

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
      await pipeline.process(event);

    expect(
      result.emittedEventCount
    ).toBe(1);
  });

  it("should process context events", async () => {
    const {
      pipeline
    } = createPipeline();

    const event = createNexusEvent({
      eventType:
        NexusEventType.CONTEXT_UPDATED,
      source: "test",
      entityId: "user-001",
      payload: {
        focus: "deep-work"
      }
    });

    const result =
      await pipeline.process(event);

    expect(
      result.processorCount
    ).toBe(1);

    expect(
      result.processorNames
    ).toContain(
      "context-event-processor"
    );
  });
});
