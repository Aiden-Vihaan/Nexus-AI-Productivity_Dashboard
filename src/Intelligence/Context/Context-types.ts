export type FocusState =
  | "idle"
  | "starting"
  | "focused"
  | "distracted"
  | "paused"
  | "completed";

export type WorkloadState =
  | "light"
  | "balanced"
  | "heavy"
  | "overloaded"
  | "unknown";

export type SessionState =
  | "inactive"
  | "active"
  | "paused"
  | "ended";

export interface ActiveTaskContext {
  taskId: string;
  title?: string;
  startedAt: string;
  estimatedMinutes?: number;
  priority?: string;
}

export interface RecentActivity {
  eventType: string;
  timestamp: string;
  entityId?: string;
}

export interface ContextConfidence {
  score: number;
  factors: string[];
  calculatedAt: string;
}

export interface UserContextState {
  userId: string;

  focusState: FocusState;

  workloadState: WorkloadState;

  sessionState: SessionState;

  activeTask?: ActiveTaskContext;

  recentActivity: RecentActivity[];

  confidence: ContextConfidence;

  updatedAt: string;

  version: number;
}
