import {
  InterventionPolicy
} from "./intervention-policies";

import {
  InterventionRequest
} from "./intervention-types";

export interface EligibilityResult {
  eligible: boolean;

  reason?: string;
}

export function evaluateInterventionEligibility(
  request: InterventionRequest,

  policy: InterventionPolicy
): EligibilityResult {
  if (
    request.type === "none"
  ) {
    return {
      eligible: false,

      reason:
        "No intervention requested."
    };
  }

  if (
    request.score <
    policy.minimumScore
  ) {
    return {
      eligible: false,

      reason:
        "Intervention score is below policy threshold."
    };
  }

  if (
    request.interruptionCost >
    policy.maximumInterruptionCost
  ) {
    return {
      eligible: false,

      reason:
        "Intervention cost exceeds policy limit."
    };
  }

  if (
    request.recentInterventionCount >=
    policy.maximumRecentInterventions
  ) {
    return {
      eligible: false,

      reason:
        "Recent intervention budget exceeded."
    };
  }

  if (
    request.recentHighFrictionCount >=
    policy.maximumRecentHighFrictionInterventions
  ) {
    return {
      eligible: false,

      reason:
        "Recent high-friction intervention limit exceeded."
    };
  }

  if (
    request.lastInterventionAt
  ) {
    const elapsed =
      Date.now() -
      new Date(
        request.lastInterventionAt
      ).getTime();

    const cooldown =
      policy.cooldownMinutes *
      60 *
      1000;

    if (
      elapsed <
      cooldown
    ) {
      return {
        eligible: false,

        reason:
          "Intervention is currently in cooldown."
      };
    }
  }

  if (
    new Date(
      request.expiresAt
    ).getTime() <=
    Date.now()
  ) {
    return {
      eligible: false,

      reason:
        "Intervention request has expired."
    };
  }

  return {
    eligible: true
  };
}
