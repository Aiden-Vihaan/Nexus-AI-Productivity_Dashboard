export class EventBusError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EventBusError";
  }
}

export class EventValidationError extends EventBusError {
  constructor(message: string) {
    super(message);
    this.name = "EventValidationError";
  }
}

export class DuplicateEventError extends EventBusError {
  constructor(eventId: string) {
    super(`Event has already been processed: ${eventId}`);
    this.name = "DuplicateEventError";
  }
}
