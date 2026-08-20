import { describe, expect, it } from "vitest";
import { canCompleteTask } from "../../packages/domain/src/task/task.rules";

describe("Task rules", () => {
  it("allows a non-completed task to be completed", () => {
    expect(canCompleteTask("TODO")).toBe(true);
  });

  it("does not complete an already completed task", () => {
    expect(canCompleteTask("COMPLETED")).toBe(false);
  });
});
