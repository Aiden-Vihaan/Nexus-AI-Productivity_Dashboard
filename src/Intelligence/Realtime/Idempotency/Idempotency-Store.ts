export interface IdempotencyStore {
  hasProcessed(eventId: string): Promise<boolean>;

  markProcessed(
    eventId: string,
    processedAt?: string
  ): Promise<void>;
}
