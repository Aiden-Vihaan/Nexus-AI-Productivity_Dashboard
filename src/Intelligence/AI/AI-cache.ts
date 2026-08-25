export interface AICacheEntry {
  key: string;

  value: unknown;

  expiresAt: number;
}

export class AICache {
  private readonly entries =
    new Map<
      string,
      AICacheEntry
    >();

  set(
    key: string,
    value: unknown,
    ttlMs: number
  ): void {
    this.entries.set(
      key,
      {
        key,

        value,

        expiresAt:
          Date.now() +
          ttlMs
      }
    );
  }

  get<T>(
    key: string
  ): T | null {
    const entry =
      this.entries.get(
        key
      );

    if (!entry) {
      return null;
    }

    if (
      entry.expiresAt <=
      Date.now()
    ) {
      this.entries.delete(
        key
      );

      return null;
    }

    return entry.value as T;
  }

  delete(
    key: string
  ): void {
    this.entries.delete(
      key
    );
  }

  clear(): void {
    this.entries.clear();
  }
}
