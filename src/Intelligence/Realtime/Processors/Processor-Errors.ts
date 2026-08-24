export class ProcessorError extends Error {
  constructor(
    message: string,
    public readonly processorName?: string
  ) {
    super(message);
    this.name = "ProcessorError";
  }
}

export class UnsupportedEventError extends ProcessorError {
  constructor(
    processorName: string,
    eventType: string
  ) {
    super(
      `Processor "${processorName}" does not support event type "${eventType}"`,
      processorName
    );

    this.name = "UnsupportedEventError";
  }
}
