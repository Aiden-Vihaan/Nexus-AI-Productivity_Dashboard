import {
  Prediction,
  UserContextSnapshot
} from "../prediction";

export type DecisionType =
  | "suggest_break"
  | "protect_focus"
  | "prioritize_task"
  | "reduce_context_switching"
  | "prepare_for_completion"
  | "no_action";

export type DecisionPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type InterventionType =
  | "notification"
  | "dashboard_signal"
  | "inline_suggestion"
  | "silent_adjustment"
  | "none";

export interface DecisionEvidence {
  factor: string;
  contribution: number;
  explanation: string;
}

export interface Decision {
  id: string;

  userId: string;

  type: DecisionType;

  priority: DecisionPriority;

  intervention: InterventionType;

  title: string;

  description: string;

  rationale: string;

  score: number;

  confidence: number;

  urgency: number;

  userImpact: number;

  interventionCost: number;

  predictionId: string;

  evidence: DecisionEvidence[];

  createdAt: string;

  expiresAt: string;
}

export interface DecisionRequest {
  userId: string;

  predictions: Prediction[];

  context: UserContextSnapshot;

  recentDecisionTypes?: DecisionType[];

  lastInterventionAt?: string;
}

export interface DecisionPolicy {
  type: DecisionType;

  minimumPredictionProbability: number;

  minimumConfidence: number;

  maximumInterventionCost: number;

  minimumDecisionScore: number;

  cooldownMinutes: number;
}

export interface DecisionResult {
  decisions: Decision[];

  generatedAt: string;

  contextVersion: number;
}
