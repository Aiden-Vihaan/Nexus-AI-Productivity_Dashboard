import { IdempotencyStore } from "./idempotency-store";

export class InMemoryIdempotencyStore
  implements IdempotencyStore
{
  private readonly processedEvents = new Map<string, string>();

  async hasProcessed(eventId: string): Promise<boolean> {
    return this.processedEvents.has(eventId);
  }

  async markProcessed(
    eventId: string,
    processedAt: string = new Date().toISOString()
  ): Promise<void> {
    this.processedEvents.set(eventId, processedAt);
  }

  size(): number {
    return this.processedEvents.size;
  }

  clear(): void {
    this.processedEvents.clear();
  }
}
