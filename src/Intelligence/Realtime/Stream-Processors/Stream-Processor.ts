import { NexusEvent } from "../realtime-types/event";

export interface StreamProcessor<TInput = unknown, TOutput = unknown> {
  process(
    event: NexusEvent<TInput>
  ): Promise<NexusEvent<TOutput> | null>;
}
