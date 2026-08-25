import {
  AuthenticatedUser
} from "./auth-types";

import {
  hasPermission
} from "./permissions";

import {
  AuthorizationError
} from "../api/api-error";

export function requirePermission(
  user:
    | AuthenticatedUser
    | undefined,
  permission: string
): void {
  if (!user) {
    throw new AuthorizationError(
      "Authenticated user required."
    );
  }

  if (!user.active) {
    throw new AuthorizationError(
      "User account is inactive."
    );
  }

  if (
    !hasPermission(
      user.role,
      permission
    )
  ) {
    throw new AuthorizationError(
      `Missing permission: ${permission}`
    );
  }
}
