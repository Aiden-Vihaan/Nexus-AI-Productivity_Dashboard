import {
  APIResponse
} from "./api-types";

export function successResponse<T>(
  data: T,
  requestId: string
): APIResponse<T> {
  return {
    success: true,

    data,

    metadata: {
      timestamp:
        new Date().toISOString(),

      requestId
    }
  };
}

export function errorResponse(
  code: string,
  message: string,
  requestId: string
): APIResponse {
  return {
    success: false,

    error: {
      code,

      message,

      requestId
    },

    metadata: {
      timestamp:
        new Date().toISOString(),

      requestId
    }
  };
}
