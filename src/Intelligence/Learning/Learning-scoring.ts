import {
  LearningEvidence,
  LearningCandidate
} from "./learning-types";

export function calculateEvidenceScore(
  evidence: LearningEvidence
): number {
  const sampleFactor =
    Math.min(
      1,
      evidence.sampleSize / 20
    );

  const confidenceFactor =
    evidence.averageConfidence;

  const effectivenessFactor =
    Math.abs(
      evidence.effectiveness
    );

  const consistencyFactor =
    evidence.consistency;

  return Math.max(
    0,
    Math.min(
      1,
      sampleFactor *
        0.25 +
        confidenceFactor *
        0.25 +
        effectivenessFactor *
        0.3 +
        consistencyFactor *
        0.2
    )
  );
}

export function calculateLearningConfidence(
  evidence: LearningEvidence
): number {
  return Math.max(
    0,
    Math.min(
      1,
      (
        evidence.averageConfidence +
        evidence.consistency
      ) / 2
    )
  );
}

export function calculateCandidateScore(
  evidence: LearningEvidence
): number {
  return (
    calculateEvidenceScore(
      evidence
    ) *
    calculateLearningConfidence(
      evidence
    )
  );
}

export function createLearningCandidate(
  userId: string,
  target: string,
  currentValue: number,
  proposedValue: number,
  evidence: LearningEvidence,
  reason: string
): LearningCandidate {
  const difference =
    proposedValue -
    currentValue;

  const direction =
    difference > 0
      ? "increase"
      : difference < 0
        ? "decrease"
        : "maintain";

  return {
    id: `candidate_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2, 8)}`,

    userId,

    target,

    currentValue,

    proposedValue,

    direction,

    evidence,

    score:
      calculateCandidateScore(
        evidence
      ),

    confidence:
      calculateLearningConfidence(
        evidence
      ),

    status: "observed",

    reason,

    createdAt:
      new Date().toISOString()
  };
}
