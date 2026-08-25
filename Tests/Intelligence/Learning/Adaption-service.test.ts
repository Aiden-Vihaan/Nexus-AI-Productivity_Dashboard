import {
  AdaptationService
} from "../../../src/intelligence/learning/adaptation-service";

import {
  InMemoryLearningStore
} from "../../../src/intelligence/learning/learning-store";

import {
  DEFAULT_LEARNING_POLICY
} from "../../../src/intelligence/learning/learning-policy";

describe(
  "AdaptationService",
  () => {
    it(
      "should safely apply a qualified adaptation",
      async () => {
        const store =
          new InMemoryLearningStore();

        const service =
          new AdaptationService(
            store,
            DEFAULT_LEARNING_POLICY
          );

        const result =
          await service.apply({
            id:
              "candidate-001",

            userId:
              "user-001",

            target:
              "focus_threshold",

            currentValue:
              0.7,

            proposedValue:
              0.75,

            direction:
              "increase",

            evidence: {
              id:
                "evidence-001",

              userId:
                "user-001",

              interventionType:
                "focus_protection",

              signals: [],

              sampleSize:
                20,

              averageConfidence:
                0.9,

              effectiveness:
                0.6,

              consistency:
                0.9,

              createdAt:
                new Date().toISOString()
            },

            score:
              0.8,

            confidence:
              0.9,

            status:
              "observed",

            reason:
              "Repeated positive outcomes.",

            createdAt:
              new Date().toISOString()
          });

        expect(
          result.applied
        ).toBe(true);

        expect(
          result.adaptation.status
        ).toBe(
          "applied"
        );
      }
    );

    it(
      "should reject unsafe adaptations",
      async () => {
        const store =
          new InMemoryLearningStore();

        const service =
          new AdaptationService(
            store,
            DEFAULT_LEARNING_POLICY
          );

        const result =
          await service.apply({
            id:
              "candidate-002",

            userId:
              "user-001",

            target:
              "focus_threshold",

            currentValue:
              0.7,

            proposedValue:
              1.5,

            direction:
              "increase",

            evidence: {
              id:
                "evidence-002",

              userId:
                "user-001",

              interventionType:
                "focus_protection",

              signals: [],

              sampleSize:
                20,

              averageConfidence:
                0.9,

              effectiveness:
                0.6,

              consistency:
                0.9,

              createdAt:
                new Date().toISOString()
            },

            score:
              0.8,

            confidence:
              0.9,

            status:
              "observed",

            reason:
              "Unsafe large change.",

            createdAt:
              new Date().toISOString()
          });

        expect(
          result.applied
        ).toBe(false);

        expect(
          result.adaptation.status
        ).toBe(
          "rejected"
        );
      }
    );
  }
);
