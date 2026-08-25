export type LearningSignalType =
  | "positive_outcome"
  | "negative_outcome"
  | "intervention_effectiveness"
  | "user_preference"
  | "behavioral_pattern"
  | "prediction_error";

export type LearningStatus =
  | "observed"
  | "evaluating"
  | "eligible"
  | "applied"
  | "rejected"
  | "rolled_back";

export type LearningDirection =
  | "increase"
  | "decrease"
  | "maintain";

export interface LearningSignal {
  id: string;

  type: LearningSignalType;

  source: string;

  value: number;

  confidence: number;

  observedAt: string;

  metadata?: Record<string, unknown>;
}

export interface LearningEvidence {
  id: string;

  userId: string;

  interventionType: string;

  signals: LearningSignal[];

  sampleSize: number;

  averageConfidence: number;

  effectiveness: number;

  consistency: number;

  createdAt: string;
}

export interface LearningCandidate {
  id: string;

  userId: string;

  target: string;

  currentValue: number;

  proposedValue: number;

  direction: LearningDirection;

  evidence: LearningEvidence;

  score: number;

  confidence: number;

  status: LearningStatus;

  reason: string;

  createdAt: string;
}

export interface LearningDecision {
  candidateId: string;

  approved: boolean;

  reason: string;

  score: number;

  confidence: number;

  decidedAt: string;
}
