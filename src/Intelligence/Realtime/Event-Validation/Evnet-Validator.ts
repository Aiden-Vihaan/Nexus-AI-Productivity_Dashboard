import { NexusEvent } from "../realtime-types/event";
import { EventValidationError } from "../event-bus/event-bus-errors";

export function validateNexusEvent<TPayload>(
  event: NexusEvent<TPayload>
): void {
  if (!event.eventId) {
    throw new EventValidationError("eventId is required");
  }

  if (!event.eventType) {
    throw new EventValidationError("eventType is required");
  }

  if (!event.eventVersion) {
    throw new EventValidationError("eventVersion is required");
  }

  if (!event.timestamp) {
    throw new EventValidationError("timestamp is required");
  }

  if (!event.source) {
    throw new EventValidationError("source is required");
  }

  if (!event.traceId) {
    throw new EventValidationError("traceId is required");
  }

  if (!event.entityId) {
    throw new EventValidationError("entityId is required");
  }

  if (!event.metadata) {
    throw new EventValidationError("metadata is required");
  }
}
