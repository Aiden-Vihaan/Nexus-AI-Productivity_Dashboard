import { NexusEvent } from "../realtime-types/event";

export interface EventBus {
  publish<TPayload>(
    topic: string,
    event: NexusEvent<TPayload>
  ): Promise<void>;

  subscribe<TPayload>(
    topic: string,
    handler: (event: NexusEvent<TPayload>) => Promise<void>
  ): Promise<void>;
}
