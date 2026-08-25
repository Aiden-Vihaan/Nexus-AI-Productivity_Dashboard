import {
  RateLimiter
} from "../../src/security/rate-limit";

describe(
  "RateLimiter",
  () => {
    it(
      "should allow requests within the limit",
      () => {
        const limiter =
          new RateLimiter(
            60_000,
            2
          );

        expect(
          limiter.check(
            "user-1"
          ).allowed
        ).toBe(true);

        expect(
          limiter.check(
            "user-1"
          ).allowed
        ).toBe(true);
      }
    );

    it(
      "should reject requests beyond the limit",
      () => {
        const limiter =
          new RateLimiter(
            60_000,
            2
          );

        limiter.check(
          "user-1"
        );

        limiter.check(
          "user-1"
        );

        expect(
          limiter.check(
            "user-1"
          ).allowed
        ).toBe(false);
      }
    );
  }
);
