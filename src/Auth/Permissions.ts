import {
  UserRole
} from "./auth-types";

const ROLE_PERMISSIONS:
  Record<
    UserRole,
    string[]
  > = {
    user: [
      "tasks:read",
      "tasks:create",
      "tasks:update",
      "tasks:delete",
      "intelligence:read",
      "memory:read",
      "memory:create",
      "intervention:read",
      "intervention:execute"
    ],

    admin: [
      "*"
    ],

    system: [
      "system:execute",
      "intelligence:execute"
    ]
  };

export function hasPermission(
  role: UserRole,
  permission: string
): boolean {
  const permissions =
    ROLE_PERMISSIONS[
      role
    ];

  return (
    permissions.includes(
      "*"
    ) ||
    permissions.includes(
      permission
    )
  );
}
