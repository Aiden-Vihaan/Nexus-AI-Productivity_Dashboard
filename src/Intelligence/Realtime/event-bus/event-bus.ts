import { NexusEvent } from "../realtime-types/event";

export type EventHandler<TPayload = unknown> = (
  event: NexusEvent<TPayload>
) => Promise<void>;

export interface EventBus {
  publish<TPayload>(
    topic: string,
    event: NexusEvent<TPayload>
  ): Promise<void>;

  subscribe<TPayload>(
    topic: string,
    handler: EventHandler<TPayload>
  ): Promise<() => void>;

  getSubscriberCount(topic: string): number;
}
