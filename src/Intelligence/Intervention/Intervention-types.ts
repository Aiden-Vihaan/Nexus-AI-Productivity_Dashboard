export type InterventionType =
  | "notification"
  | "dashboard_signal"
  | "inline_suggestion"
  | "silent_adjustment"
  | "focus_protection"
  | "none";

export type InterventionStatus =
  | "pending"
  | "approved"
  | "executing"
  | "delivered"
  | "dismissed"
  | "expired"
  | "failed"
  | "cancelled";

export type InterventionPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export interface InterventionPayload {
  title: string;

  message: string;

  actionLabel?: string;

  secondaryActionLabel?: string;

  metadata?: Record<
    string,
    unknown
  >;
}

export interface Intervention {
  id: string;

  userId: string;

  decisionId: string;

  type: InterventionType;

  priority: InterventionPriority;

  status: InterventionStatus;

  payload: InterventionPayload;

  score: number;

  interruptionCost: number;

  createdAt: string;

  expiresAt: string;

  deliveredAt?: string;

  dismissedAt?: string;
}

export interface InterventionRequest {
  userId: string;

  decisionId: string;

  type: InterventionType;

  priority: InterventionPriority;

  score: number;

  interruptionCost: number;

  payload: InterventionPayload;

  expiresAt: string;

  recentInterventionCount: number;

  recentHighFrictionCount: number;

  lastInterventionAt?: string;
}

export interface InterventionResult {
  intervention: Intervention;

  accepted: boolean;

  reason?: string;

  generatedAt: string;
}
