import { NexusEvent } from "../realtime-types/event";
import { NexusEventType } from "../realtime-types/event-types";
import {
  IntelligenceProcessor,
  ProcessorResult
} from "./processor";

export class ContextEventProcessor
  implements IntelligenceProcessor
{
  readonly name =
    "context-event-processor";

  supports(event: NexusEvent): boolean {
    return [
      NexusEventType.CONTEXT_UPDATED,
      NexusEventType.SESSION_STARTED,
      NexusEventType.SESSION_ENDED,
      NexusEventType.FOCUS_CHANGED
    ].includes(
      event.eventType as NexusEventType
    );
  }

  async process(
    event: NexusEvent
  ): Promise<ProcessorResult> {
    return {
      processed: true,
      emittedEvents: [],
      metadata: {
        contextEventType:
          event.eventType,
        entityId: event.entityId,
        traceId: event.traceId
      }
    };
  }
}
