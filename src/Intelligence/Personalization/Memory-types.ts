export type MemoryCategory =
  | "preference"
  | "behavior"
  | "routine"
  | "goal"
  | "constraint"
  | "interaction"
  | "workflow"
  | "contextual";

export type MemoryStatus =
  | "candidate"
  | "active"
  | "expired"
  | "superseded"
  | "rejected"
  | "archived";

export type MemorySource =
  | "explicit"
  | "observed"
  | "inferred"
  | "adaptation";

export interface UserMemory {
  id: string;

  userId: string;

  category: MemoryCategory;

  key: string;

  value: unknown;

  source: MemorySource;

  confidence: number;

  importance: number;

  relevance: number;

  status: MemoryStatus;

  observationCount: number;

  createdAt: string;

  updatedAt: string;

  lastObservedAt: string;

  expiresAt?: string;

  metadata?: Record<string, unknown>;
}

export interface MemoryObservation {
  id: string;

  memoryKey: string;

  value: unknown;

  confidence: number;

  observedAt: string;

  source: MemorySource;

  context?: Record<string, unknown>;
}

export interface MemoryRetrievalQuery {
  userId: string;

  category?: MemoryCategory;

  key?: string;

  context?: Record<string, unknown>;

  minimumConfidence?: number;

  limit?: number;
}

export interface MemoryRetrievalResult {
  memory: UserMemory;

  score: number;

  reason: string;
}

export interface MemoryUpdate {
  memoryId: string;

  previousValue: unknown;

  newValue: unknown;

  confidence: number;

  reason: string;

  updatedAt: string;
}
