import { NexusEvent } from "../realtime-types/event";
import { NexusEventType } from "../realtime-types/event-types";
import { createNexusEvent } from "../event-factory/event-factory";
import {
  IntelligenceProcessor,
  ProcessorResult
} from "./processor";

interface TaskPayload {
  taskId: string;
  title?: string;
  priority?: string;
  status?: string;
  estimatedMinutes?: number;
  actualMinutes?: number;
}

export class TaskEventProcessor
  implements IntelligenceProcessor
{
  readonly name = "task-event-processor";

  supports(event: NexusEvent): boolean {
    return [
      NexusEventType.TASK_CREATED,
      NexusEventType.TASK_UPDATED,
      NexusEventType.TASK_STARTED,
      NexusEventType.TASK_COMPLETED,
      NexusEventType.TASK_DEFERRED,
      NexusEventType.TASK_ABANDONED
    ].includes(
      event.eventType as NexusEventType
    );
  }

  async process(
    event: NexusEvent
  ): Promise<ProcessorResult> {
    const payload =
      event.payload as TaskPayload;

    const emittedEvents: NexusEvent[] = [];

    if (
      event.eventType ===
      NexusEventType.TASK_COMPLETED
    ) {
      emittedEvents.push(
        createNexusEvent({
          eventType:
            NexusEventType.PREDICTION_REQUESTED,
          source: this.name,
          entityId: payload.taskId,
          traceId: event.traceId,
          payload: {
            reason: "task_completed",
            taskId: payload.taskId
          },
          metadata: {
            parentEventId: event.eventId
          }
        })
      );
    }

    if (
      event.eventType ===
      NexusEventType.TASK_STARTED
    ) {
      emittedEvents.push(
        createNexusEvent({
          eventType:
            NexusEventType.CONTEXT_UPDATED,
          source: this.name,
          entityId: payload.taskId,
          traceId: event.traceId,
          payload: {
            activeTaskId: payload.taskId,
            taskTitle: payload.title,
            status: "focused"
          },
          metadata: {
            parentEventId: event.eventId
          }
        })
      );
    }

    return {
      processed: true,
      emittedEvents,
      metadata: {
        eventType: event.eventType,
        taskId: payload.taskId
      }
    };
  }
}
