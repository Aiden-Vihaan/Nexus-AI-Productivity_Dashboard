export interface APIRequest<
  TBody = unknown
> {
  requestId: string;

  method: string;

  path: string;

  body?: TBody;

  query?: Record<
    string,
    string
  >;

  headers: Record<
    string,
    string | undefined
  >;

  userId?: string;
}

export interface APIResponse<
  TData = unknown
> {
  success: boolean;

  data?: TData;

  error?: {
    code: string;

    message: string;

    requestId: string;
  };

  metadata?: {
    timestamp: string;

    requestId: string;
  };
}
