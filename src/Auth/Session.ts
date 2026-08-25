import {
  Session
} from "./auth-types";

export class SessionStore {
  private readonly sessions =
    new Map<
      string,
      Session
    >();

  create(
    userId: string,
    ttlMs = 86_400_000
  ): Session {
    const now =
      Date.now();

    const session: Session = {
      id:
        crypto.randomUUID(),

      userId,

      createdAt:
        new Date(now)
          .toISOString(),

      expiresAt:
        new Date(
          now + ttlMs
        ).toISOString(),

      revoked: false
    };

    this.sessions.set(
      session.id,
      session
    );

    return session;
  }

  get(
    sessionId: string
  ): Session | null {
    const session =
      this.sessions.get(
        sessionId
      );

    if (!session) {
      return null;
    }

    if (
      session.revoked ||
      new Date(
        session.expiresAt
      ).getTime() <=
        Date.now()
    ) {
      return null;
    }

    return session;
  }

  revoke(
    sessionId: string
  ): void {
    const session =
      this.sessions.get(
        sessionId
      );

    if (session) {
      session.revoked =
        true;
    }
  }
}
