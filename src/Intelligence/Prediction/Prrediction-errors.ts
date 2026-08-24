export class PredictionError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "PredictionError";
  }
}

export class InvalidPredictionContextError
  extends PredictionError {
  constructor() {
    super(
      "Invalid prediction context."
    );

    this.name =
      "InvalidPredictionContextError";
  }
}
