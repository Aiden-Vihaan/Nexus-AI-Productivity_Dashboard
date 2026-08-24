import { NexusEvent } from "../realtime-types/event";
import { IntelligenceProcessor } from "./processor";

export class ProcessorRegistry {
  private readonly processors: IntelligenceProcessor[] =
    [];

  register(
    processor: IntelligenceProcessor
  ): void {
    const alreadyRegistered =
      this.processors.some(
        (item) =>
          item.name === processor.name
      );

    if (alreadyRegistered) {
      return;
    }

    this.processors.push(processor);
  }

  findProcessors(
    event: NexusEvent
  ): IntelligenceProcessor[] {
    return this.processors.filter(
      (processor) =>
        processor.supports(event)
    );
  }

  getAll(): IntelligenceProcessor[] {
    return [...this.processors];
  }

  size(): number {
    return this.processors.length;
  }
}
