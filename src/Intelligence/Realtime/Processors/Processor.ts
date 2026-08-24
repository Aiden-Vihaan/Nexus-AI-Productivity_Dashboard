import { NexusEvent } from "../realtime-types/event";

export interface ProcessorResult {
  processed: boolean;
  emittedEvents: NexusEvent[];
  metadata?: Record<string, unknown>;
}

export interface IntelligenceProcessor {
  readonly name: string;

  supports(event: NexusEvent): boolean;

  process(
    event: NexusEvent
  ): Promise<ProcessorResult>;
}
