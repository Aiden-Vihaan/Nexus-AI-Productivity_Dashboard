import {
  UserMemory,
  MemoryRetrievalQuery,
  MemoryRetrievalResult
} from "./memory-types";

import {
  calculateMemoryScore
} from "./memory-scoring";

import {
  calculateRecency
} from "./memory-decay";

function calculateContextRelevance(
  memory: UserMemory,
  context?: Record<string, unknown>
): number {
  if (!context) {
    return 0.5;
  }

  const metadata =
    memory.metadata ?? {};

  const contextKeys =
    Object.keys(context);

  if (
    contextKeys.length === 0
  ) {
    return 0.5;
  }

  let matches = 0;

  for (
    const key of contextKeys
  ) {
    if (
      metadata[key] !== undefined &&
      metadata[key] ===
        context[key]
    ) {
      matches += 1;
    }
  }

  return matches /
    contextKeys.length;
}

export function retrieveRelevantMemories(
  memories: UserMemory[],
  query: MemoryRetrievalQuery
): MemoryRetrievalResult[] {
  const minimumConfidence =
    query.minimumConfidence ??
    0;

  const filtered =
    memories.filter(
      memory => {
        if (
          memory.userId !==
          query.userId
        ) {
          return false;
        }

        if (
          memory.status !==
          "active"
        ) {
          return false;
        }

        if (
          memory.confidence <
          minimumConfidence
        ) {
          return false;
        }

        if (
          query.category &&
          memory.category !==
            query.category
        ) {
          return false;
        }

        if (
          query.key &&
          memory.key !==
            query.key
        ) {
          return false;
        }

        return true;
      }
    );

  const scored =
    filtered.map(
      memory => {
        const relevance =
          calculateContextRelevance(
            memory,
            query.context
          );

        const recency =
          calculateRecency(
            memory.lastObservedAt
          );

        const score =
          calculateMemoryScore(
            memory,
            relevance,
            recency
          );

        return {
          memory,

          score,

          reason:
            `Memory matched with relevance ${relevance.toFixed(
              2
            )} and recency ${recency.toFixed(
              2
            )}.`
        };
      }
    );

  return scored
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(
      0,
      query.limit ?? 10
    );
}
