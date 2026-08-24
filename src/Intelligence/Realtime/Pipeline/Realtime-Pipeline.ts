import { NexusEvent } from "../realtime-types/event";
import { EventBus } from "../event-bus/event-bus";
import { ProcessorRegistry } from "../processors/processor-registry";

export interface PipelineResult {
  eventId: string;
  processorCount: number;
  emittedEventCount: number;
  processorNames: string[];
}

export class RealtimePipeline {
  constructor(
    private readonly eventBus: EventBus,
    private readonly registry: ProcessorRegistry
  ) {}

  async process(
    event: NexusEvent
  ): Promise<PipelineResult> {
    const processors =
      this.registry.findProcessors(event);

    let emittedEventCount = 0;

    for (const processor of processors) {
      const result =
        await processor.process(event);

      for (
        const emittedEvent
        of result.emittedEvents
      ) {
        emittedEventCount += 1;

        await this.eventBus.publish(
          this.resolveTopic(emittedEvent),
          emittedEvent
        );
      }
    }

    return {
      eventId: event.eventId,
      processorCount: processors.length,
      emittedEventCount,
      processorNames:
        processors.map(
          (processor) => processor.name
        )
    };
  }

  private resolveTopic(
    event: NexusEvent
  ): string {
    return `nexus.${event.eventType.toLowerCase()}`;
  }
}
