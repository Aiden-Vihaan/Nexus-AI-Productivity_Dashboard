import {
  calculateRecency,
  applyMemoryDecay,
  isMemoryExpired
} from "../../../src/intelligence/personalization/memory-decay";

describe(
  "Memory Decay",
  () => {
    it(
      "should return high recency for recent memories",
      () => {
        const now =
          new Date();

        const recency =
          calculateRecency(
            now.toISOString(),
            now
          );

        expect(
          recency
        ).toBeCloseTo(
          1
        );
      }
    );

    it(
      "should decay confidence over time",
      () => {
        const now =
          new Date();

        const oldDate =
          new Date(
            now.getTime() -
              90 *
                24 *
                60 *
                60 *
                1000
          );

        const memory = {
          id:
            "memory-001",

          userId:
            "user-001",

          category:
            "behavior" as const,

          key:
            "deep_work_period",

          value:
            "morning",

          source:
            "observed" as const,

          confidence:
            0.9,

          importance:
            0.7,

          relevance:
            0.5,

          status:
            "active" as const,

          observationCount:
            10,

          createdAt:
            oldDate.toISOString(),

          updatedAt:
            oldDate.toISOString(),

          lastObservedAt:
            oldDate.toISOString()
        };

        const decayed =
          applyMemoryDecay(
            memory,
            now
          );

        expect(
          decayed.confidence
        ).toBeLessThan(
          memory.confidence
        );
      }
    );

    it(
      "should detect expired memories",
      () => {
        const past =
          new Date(
            Date.now() -
              1000
          );

        const memory = {
          id:
            "memory-002",

          userId:
            "user-001",

          category:
            "contextual" as const,

          key:
            "current_project",

          value:
            "NEXUS",

          source:
            "observed" as const,

          confidence:
            0.8,

          importance:
            0.5,

          relevance:
            0.5,

          status:
            "active" as const,

          observationCount:
            1,

          createdAt:
            new Date().toISOString(),

          updatedAt:
            new Date().toISOString(),

          lastObservedAt:
            new Date().toISOString(),

          expiresAt:
            past.toISOString()
        };

        expect(
          isMemoryExpired(
            memory
          )
        ).toBe(true);
      }
    );
  }
);
