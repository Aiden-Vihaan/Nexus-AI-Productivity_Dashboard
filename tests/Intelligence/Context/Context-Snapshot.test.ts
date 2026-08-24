import {
  createInitialContext
} from "../../../src/intelligence/context/context-state";

import {
  createContextSnapshot
} from "../../../src/intelligence/context/context-snapshot";

describe("Context Snapshot", () => {
  it("should create a compact context snapshot", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const snapshot =
      createContextSnapshot(
        context
      );

    expect(
      snapshot.userId
    ).toBe("user-001");

    expect(
      snapshot.focus
    ).toBe("idle");

    expect(
      snapshot.session
    ).toBe("inactive");

    expect(
      snapshot.workload
    ).toBe("unknown");

    expect(
      snapshot.confidence
    ).toBe(0);

    expect(
      snapshot.version
    ).toBe(1);
  });
});
