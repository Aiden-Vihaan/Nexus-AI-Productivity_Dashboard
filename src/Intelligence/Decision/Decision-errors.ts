export class DecisionError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "DecisionError";
  }
}

export class InvalidDecisionRequestError
  extends DecisionError {
  constructor() {
    super(
      "Invalid decision request."
    );

    this.name =
      "InvalidDecisionRequestError";
  }
}

export class DecisionPolicyError
  extends DecisionError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "DecisionPolicyError";
  }
}
