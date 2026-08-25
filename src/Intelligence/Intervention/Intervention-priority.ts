import {
  InterventionPriority
} from "./intervention-types";

export function calculateInterventionPriority(
  score: number,

  interruptionCost: number
): InterventionPriority {
  const adjustedScore =
    score -
    interruptionCost * 0.15;

  if (
    adjustedScore >=
    0.9
  ) {
    return "critical";
  }

  if (
    adjustedScore >=
    0.75
  ) {
    return "high";
  }

  if (
    adjustedScore >=
    0.55
  ) {
    return "medium";
  }

  return "low";
}
