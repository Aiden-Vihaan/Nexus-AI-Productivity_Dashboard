export type PredictionType =
  | "task_completion"
  | "task_delay"
  | "context_switch"
  | "focus_loss"
  | "session_completion"
  | "break_needed"
  | "workload_increase";

export type PredictionPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export interface PredictionEvidence {
  factor: string;
  weight: number;
  description: string;
}

export interface Prediction {
  id: string;

  userId: string;

  type: PredictionType;

  title: string;

  description: string;

  probability: number;

  confidence: number;

  priority: PredictionPriority;

  horizonMinutes: number;

  evidence: PredictionEvidence[];

  createdAt: string;

  expiresAt: string;
}

export interface PredictionRequest {
  userId: string;

  context: UserContextSnapshot;
}

export interface UserContextSnapshot {
  userId: string;

  focus: string;

  workload: string;

  session: string;

  activeTask:
    | {
        taskId: string;
        title?: string;
      }
    | undefined;

  confidence: number;

  recentActivityCount: number;

  capturedAt: string;

  version: number;
}
