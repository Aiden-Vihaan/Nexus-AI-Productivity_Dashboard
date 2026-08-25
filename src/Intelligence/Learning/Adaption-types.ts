import {
  LearningCandidate
} from "./learning-types";

export type AdaptationStatus =
  | "proposed"
  | "approved"
  | "applied"
  | "rejected"
  | "rolled_back";

export interface Adaptation {
  id: string;

  candidateId: string;

  userId: string;

  target: string;

  previousValue: number;

  newValue: number;

  status: AdaptationStatus;

  reason: string;

  confidence: number;

  createdAt: string;

  appliedAt?: string;

  rolledBackAt?: string;
}

export interface AdaptationResult {
  applied: boolean;

  adaptation: Adaptation;

  reason?: string;
}

export interface AdaptationPolicy {
  minimumSampleSize: number;

  minimumConfidence: number;

  minimumEffectiveness: number;

  minimumScore: number;

  maximumChange: number;
}
