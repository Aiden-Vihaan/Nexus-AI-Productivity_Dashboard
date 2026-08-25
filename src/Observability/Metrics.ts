export interface Counter {
  name: string;

  value: number;
}

export class MetricsRegistry {
  private readonly counters =
    new Map<
      string,
      number
    >();

  increment(
    name: string,
    amount = 1
  ): void {
    const current =
      this.counters.get(
        name
      ) || 0;

    this.counters.set(
      name,
      current + amount
    );
  }

  get(
    name: string
  ): number {
    return (
      this.counters.get(
        name
      ) || 0
    );
  }

  snapshot(): Counter[] {
    return Array.from(
      this.counters.entries()
    ).map(
      ([name, value]) => ({
        name,
        value
      })
    );
  }
}
