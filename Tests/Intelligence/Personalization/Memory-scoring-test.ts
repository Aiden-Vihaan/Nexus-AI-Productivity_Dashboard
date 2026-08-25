import {
  calculateMemoryConfidence,
  calculateMemoryImportance,
  calculateMemoryScore
} from "../../../src/intelligence/personalization/memory-scoring";

describe(
  "Memory Scoring",
  () => {
    it(
      "should calculate memory confidence",
      () => {
        const confidence =
          calculateMemoryConfidence(
            {
              id:
                "observation-001",

              memoryKey:
                "preferred_focus_mode",

              value:
                "silent",

              confidence:
                0.9,

              observedAt:
                new Date().toISOString(),

              source:
                "explicit"
            },
            0.7,
            5
          );

        expect(
          confidence
        ).toBeGreaterThan(
          0.7
        );

        expect(
          confidence
        ).toBeLessThanOrEqual(
          1
        );
      }
    );

    it(
      "should calculate importance",
      () => {
        const importance =
          calculateMemoryImportance({
            id:
              "memory-001",

            userId:
              "user-001",

            category:
              "preference",

            key:
              "preferred_focus_mode",

            value:
              "silent",

            source:
              "explicit",

            confidence:
              0.9,

            importance:
              0,

            relevance:
              0.5,

            status:
              "active",

            observationCount:
              1,

            createdAt:
              new Date().toISOString(),

            updatedAt:
              new Date().toISOString(),

            lastObservedAt:
              new Date().toISOString()
          });

        expect(
          importance
        ).toBeGreaterThan(
          0
        );

        expect(
          importance
        ).toBeLessThanOrEqual(
          1
        );
      }
    );

    it(
      "should calculate retrieval score",
      () => {
        const score =
          calculateMemoryScore(
            {
              id:
                "memory-001",

              userId:
                "user-001",

              category:
                "preference",

              key:
                "focus_mode",

              value:
                "silent",

              source:
                "explicit",

              confidence:
                0.9,

              importance:
                0.8,

              relevance:
                0.7,

              status:
                "active",

              observationCount:
                5,

              createdAt:
                new Date().toISOString(),

              updatedAt:
                new Date().toISOString(),

              lastObservedAt:
                new Date().toISOString()
            },
            0.8,
            0.9
          );

        expect(
          score
        ).toBeGreaterThan(
          0
        );

        expect(
          score
        ).toBeLessThanOrEqual(
          1
        );
      }
    );
  }
);
