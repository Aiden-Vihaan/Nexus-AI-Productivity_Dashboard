export interface InterventionBudget {
  maxInterventionsPerHour: number;

  maxHighFrictionPerHour: number;

  currentInterventions: number;

  currentHighFriction: number;
}

export interface InterventionBudgetResult {
  allowed: boolean;

  remainingInterventions: number;

  remainingHighFriction: number;

  reason?: string;
}

export function evaluateInterventionBudget(
  budget: InterventionBudget
): InterventionBudgetResult {
  const remainingInterventions =
    Math.max(
      0,

      budget.maxInterventionsPerHour -
        budget.currentInterventions
    );

  const remainingHighFriction =
    Math.max(
      0,

      budget.maxHighFrictionPerHour -
        budget.currentHighFriction
    );

  if (
    remainingInterventions <=
    0
  ) {
    return {
      allowed: false,

      remainingInterventions,

      remainingHighFriction,

      reason:
        "Hourly intervention budget exhausted."
    };
  }

  return {
    allowed: true,

    remainingInterventions,

    remainingHighFriction
  };
}
