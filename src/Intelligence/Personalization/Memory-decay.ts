import {
  UserMemory
} from "./memory-types";

const DAY_MS =
  1000 *
  60 *
  60 *
  24;

export function calculateRecency(
  lastObservedAt: string,
  now: Date = new Date()
): number {
  const lastObserved =
    new Date(
      lastObservedAt
    );

  const elapsed =
    Math.max(
      0,
      now.getTime() -
        lastObserved.getTime()
    );

  const days =
    elapsed / DAY_MS;

  return Math.exp(
    -days / 30
  );
}

export function applyMemoryDecay(
  memory: UserMemory,
  now: Date = new Date()
): UserMemory {
  const recency =
    calculateRecency(
      memory.lastObservedAt,
      now
    );

  const decayedConfidence =
    Math.max(
      0,
      Math.min(
        1,
        memory.confidence *
          (0.7 +
            0.3 * recency)
      )
    );

  return {
    ...memory,

    confidence:
      decayedConfidence,

    updatedAt:
      now.toISOString()
  };
}

export function isMemoryExpired(
  memory: UserMemory,
  now: Date = new Date()
): boolean {
  if (!memory.expiresAt) {
    return false;
  }

  return (
    new Date(
      memory.expiresAt
    ).getTime() <=
    now.getTime()
  );
}
