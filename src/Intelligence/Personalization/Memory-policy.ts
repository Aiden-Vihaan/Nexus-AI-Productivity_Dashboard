import {
  UserMemory,
  MemoryCategory
} from "./memory-types";

export interface MemoryPolicy {
  minimumConfidence: number;

  minimumImportance: number;

  minimumObservationCount: number;

  defaultExpirationDays: number;

  maximumActiveMemories: number;
}

export const DEFAULT_MEMORY_POLICY:
  MemoryPolicy = {
    minimumConfidence: 0.55,

    minimumImportance: 0.35,

    minimumObservationCount: 1,

    defaultExpirationDays: 90,

    maximumActiveMemories: 200
  };

export function shouldActivateMemory(
  memory: UserMemory,
  policy:
    MemoryPolicy =
    DEFAULT_MEMORY_POLICY
): boolean {
  return (
    memory.confidence >=
      policy.minimumConfidence &&
    memory.importance >=
      policy.minimumImportance &&
    memory.observationCount >=
      policy.minimumObservationCount
  );
}

export function getDefaultExpirationDays(
  category: MemoryCategory
): number {
  switch (category) {
    case "goal":
      return 30;

    case "routine":
      return 120;

    case "preference":
      return 180;

    case "constraint":
      return 365;

    case "workflow":
      return 180;

    case "behavior":
      return 60;

    case "interaction":
      return 30;

    case "contextual":
      return 7;

    default:
      return 90;
  }
}
