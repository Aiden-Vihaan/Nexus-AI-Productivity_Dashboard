import {
  detectMemoryConflict
} from "../../../src/intelligence/personalization/memory-conflicts";

describe(
  "Memory Conflicts",
  () => {
    const existing = {
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
        0.9,

      importance:
        0.8,

      relevance:
        0.8,

      status:
        "active" as const,

      observationCount:
        10,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      lastObservedAt:
        new Date().toISOString()
    };

    it(
      "should detect conflicting values",
      () => {
        const incoming = {
          ...existing,

          id:
            "memory-002",

          value:
            "interruptive",

          confidence:
            0.5
        };

        const conflict =
          detectMemoryConflict(
            existing,
            incoming
          );

        expect(
          conflict
        ).not.toBeNull();

        expect(
          conflict?.resolution
        ).toBe(
          "keep_existing"
        );
      }
    );

    it(
      "should prefer significantly stronger incoming evidence",
      () => {
        const incoming = {
          ...existing,

          id:
            "memory-003",

          value:
            "interruptive",

          confidence:
            1
        };

        const conflict =
          detectMemoryConflict(
            existing,
            incoming
          );

        expect(
          conflict?.resolution
        ).toBe(
          "replace_existing"
        );
      }
    );
  }
);
