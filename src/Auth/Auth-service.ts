import {
  AuthenticatedUser
} from "./auth-types";

import {
  SessionStore
} from "./session";

export class AuthService {
  constructor(
    private readonly sessions:
      SessionStore =
      new SessionStore()
  ) {}

  createSession(
    user: AuthenticatedUser
  ) {
    if (!user.active) {
      throw new Error(
        "Inactive users cannot create sessions."
      );
    }

    return this.sessions.create(
      user.id
    );
  }

  validateSession(
    sessionId: string
  ): AuthenticatedUser | null {
    const session =
      this.sessions.get(
        sessionId
      );

    if (!session) {
      return null;
    }

    return {
      id:
        session.userId,

      role:
        "user",

      active:
        true
    };
  }

  revokeSession(
    sessionId: string
  ): void {
    this.sessions.revoke(
      sessionId
    );
  }
}
