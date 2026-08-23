import { InMemoryEventBus } from "../../../src/intelligence/realtime/event-bus/in-memory-event-bus";

import { InMemoryIdempotencyStore } from "../../../src/intelligence/realtime/idempotency/in-memory-idempotency-store";

import { createNexusEvent } from "../../../src/intelligence/realtime/event-factory/event-factory";

describe("NEXUS Event Bus", () => {
  function createBus() {
    return new InMemoryEventBus(
      new InMemoryIdempotencyStore()
    );
  }

  function createEvent() {
    return createNexusEvent({
      eventType: "TASK_COMPLETED",
      source: "task-service",
      entityId: "task-001",
      payload: {
        taskId: "task-001"
      }
    });
  }

  it("should deliver an event to a subscriber", async () => {
    const bus = createBus();

    const receivedEvents: unknown[] = [];

    await bus.subscribe(
      "nexus.tasks",
      async (event) => {
        receivedEvents.push(event);
      }
    );

    await bus.publish(
      "nexus.tasks",
      createEvent()
    );

    expect(receivedEvents).toHaveLength(1);
  });

  it("should support multiple subscribers", async () => {
    const bus = createBus();

    let firstSubscriberCalls = 0;
    let secondSubscriberCalls = 0;

    await bus.subscribe(
      "nexus.tasks",
      async () => {
        firstSubscriberCalls += 1;
      }
    );

    await bus.subscribe(
      "nexus.tasks",
      async () => {
        secondSubscriberCalls += 1;
      }
    );

    await bus.publish(
      "nexus.tasks",
      createEvent()
    );

    expect(firstSubscriberCalls).toBe(1);
    expect(secondSubscriberCalls).toBe(1);
  });

  it("should report subscriber count", async () => {
    const bus = createBus();

    await bus.subscribe(
      "nexus.tasks",
      async () => {}
    );

    expect(
      bus.getSubscriberCount("nexus.tasks")
    ).toBe(1);
  });

  it("should prevent duplicate event processing", async () => {
    const bus = createBus();

    let callCount = 0;

    await bus.subscribe(
      "nexus.tasks",
      async () => {
        callCount += 1;
      }
    );

    const event = createEvent();

    await bus.publish(
      "nexus.tasks",
      event
    );

    await bus.publish(
      "nexus.tasks",
      event
    );

    expect(callCount).toBe(1);
  });

  it("should allow unsubscribing", async () => {
    const bus = createBus();

    let callCount = 0;

    const unsubscribe =
      await bus.subscribe(
        "nexus.tasks",
        async () => {
          callCount += 1;
        }
      );

    unsubscribe();

    await bus.publish(
      "nexus.tasks",
      createEvent()
    );

    expect(callCount).toBe(0);
  });
});
