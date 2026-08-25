import {
  MemoryService
} from "../../../src/intelligence/personalization/memory-service";

describe(
  "MemoryService",
  () => {
    it(
      "should create and activate explicit memory",
      async () => {
        const service =
          new MemoryService();

        const memory =
          await service.createMemory(
            "user-001",
            "preference",
            "focus_mode",
            "silent",
            {
              id:
                "observation-001",

              memoryKey:
                "focus_mode",

              value:
                "silent",

              confidence:
                0.95,

              observedAt:
                new Date().toISOString(),

              source:
                "explicit"
            }
          );

        expect(
          memory.status
        ).toBe(
          "active"
        );

        expect(
          memory.confidence
        ).toBe(
          0.95
        );
      }
    );

    it(
      "should update memory from observation",
      async () => {
        const service =
          new MemoryService();

        const memory =
          await service.createMemory(
            "user-001",
            "routine",
            "focus_period",
            "morning",
            {
              id:
                "observation-002",

              memoryKey:
                "focus_period",

              value:
                "morning",

              confidence:
                0.8,

              observedAt:
                new Date().toISOString(),

              source:
                "observed"
            }
          );

        const update =
          await service.observe(
            memory.id,
            {
              id:
                "observation-003",

              memoryKey:
                "focus_period",

              value:
                "morning",

              confidence:
                0.9,

              observedAt:
                new Date().toISOString(),

              source:
                "observed"
            }
          );

        expect(
          update
        ).not.toBeNull();

        expect(
          update?.newValue
        ).toBe(
          "morning"
        );
      }
    );

    it(
      "should retrieve user memories",
      async () => {
        const service =
          new MemoryService();

        await service.createMemory(
          "user-002",
          "goal",
          "primary_goal",
          "deep_work",
          {
            id:
              "observation-004",

            memoryKey:
              "primary_goal",

            value:
              "deep_work",

            confidence:
              0.9,

            observedAt:
              new Date().toISOString(),

            source:
              "explicit"
          }
        );

        const memories =
          await service.getUserMemories(
            "user-002"
          );

        expect(
          memories.length
        ).toBe(1);
      }
    );
  }
);
