export class InterventionError
  extends Error {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "InterventionError";
  }
}

export class InterventionExpiredError
  extends InterventionError {
  constructor() {
    super(
      "Intervention has expired."
    );

    this.name =
      "InterventionExpiredError";
  }
}

export class InterventionBudgetExceededError
  extends InterventionError {
  constructor() {
    super(
      "Intervention budget exceeded."
    );

    this.name =
      "InterventionBudgetExceededError";
  }
}

export class InterventionExecutionError
  extends InterventionError {
  constructor(
    message: string
  ) {
    super(message);

    this.name =
      "InterventionExecutionError";
  }
}
