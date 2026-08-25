import {
  InterventionPayload,
  InterventionType
} from "./intervention-types";

export interface InterventionAction {
  type: InterventionType;

  defaultPayload: InterventionPayload;

  interruptionCost: number;
}

export const interventionActions: Record<
  InterventionType,
  InterventionAction
> = {
  notification: {
    type: "notification",

    defaultPayload: {
      title: "NEXUS insight",

      message:
        "NEXUS detected something that may be useful."
    },

    interruptionCost: 0.8
  },

  dashboard_signal: {
    type: "dashboard_signal",

    defaultPayload: {
      title: "NEXUS signal",

      message:
        "A new productivity signal is available."
    },

    interruptionCost: 0.35
  },

  inline_suggestion: {
    type: "inline_suggestion",

    defaultPayload: {
      title: "NEXUS suggestion",

      message:
        "A small adjustment may improve your current workflow.",

      actionLabel:
        "Review suggestion"
    },

    interruptionCost: 0.3
  },

  silent_adjustment: {
    type: "silent_adjustment",

    defaultPayload: {
      title:
        "NEXUS adjusted your workspace",

      message:
        "The workspace was quietly optimized for your current state."
    },

    interruptionCost: 0.05
  },

  focus_protection: {
    type: "focus_protection",

    defaultPayload: {
      title:
        "Focus protected",

      message:
        "Non-essential interruptions have been reduced."
    },

    interruptionCost: 0.02
  },

  none: {
    type: "none",

    defaultPayload: {
      title: "",

      message: ""
    },

    interruptionCost: 0
  }
};
