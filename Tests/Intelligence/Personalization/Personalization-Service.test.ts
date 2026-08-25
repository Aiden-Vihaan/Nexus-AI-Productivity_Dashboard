import {
  MemoryService
} from "../../../src/intelligence/personalization/memory-service";

import {
  PersonalizationService
} from "../../../src/intelligence/personalization/personalization-service";

describe(
  "PersonalizationService",
  () => {
    it(
      "should build personalized context",
      async () => {
        const memoryService =
          new MemoryService();

        await memoryService.createMemory(
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
              "explicit",

            context: {
              activity:
                "deep_work"
            }
          }
        );

        const service =
          new PersonalizationService(
            memoryService
          );

        const context =
          await service.buildContext(
            "user-001",
            {
              activity:
                "deep_work"
            }
          );

        expect(
          context.relevantMemories
            .length
        ).toBeGreaterThan(
          0
        );
      }
    );

    it(
      "should generate personalization decision",
      async () => {
        const memoryService =
          new MemoryService();

        await memoryService.createMemory(
          "user-001",
          "preference",
          "notification_style",
          "quiet",
          {
            id:
              "observation-002",

            memoryKey:
              "notification_style",

            value:
              "quiet",

            confidence:
              0.9,

            observedAt:
              new Date().toISOString(),

            source:
              "explicit"
          }
        );

        const service =
          new PersonalizationService(
            memoryService
          );

        const decision =
          await service.generateDecision(
            "user-001",
            {}
          );

        expect(
          decision.signals.length
        ).toBeGreaterThan(
          0
        );

        expect(
          decision.confidence
        ).toBeGreaterThan(
          0
        );
      }
    );
  }
);
