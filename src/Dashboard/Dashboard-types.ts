export interface DashboardTask {
  id: string;

  title: string;

  status:
    | "todo"
    | "in-progress"
    | "completed"
    | "blocked";

  priority:
    | "low"
    | "medium"
    | "high"
    | "critical";

  estimatedMinutes: number;

  dueAt?: string;

  energyRequired:
    | "low"
    | "medium"
    | "high";
}

export interface DashboardPrediction {
  id: string;

  title: string;

  probability: number;

  confidence: number;

  horizon:
    | "short"
    | "medium"
    | "long";

  explanation: string;

  recommendedAction?: string;
}

export interface DashboardIntervention {
  id: string;

  title: string;

  type:
    | "nudge"
    | "schedule"
    | "focus"
    | "break"
    | "replan";

  priority:
    | "low"
    | "medium"
    | "high";

  confidence: number;

  reason: string;
}

export interface DashboardMemory {
  id: string;

  category:
    | "preference"
    | "habit"
    | "pattern"
    | "context"
    | "goal";

  summary: string;

  confidence: number;
}

export interface DashboardInsight {
  id: string;

  title: string;

  description: string;

  type:
    | "pattern"
    | "prediction"
    | "recommendation"
    | "risk"
    | "achievement";

  confidence: number;

  createdAt: string;
}

export interface DashboardState {
  userId: string;

  generatedAt: string;

  productivityScore: number;

  focusScore: number;

  energyScore: number;

  cognitiveLoad: number;

  tasks: DashboardTask[];

  predictions: DashboardPrediction[];

  interventions: DashboardIntervention[];

  memories: DashboardMemory[];

  insights: DashboardInsight[];
}
