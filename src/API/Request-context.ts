export interface RequestContext {
  requestId: string;

  startedAt: number;

  userId?: string;

  ipAddress?: string;

  userAgent?: string;
}

export function createRequestContext(
  requestId: string,
  userId?: string
): RequestContext {
  return {
    requestId,

    startedAt:
      Date.now(),

    userId
  };
}
