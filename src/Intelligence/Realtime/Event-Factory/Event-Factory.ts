import { randomUUID } from "crypto";
import { NexusEvent } from "../realtime-types/event";

interface CreateEventOptions<TPayload> {
  eventType: string;
  source: string;
  entityId: string;
  payload: TPayload;
  traceId?: string;
  metadata?: Record<string, unknown>;
  eventVersion?: number;
}

export function createNexusEvent<TPayload>(
  options: CreateEventOptions<TPayload>
): NexusEvent<TPayload> {
  return {
    eventId: randomUUID(),
    eventType: options.eventType,
    eventVersion: options.eventVersion ?? 1,
    timestamp: new Date().toISOString(),
    source: options.source,
    traceId: options.traceId ?? randomUUID(),
    entityId: options.entityId,
    payload: options.payload,
    metadata: options.metadata ?? {}
  };
}
