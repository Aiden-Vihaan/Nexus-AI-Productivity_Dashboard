import {
  EventBus,
  EventHandler
} from "./event-bus";

import { NexusEvent } from "../realtime-types/event";
import { validateNexusEvent } from "../event-validation/event-validator";

interface Subscription {
  handler: EventHandler;
}

export class InMemoryEventBus implements EventBus {
  private readonly subscribers = new Map<
    string,
    Set<Subscription>
  >();

  async publish<TPayload>(
    topic: string,
    event: NexusEvent<TPayload>
  ): Promise<void> {
    validateNexusEvent(event);

    const topicSubscribers = this.subscribers.get(topic);

    if (!topicSubscribers || topicSubscribers.size === 0) {
      return;
    }

    await Promise.all(
      Array.from(topicSubscribers).map(
        async ({ handler }) => {
          await handler(event);
        }
      )
    );
  }

  async subscribe<TPayload>(
    topic: string,
    handler: EventHandler<TPayload>
  ): Promise<() => void> {
    if (!this.subscribers.has(topic)) {
      this.subscribers.set(topic, new Set());
    }

    const subscription: Subscription = {
      handler
    };

    this.subscribers
      .get(topic)!
      .add(subscription);

    return () => {
      this.subscribers
        .get(topic)
        ?.delete(subscription);
    };
  }

  getSubscriberCount(topic: string): number {
    return this.subscribers.get(topic)?.size ?? 0;
  }
}
