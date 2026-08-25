export class LearningError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "LearningError";
  }
}

export class InsufficientEvidenceError
  extends LearningError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "InsufficientEvidenceError";
  }
}

export class UnsafeAdaptationError
  extends LearningError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "UnsafeAdaptationError";
  }
}
