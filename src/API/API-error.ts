export class APIError
  extends Error {
  readonly statusCode: number;

  readonly code: string;

  constructor(
    message: string,
    code: string,
    statusCode = 500
  ) {
    super(message);

    this.name =
      "APIError";

    this.code =
      code;

    this.statusCode =
      statusCode;
  }
}

export class ValidationError
  extends APIError {
  constructor(
    message: string
  ) {
    super(
      message,
      "VALIDATION_ERROR",
      400
    );
  }
}

export class AuthenticationError
  extends APIError {
  constructor(
    message =
      "Authentication required."
  ) {
    super(
      message,
      "AUTHENTICATION_REQUIRED",
      401
    );
  }
}

export class AuthorizationError
  extends APIError {
  constructor(
    message =
      "You are not authorized to perform this action."
  ) {
    super(
      message,
      "FORBIDDEN",
      403
    );
  }
}

export class NotFoundError
  extends APIError {
  constructor(
    message =
      "Resource not found."
  ) {
    super(
      message,
      "NOT_FOUND",
      404
    );
  }
}
