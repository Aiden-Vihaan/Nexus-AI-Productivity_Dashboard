import {
  DecisionEvidence
} from "./decision-types";

export function createDecisionEvidence(
  factor: string,
  contribution: number,
  explanation: string
): DecisionEvidence {
  return {
    factor,

    contribution:
      Number(
        Math.min(
          1,
          Math.max(
            0,
            contribution
          )
        ).toFixed(2)
      ),

    explanation
  };
}

export function buildDecisionRationale(
  evidence: DecisionEvidence[]
): string {
  if (
    evidence.length === 0
  ) {
    return "No additional evidence was available.";
  }

  return evidence
    .map(
      item =>
        `${item.factor}: ${item.explanation}`
    )
    .join(" ");
}
