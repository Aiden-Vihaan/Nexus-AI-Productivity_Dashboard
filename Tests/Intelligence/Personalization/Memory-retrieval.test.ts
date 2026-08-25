import {
  retrieveRelevantMemories
} from "../../../src/intelligence/personalization/memory-retrieval";

describe(
  "Memory Retrieval",
  () => {
    it(
      "should retrieve relevant memories",
      () => {
        const memories = [
          {
            id:
              "memory-001",

            userId:
              "user-001",

            category:
              "preference" as const,

            key:
              "focus_mode",

            value:
              "silent",

            source:
              "explicit" as const,

            confidence:
              0.95,

            importance:
              0.9,

            relevance:
              0.8,

            status:
              "active" as const,

            observationCount:
              5,

            createdAt:
              new Date().toISOString(),

            updatedAt:
              new Date().toISOString(),

            lastObservedAt:
              new Date().toISOString(),

            metadata: {
              activity:
                "deep_work"
            }
          },

          {
            id:
              "memory-002",

            userId:
              "user-001",

            category:
              "behavior" as const,

            key:
              "preferred_break",

            value:
              "short",

            source:
              "observed" as const,

            confidence:
              0.6,

            importance:
              0.5,

            relevance:
              0.4,

            status:
              "active" as const,

            observationCount:
              2,

            createdAt:
              new Date().toISOString(),

            updatedAt:
              new Date().toISOString(),

            lastObservedAt:
              new Date().toISOString()
          }
        ];

        const results =
          retrieveRelevantMemories(
            memories,
            {
              userId:
                "user-001",

              context: {
                activity:
                  "deep_work"
              },

              limit:
                5
            }
          );

        expect(
          results.length
        ).toBeGreaterThan(
          0
        );

        expect(
          results[0].memory.id
        ).toBe(
          "memory-001"
        );
      }
    );
  }
);
