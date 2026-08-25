import {
  LearningService
} from "../../../src/intelligence/learning/learning-service";

describe(
  "LearningService",
  () => {
    it(
      "should create a learning candidate",
      async () => {
        const service =
          new LearningService();

        const candidate =
          await service.createCandidate(
            "user-001",
            "focus_threshold",
            0.7,
            0.75,
            {
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
            "Repeated positive outcomes."
          );

        expect(
          candidate.id
        ).toBeDefined();

        expect(
          candidate.target
        ).toBe(
          "focus_threshold"
        );
      }
    );

    it(
      "should evaluate strong evidence",
      async () => {
        const service =
          new LearningService();

        const candidate =
          await service.createCandidate(
            "user-001",
            "focus_threshold",
            0.7,
            0.75,
            {
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
            "Strong evidence."
          );

        const decision =
          await service.evaluateAndStore(
            candidate
          );

        expect(
          decision.approved
        ).toBe(true);
      }
    );
  }
);
