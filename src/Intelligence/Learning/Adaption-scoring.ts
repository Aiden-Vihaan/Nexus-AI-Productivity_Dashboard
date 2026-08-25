import {
  LearningCandidate
} from "./learning-types";

export function calculateAdaptationRisk(
  candidate: LearningCandidate
): number {
  const change =
    Math.abs(
      candidate.proposedValue -
        candidate.currentValue
    );

  const uncertainty =
    1 -
    candidate.confidence;

  const volatility =
    1 -
    candidate.evidence
      .consistency;

  return Math.max(
    0,
    Math.min(
      1,
      change *
        0.4 +
        uncertainty *
        0.35 +
        volatility *
        0.25
    )
  );
}

export function calculateAdaptationBenefit(
  candidate: LearningCandidate
): number {
  return Math.max(
    0,
    Math.min(
      1,
      Math.abs(
        candidate.evidence
          .effectiveness
      ) *
        candidate.confidence
    )
  );
}

export function calculateAdaptationPriority(
  candidate: LearningCandidate
): number {
  const benefit =
    calculateAdaptationBenefit(
      candidate
    );

  const risk =
    calculateAdaptationRisk(
      candidate
    );

  return Math.max(
    0,
    Math.min(
      1,
      benefit - risk
    )
  );
}
