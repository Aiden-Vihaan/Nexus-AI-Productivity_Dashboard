import { InMemoryIdempotencyStore } from "../../../src/intelligence/realtime/idempotency/in-memory-idempotency-store";

describe("Idempotency Store", () => {
  it("should report an event as unprocessed initially", async () => {
    const store =
      new InMemoryIdempotencyStore();

    expect(
      await store.hasProcessed("event-001")
    ).toBe(false);
  });

  it("should mark an event as processed", async () => {
    const store =
      new InMemoryIdempotencyStore();

    await store.markProcessed("event-001");

    expect(
      await store.hasProcessed("event-001")
    ).toBe(true);
  });

  it("should keep different event IDs independent", async () => {
    const store =
      new InMemoryIdempotencyStore();

    await store.markProcessed("event-001");

    expect(
      await store.hasProcessed("event-001")
    ).toBe(true);

    expect(
      await store.hasProcessed("event-002")
    ).toBe(false);
  });
});
