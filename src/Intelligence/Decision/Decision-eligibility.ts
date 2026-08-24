import {
  Prediction
} from "../prediction";

import {
  DecisionPolicy,
  DecisionType
} from "./decision-types";

export interface EligibilityInput {
  prediction: Prediction;

  policy: DecisionPolicy;

  recentDecisionTypes: DecisionType[];

  lastInterventionAt?: string;
}

export function isDecisionEligible(
  input: EligibilityInput
): boolean {
  const {
    prediction,
    policy,
    recentDecisionTypes,
    lastInterventionAt
  } = input;

  if (
    prediction.probability <
    policy.minimumPredictionProbability
  ) {
    return false;
  }

  if (
    prediction.confidence <
    policy.minimumConfidence
  ) {
    return false;
  }

  if (
    recentDecisionTypes.includes(
      policy.type
    )
  ) {
    return false;
  }

  if (
    lastInterventionAt
  ) {
    const elapsed =
      Date.now() -
      new Date(
        lastInterventionAt
      ).getTime();

    const cooldown =
      policy.cooldownMinutes *
      60 *
      1000;

    if (
      elapsed < cooldown
    ) {
      return false;
    }
  }

  return true;
}
