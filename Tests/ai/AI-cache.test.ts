import {
  AICache
} from "../../../src/intelligence/ai/ai-cache";

describe(
  "AI Cache",
  () => {
    it(
      "should cache values",
      () => {
        const cache =
          new AICache();

        cache.set(
          "test",
          {
            value:
              "cached"
          },
          1000
        );

        const result =
          cache.get<{
            value: string;
          }>("test");

        expect(
          result?.value
        ).toBe(
          "cached"
        );
      }
    );

    it(
      "should return null for missing keys",
      () => {
        const cache =
          new AICache();

        expect(
          cache.get(
            "missing"
          )
        ).toBeNull();
      }
    );
  }
);
