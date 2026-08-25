export type OutcomeType =
  | "accepted"
  | "dismissed"
  | "ignored"
  | "deferred"
  | "completed"
  | "expired"
  | "improved"
  | "declined"
  | "neutral";

export type OutcomeSource =
  | "user_action"
  | "behavioral_signal"
  | "system_signal"
  | "automatic";

export type OutcomeStatus =
  | "pending"
  | "observed"
  | "classified"
  | "aggregated"
  | "failed";

export type OutcomeEffect =
  | "positive"
  | "negative"
  | "neutral"
  | "unknown";

export interface OutcomeSignal {
  name: string;

  value: number;

  baseline?: number;

  direction:
    | "increase"
    | "decrease"
    | "stable";

  confidence: number;
}

export interface Outcome {
  id: string;

  userId: string;

  interventionId: string;

  decisionId: string;

  type: OutcomeType;

  source: OutcomeSource;

  status: OutcomeStatus;

  effect: OutcomeEffect;

  score: number;

  confidence: number;

  signals: OutcomeSignal[];

  observedAt: string;

  classifiedAt?: string;

  metadata?: Record<string, unknown>;
}

export interface OutcomeObservation {
  userId: string;

  interventionId: string;

  decisionId: string;

  type: OutcomeType;

  source: OutcomeSource;

  signals: OutcomeSignal[];

  observedAt: string;

  metadata?: Record<string, unknown>;
}

export interface OutcomeResult {
  outcome: Outcome;

  accepted: boolean;

  reason?: string;
}

export interface FeedbackSummary {
  userId: string;

  interventionType: string;

  sampleSize: number;

  positiveOutcomes: number;

  negativeOutcomes: number;

  neutralOutcomes: number;

  averageScore: number;

  averageConfidence: number;

  effectiveness: number;

  updatedAt: string;
}
