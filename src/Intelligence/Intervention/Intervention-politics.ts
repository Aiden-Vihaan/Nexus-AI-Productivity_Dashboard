import {
  InterventionType
} from "./intervention-types";

export interface InterventionPolicy {
  type: InterventionType;

  minimumScore: number;

  maximumInterruptionCost: number;

  maximumRecentInterventions: number;

  maximumRecentHighFrictionInterventions: number;

  cooldownMinutes: number;

  requiresExplicitApproval: boolean;
}

export const interventionPolicies: Record<
  InterventionType,
  InterventionPolicy
> = {
  notification: {
    type: "notification",

    minimumScore: 0.8,

    maximumInterruptionCost: 0.8,

    maximumRecentInterventions: 3,

    maximumRecentHighFrictionInterventions: 1,

    cooldownMinutes: 45,

    requiresExplicitApproval: false
  },

  dashboard_signal: {
    type: "dashboard_signal",

    minimumScore: 0.55,

    maximumInterruptionCost: 0.5,

    maximumRecentInterventions: 8,

    maximumRecentHighFrictionInterventions: 3,

    cooldownMinutes: 15,

    requiresExplicitApproval: false
  },

  inline_suggestion: {
    type: "inline_suggestion",

    minimumScore: 0.6,

    maximumInterruptionCost: 0.45,

    maximumRecentInterventions: 6,

    maximumRecentHighFrictionInterventions: 2,

    cooldownMinutes: 20,

    requiresExplicitApproval: false
  },

  silent_adjustment: {
    type: "silent_adjustment",

    minimumScore: 0.45,

    maximumInterruptionCost: 0.2,

    maximumRecentInterventions: 20,

    maximumRecentHighFrictionInterventions: 10,

    cooldownMinutes: 5,

    requiresExplicitApproval: false
  },

  focus_protection: {
    type: "focus_protection",

    minimumScore: 0.5,

    maximumInterruptionCost: 0.1,

    maximumRecentInterventions: 20,

    maximumRecentHighFrictionInterventions: 10,

    cooldownMinutes: 5,

    requiresExplicitApproval: false
  },

  none: {
    type: "none",

    minimumScore: 1,

    maximumInterruptionCost: 0,

    maximumRecentInterventions: 0,

    maximumRecentHighFrictionInterventions: 0,

    cooldownMinutes: 0,

    requiresExplicitApproval: false
  }
};
