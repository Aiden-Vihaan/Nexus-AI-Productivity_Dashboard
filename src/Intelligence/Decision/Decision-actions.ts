import {
  DecisionType,
  InterventionType
} from "./decision-types";

export interface DecisionAction {
  type: DecisionType;

  intervention: InterventionType;

  title: string;

  description: string;
}

export const decisionActions: Record<
  Exclude<DecisionType, "no_action">,
  DecisionAction
> = {
  suggest_break: {
    type: "suggest_break",

    intervention: "inline_suggestion",

    title: "Consider a short reset",

    description:
      "NEXUS believes a short recovery period may help maintain sustainable focus."
  },

  protect_focus: {
    type: "protect_focus",

    intervention: "silent_adjustment",

    title: "Protect focus",

    description:
      "NEXUS should reduce unnecessary interruptions while the user is in a high-value focus state."
  },

  prioritize_task: {
    type: "prioritize_task",

    intervention: "dashboard_signal",

    title: "Prioritize the active task",

    description:
      "NEXUS should emphasize the task currently receiving focused attention."
  },

  reduce_context_switching: {
    type: "reduce_context_switching",

    intervention: "dashboard_signal",

    title: "Reduce context switching",

    description:
      "NEXUS should encourage consolidation of the user's current work."
  },

  prepare_for_completion: {
    type: "prepare_for_completion",

    intervention: "dashboard_signal",

    title: "Prepare for completion",

    description:
      "NEXUS should make completion-related actions more visible."
  }
};
