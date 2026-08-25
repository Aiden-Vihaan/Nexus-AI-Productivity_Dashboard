export class PersonalizationError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "PersonalizationError";
  }
}

export class MemoryConflictError
  extends PersonalizationError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "MemoryConflictError";
  }
}

export class MemoryLimitError
  extends PersonalizationError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "MemoryLimitError";
  }
}
