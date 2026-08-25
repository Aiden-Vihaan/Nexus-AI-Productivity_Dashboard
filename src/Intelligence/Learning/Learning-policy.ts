import {
  LearningCandidate,
  LearningDecision
} from "./learning-types";

import {
  AdaptationPolicy
} from "./adaptation-types";

export const DEFAULT_LEARNING_POLICY:
  AdaptationPolicy = {
    minimumSampleSize: 10,

    minimumConfidence: 0.7,

    minimumEffectiveness: 0.25,

    minimumScore: 0.6,

    maximumChange: 0.2
  };

export function evaluateLearningCandidate(
  candidate: LearningCandidate,
  policy:
    AdaptationPolicy =
    DEFAULT_LEARNING_POLICY
): LearningDecision {
  if (
    candidate.evidence.sampleSize <
    policy.minimumSampleSize
  ) {
    return {
      candidateId:
        candidate.id,

      approved: false,

      reason:
        "Insufficient evidence sample size.",

      score:
        candidate.score,

      confidence:
        candidate.confidence,

      decidedAt:
        new Date().toISOString()
    };
  }

  if (
    candidate.confidence <
    policy.minimumConfidence
  ) {
    return {
      candidateId:
        candidate.id,

      approved: false,

      reason:
        "Learning confidence is below the required threshold.",

      score:
        candidate.score,

      confidence:
        candidate.confidence,

      decidedAt:
        new Date().toISOString()
    };
  }

  if (
    Math.abs(
      candidate.evidence
        .effectiveness
    ) <
    policy.minimumEffectiveness
  ) {
    return {
      candidateId:
        candidate.id,

      approved: false,

      reason:
        "Observed effectiveness is too weak.",

      score:
        candidate.score,

      confidence:
        candidate.confidence,

      decidedAt:
        new Date().toISOString()
    };
  }

  if (
    candidate.score <
    policy.minimumScore
  ) {
    return {
      candidateId:
        candidate.id,

      approved: false,

      reason:
        "Learning score is below the adaptation threshold.",

      score:
        candidate.score,

      confidence:
        candidate.confidence,

      decidedAt:
        new Date().toISOString()
    };
  }

  if (
    Math.abs(
      candidate.proposedValue -
        candidate.currentValue
    ) >
    policy.maximumChange
  ) {
    return {
      candidateId:
        candidate.id,

      approved: false,

      reason:
        "Proposed adaptation exceeds the maximum allowed change.",

      score:
        candidate.score,

      confidence:
        candidate.confidence,

      decidedAt:
        new Date().toISOString()
    };
  }

  return {
    candidateId:
      candidate.id,

    approved: true,

    reason:
      "Learning evidence satisfies adaptation policy.",

    score:
      candidate.score,

    confidence:
      candidate.confidence,

    decidedAt:
      new Date().toISOString()
  };
}
