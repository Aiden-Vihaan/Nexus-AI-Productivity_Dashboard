export type AIProvider =
  | "openai"
  | "anthropic"
  | "google"
  | "local"
  | "mock";

export type AIRequestType =
  | "summarization"
  | "classification"
  | "recommendation"
  | "planning"
  | "reflection"
  | "semantic_analysis"
  | "decision_support";

export type AIConfidenceLevel =
  | "very_low"
  | "low"
  | "medium"
  | "high"
  | "very_high";

export interface AIMessage {
  role:
    | "system"
    | "user"
    | "assistant";

  content: string;
}

export interface AIRequest {
  id: string;

  userId: string;

  type: AIRequestType;

  messages: AIMessage[];

  context?: Record<string, unknown>;

  temperature?: number;

  maxTokens?: number;

  metadata?: Record<string, unknown>;
}

export interface AIResponse {
  requestId: string;

  provider: AIProvider;

  model: string;

  content: string;

  structured?: Record<string, unknown>;

  confidence: number;

  confidenceLevel:
    AIConfidenceLevel;

  latencyMs: number;

  cached: boolean;

  createdAt: string;

  metadata?: Record<string, unknown>;
}

export interface AIUsage {
  inputTokens: number;

  outputTokens: number;

  totalTokens: number;

  estimatedCost?: number;
}

export interface AIProviderResponse {
  content: string;

  usage?: AIUsage;

  model: string;

  finishReason?: string;

  metadata?: Record<string, unknown>;
}
