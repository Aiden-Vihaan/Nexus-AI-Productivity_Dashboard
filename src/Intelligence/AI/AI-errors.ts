export class AIOrchestrationError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "AIOrchestrationError";
  }
}

export class AIProviderError
  extends AIOrchestrationError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "AIProviderError";
  }
}

export class AIValidationError
  extends AIOrchestrationError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "AIValidationError";
  }
}
