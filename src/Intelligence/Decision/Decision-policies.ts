import {
  DecisionPolicy,
  DecisionType
} from "./decision-types";

export const decisionPolicies: Record<
  DecisionType,
  DecisionPolicy
> = {
  suggest_break: {
    type: "suggest_break",

    minimumPredictionProbability: 0.65,

    minimumConfidence: 0.65,

    maximumInterventionCost: 0.55,

    minimumDecisionScore: 0.55,

    cooldownMinutes: 30
  },

  protect_focus: {
    type: "protect_focus",

    minimumPredictionProbability: 0.55,

    minimumConfidence: 0.6,

    maximumInterventionCost: 0.2,

    minimumDecisionScore: 0.5,

    cooldownMinutes: 15
  },

  prioritize_task: {
    type: "prioritize_task",

    minimumPredictionProbability: 0.6,

    minimumConfidence: 0.6,

    maximumInterventionCost: 0.35,

    minimumDecisionScore: 0.55,

    cooldownMinutes: 20
  },

  reduce_context_switching: {
    type: "reduce_context_switching",

    minimumPredictionProbability: 0.6,

    minimumConfidence: 0.6,

    maximumInterventionCost: 0.45,

    minimumDecisionScore: 0.55,

    cooldownMinutes: 25
  },

  prepare_for_completion: {
    type: "prepare_for_completion",

    minimumPredictionProbability: 0.65,

    minimumConfidence: 0.65,

    maximumInterventionCost: 0.35,

    minimumDecisionScore: 0.55,

    cooldownMinutes: 20
  },

  no_action: {
    type: "no_action",

    minimumPredictionProbability: 1,

    minimumConfidence: 1,

    maximumInterventionCost: 0,

    minimumDecisionScore: 1,

    cooldownMinutes: 0
  }
};
