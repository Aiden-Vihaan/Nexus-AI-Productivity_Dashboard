import {
  SessionStore
} from "../../src/auth/session";

describe(
  "SessionStore",
  () => {
    it(
      "should create and validate a session",
      () => {
        const store =
          new SessionStore();

        const session =
          store.create(
            "user-001"
          );

        const result =
          store.get(
            session.id
          );

        expect(
          result
        ).not.toBeNull();

        expect(
          result?.userId
        ).toBe(
          "user-001"
        );
      }
    );

    it(
      "should revoke sessions",
      () => {
        const store =
          new SessionStore();

        const session =
          store.create(
            "user-001"
          );

        store.revoke(
          session.id
        );

        expect(
          store.get(
            session.id
          )
        ).toBeNull();
      }
    );
  }
);
