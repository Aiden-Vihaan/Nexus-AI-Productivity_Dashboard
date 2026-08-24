import {
  InMemoryContextStore
} from "../../../src/intelligence/context/in-memory-context-store";

import {
  createInitialContext
} from "../../../src/intelligence/context/context-state";

describe("InMemoryContextStore", () => {
  it("should store and retrieve context", async () => {
    const store =
      new InMemoryContextStore();

    const context =
      createInitialContext(
        "user-001"
      );

    await store.set(context);

    const result =
      await store.get(
        "user-001"
      );

    expect(result).toEqual(
      context
    );
  });

  it("should return undefined for missing context", async () => {
    const store =
      new InMemoryContextStore();

    const result =
      await store.get(
        "unknown-user"
      );

    expect(result).toBeUndefined();
  });

  it("should determine whether context exists", async () => {
    const store =
      new InMemoryContextStore();

    expect(
      await store.has("user-001")
    ).toBe(false);

    await store.set(
      createInitialContext(
        "user-001"
      )
    );

    expect(
      await store.has("user-001")
    ).toBe(true);
  });

  it("should delete context", async () => {
    const store =
      new InMemoryContextStore();

    await store.set(
      createInitialContext(
        "user-001"
      )
    );

    await store.delete(
      "user-001"
    );

    expect(
      await store.has("user-001")
    ).toBe(false);
  });
});
