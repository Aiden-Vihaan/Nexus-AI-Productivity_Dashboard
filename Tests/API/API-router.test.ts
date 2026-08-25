import {
  APIRouter
} from "../../src/api/api-router";

describe(
  "APIRouter",
  () => {
    it(
      "should register and resolve routes",
      () => {
        const router =
          new APIRouter();

        const handler =
          async () => ({
            status:
              "ok"
          });

        router.register(
          "GET",
          "/health",
          handler
        );

        const resolved =
          router.resolve({
            requestId:
              "request-001",

            method:
              "GET",

            path:
              "/health",

            headers: {}
          });

        expect(
          resolved
        ).toBe(handler);
      }
    );
  }
);
