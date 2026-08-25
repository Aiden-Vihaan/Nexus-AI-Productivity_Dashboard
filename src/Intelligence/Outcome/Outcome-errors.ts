export class OutcomeError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "OutcomeError";
  }
}

export class InvalidOutcomeError
  extends OutcomeError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "InvalidOutcomeError";
  }
}

export class OutcomeStoreError
  extends OutcomeError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "OutcomeStoreError";
  }
}
