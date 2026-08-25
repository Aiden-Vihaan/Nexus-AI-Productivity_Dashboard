import {
  DashboardIntervention
} from "../dashboard/dashboard-types";

export interface InterventionView {
  id: string;

  title: string;

  type: DashboardIntervention["type"];

  priority: DashboardIntervention["priority"];

  confidencePercent: number;

  reason: string;

  requiresConfirmation: boolean;
}

export function createInterventionView(
  intervention: DashboardIntervention
): InterventionView {
  return {
    id:
      intervention.id,

    title:
      intervention.title,

    type:
      intervention.type,

    priority:
      intervention.priority,

    confidencePercent:
      Math.round(
        intervention.confidence * 100
      ),

    reason:
      intervention.reason,

    requiresConfirmation:
      intervention.priority ===
      "high"
  };
}
