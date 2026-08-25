import {
  PersonalizationProfile
} from "./personalization-types";

import {
  UserMemory
} from "./memory-types";

export function buildPersonalizationProfile(
  userId: string,
  memories: UserMemory[]
): PersonalizationProfile {
  const active =
    memories.filter(
      memory =>
        memory.status ===
        "active"
    );

  const averageConfidence =
    active.length === 0
      ? 0
      : active.reduce(
          (sum, memory) =>
            sum +
            memory.confidence,
          0
        ) / active.length;

  return {
    userId,

    memories,

    activeMemoryCount:
      active.length,

    averageConfidence,

    lastUpdatedAt:
      new Date().toISOString()
  };
}
