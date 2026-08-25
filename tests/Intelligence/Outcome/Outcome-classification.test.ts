import {
  classifyUserResponse
} from "../../../src/intelligence/outcome/outcome-classification";

describe(
  "Outcome Classification",
  () => {
    it(
      "should classify accepted responses",
      () => {
        const result =
          classifyUserResponse(
            "accepted"
          );

        expect(
          result.type
        ).toBe(
          "accepted"
        );

        expect(
          result.effect
        ).toBe(
          "positive"
        );
      }
    );

    it(
      "should classify dismissed responses",
      () => {
        const result =
          classifyUserResponse(
            "dismissed"
          );

        expect(
          result.type
        ).toBe(
          "dismissed"
        );

        expect(
          result.effect
        ).toBe(
          "negative"
        );
      }
    );

    it(
      "should classify ignored responses",
      () => {
        const result =
          classifyUserResponse(
            "ignored"
          );

        expect(
          result.type
        ).toBe(
          "ignored"
        );

        expect(
          result.effect
        ).toBe(
          "neutral"
        );
      }
    );

    it(
      "should handle unknown responses",
      () => {
        const result =
          classifyUserResponse(
            "something unexpected"
          );

        expect(
          result.type
        ).toBe(
          "neutral"
        );

        expect(
          result.effect
        ).toBe(
          "unknown"
        );
      }
    );
  }
);
