import type { TaskStatus } from "./task.types";

const transitions: Record<TaskStatus, TaskStatus[]> = {
  TODO: ["IN_PROGRESS", "CANCELLED"],
  IN_PROGRESS: ["TODO", "COMPLETED", "CANCELLED"],
  COMPLETED: ["TODO"],
  CANCELLED: ["TODO"],
};

export function canTransition(
  from: TaskStatus,
  to: TaskStatus,
): boolean {
  return transitions[from].includes(to);
}
