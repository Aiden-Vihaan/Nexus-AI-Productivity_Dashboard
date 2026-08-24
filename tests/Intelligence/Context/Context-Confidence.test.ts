import {
  createInitialContext
} from "../../../src/intelligence/context/context-state";

import {
  calculateContextConfidence
} from "../../../src/intelligence/context/context-confidence";

describe("Context Confidence", () => {
  it("should start with zero confidence", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    const confidence =
      calculateContextConfidence(
        context
      );

    expect(
      confidence.score
    ).toBe(0);
  });

  it("should increase confidence when context becomes known", () => {
    const context =
      createInitialContext(
        "user-001"
      );

    context.sessionState =
      "active";

    context.focusState =
      "focused";

    context.workloadState =
      "balanced";

    context.activeTask = {
      taskId:
        "task-001",

      startedAt:
        new Date().toISOString()
    };

    context.recentActivity = [
      {
        eventType:
          "TASK_STARTED",

        timestamp:
          new Date().toISOString()
      }
    ];

    const confidence =
      calculateContextConfidence(
        context
      );

    expect(
      confidence.score
    ).toBeGreaterThan(0);

    expect(
      confidence.score
    ).toBeLessThanOrEqual(1);
  });
});
