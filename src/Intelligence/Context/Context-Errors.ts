export class ContextError
  extends Error {
  constructor(message: string) {
    super(message);

    this.name =
      "ContextError";
  }
}

export class ContextNotFoundError
  extends ContextError {
  constructor(
    userId: string
  ) {
    super(
      `Context not found for user "${userId}"`
    );

    this.name =
      "ContextNotFoundError";
  }
}
