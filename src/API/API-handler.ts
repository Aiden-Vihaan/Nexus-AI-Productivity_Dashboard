import {
  APIRequest,
  APIResponse
} from "./api-types";

import {
  APIError
} from "./api-error";

import {
  errorResponse
} from "./api-response";

export type APIHandler<
  TBody = unknown,
  TResult = unknown
> = (
  request: APIRequest<TBody>
) => Promise<TResult>;

export async function executeAPIHandler<
  TBody,
  TResult
>(
  handler: APIHandler<
    TBody,
    TResult
  >,
  request: APIRequest<TBody>
): Promise<
  APIResponse<TResult>
> {
  try {
    const result =
      await handler(request);

    return {
      success: true,

      data: result,

      metadata: {
        timestamp:
          new Date().toISOString(),

        requestId:
          request.requestId
      }
    };
  } catch (error) {
    if (
      error instanceof APIError
    ) {
      return errorResponse(
        error.code,
        error.message,
        request.requestId
      );
    }

    return errorResponse(
      "INTERNAL_SERVER_ERROR",
      "An unexpected error occurred.",
      request.requestId
    );
  }
}
