import {
  UserMemory
} from "./memory-types";

export interface MemoryConflict {
  key: string;

  existing:
    UserMemory;

  incoming:
    UserMemory;

  resolution:
    | "keep_existing"
    | "replace_existing"
    | "mark_for_review";
}

export function detectMemoryConflict(
  existing: UserMemory,
  incoming: UserMemory
): MemoryConflict | null {
  if (
    existing.userId !==
    incoming.userId
  ) {
    return null;
  }

  if (
    existing.key !==
    incoming.key
  ) {
    return null;
  }

  if (
    JSON.stringify(
      existing.value
    ) ===
    JSON.stringify(
      incoming.value
    )
  ) {
    return null;
  }

  if (
    incoming.confidence >
    existing.confidence + 0.15
  ) {
    return {
      key: incoming.key,

      existing,

      incoming,

      resolution:
        "replace_existing"
    };
  }

  if (
    existing.confidence >
    incoming.confidence + 0.15
  ) {
    return {
      key: existing.key,

      existing,

      incoming,

      resolution:
        "keep_existing"
    };
  }

  return {
    key: existing.key,

    existing,

    incoming,

    resolution:
      "mark_for_review"
  };
}
