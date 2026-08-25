interface RateLimitEntry {
  count: number;

  resetAt: number;
}

export class RateLimiter {
  private readonly entries =
    new Map<
      string,
      RateLimitEntry
    >();

  constructor(
    private readonly windowMs:
      number = 60_000,

    private readonly maxRequests:
      number = 100
  ) {}

  check(
    key: string
  ): {
    allowed: boolean;

    remaining: number;

    resetAt: number;
  } {
    const now =
      Date.now();

    const existing =
      this.entries.get(
        key
      );

    if (
      !existing ||
      existing.resetAt <= now
    ) {
      const entry = {
        count: 1,

        resetAt:
          now +
          this.windowMs
      };

      this.entries.set(
        key,
        entry
      );

      return {
        allowed: true,

        remaining:
          this.maxRequests -
          1,

        resetAt:
          entry.resetAt
      };
    }

    existing.count += 1;

    return {
      allowed:
        existing.count <=
        this.maxRequests,

      remaining:
        Math.max(
          0,
          this.maxRequests -
            existing.count
        ),

      resetAt:
        existing.resetAt
    };
  }
}
