import {
  createInitialContext
} from "../../../src/intelligence/context/context-state";

describe("Context State", () => {
  it("should create an initial user context", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    expect(
      context.userId
    ).toBe("user-001");

    expect(
      context.focusState
    ).toBe("idle");

    expect(
      context.sessionState
    ).toBe("inactive");

    expect(
      context.workloadState
    ).toBe("unknown");

    expect(
      context.recentActivity
    ).toHaveLength(0);

    expect(
      context.version
    ).toBe(1);
  });
});
