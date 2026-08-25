import {
  shouldActivateMemory,
  getDefaultExpirationDays
} from "../../../src/intelligence/personalization/memory-policy";

describe(
  "Memory Policy",
  () => {
    const memory = {
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
        "candidate" as const,

      observationCount:
        2,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      lastObservedAt:
        new Date().toISOString()
    };

    it(
      "should activate strong memories",
      () => {
        expect(
          shouldActivateMemory(
            memory
          )
        ).toBe(true);
      }
    );

    it(
      "should reject weak memories",
      () => {
        const weakMemory = {
          ...memory,

          confidence:
            0.2
        };

        expect(
          shouldActivateMemory(
            weakMemory
          )
        ).toBe(false);
      }
    );

    it(
      "should provide category-specific expiration",
      () => {
        expect(
          getDefaultExpirationDays(
            "goal"
          )
        ).toBe(30);

        expect(
          getDefaultExpirationDays(
            "constraint"
          )
        ).toBe(365);
      }
    );
  }
);
