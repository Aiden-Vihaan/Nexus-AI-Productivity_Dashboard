import {
  UserMemory,
  MemoryRetrievalResult
} from "./memory-types";

export interface PersonalizationProfile {
  userId: string;

  memories: UserMemory[];

  activeMemoryCount: number;

  averageConfidence: number;

  lastUpdatedAt: string;
}

export interface PersonalizationContext {
  userId: string;

  context: Record<string, unknown>;

  relevantMemories: MemoryRetrievalResult[];

  generatedAt: string;
}

export interface PersonalizationSignal {
  key: string;

  value: unknown;

  confidence: number;

  source:
    | "memory"
    | "behavior"
    | "adaptation";
}

export interface PersonalizationDecision {
  userId: string;

  signals: PersonalizationSignal[];

  confidence: number;

  reason: string;

  generatedAt: string;
}
