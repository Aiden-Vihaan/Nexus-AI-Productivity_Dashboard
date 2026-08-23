export interface NexusEvent<TPayload = unknown> {
  eventId: string;
  eventType: string;
  eventVersion: number;
  timestamp: string;
  source: string;
  traceId: string;
  entityId: string;
  payload: TPayload;
  metadata?: Record<string, unknown>;
}
