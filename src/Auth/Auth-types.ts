export type UserRole =
  | "user"
  | "admin"
  | "system";

export interface AuthenticatedUser {
  id: string;

  role: UserRole;

  email?: string;

  active: boolean;
}

export interface Session {
  id: string;

  userId: string;

  createdAt: string;

  expiresAt: string;

  revoked: boolean;
}

export interface Permission {
  resource: string;

  action:
    | "read"
    | "create"
    | "update"
    | "delete"
    | "execute";
}
