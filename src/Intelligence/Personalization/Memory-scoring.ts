import {
  UserMemory,
  MemoryObservation
} from "./memory-types";

export function calculateMemoryConfidence(
  observation: MemoryObservation,
  existingConfidence: number,
  observationCount: number
): number {
  const repetitionFactor =
    Math.min(
      1,
      observationCount / 10
    );

  const combined =
    observation.confidence * 0.6 +
    existingConfidence * 0.25 +
    repetitionFactor * 0.15;

  return Math.max(
    0,
    Math.min(1, combined)
  );
}

export function calculateMemoryImportance(
  memory: UserMemory
): number {
  const categoryWeight =
    {
      preference: 0.8,
      behavior: 0.5,
      routine: 0.7,
      goal: 0.9,
      constraint: 1.0,
      interaction: 0.4,
      workflow: 0.8,
      contextual: 0.3
    }[memory.category];

  return Math.max(
    0,
    Math.min(
      1,
      memory.confidence *
        0.7 +
        categoryWeight *
        0.3
    )
  );
}

export function calculateMemoryScore(
  memory: UserMemory,
  relevance: number,
  recency: number
): number {
  return Math.max(
    0,
    Math.min(
      1,
      memory.confidence * 0.4 +
        memory.importance * 0.2 +
        relevance * 0.25 +
        recency * 0.15
    )
  );
}
