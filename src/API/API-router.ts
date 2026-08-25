import {
  APIRequest
} from "./api-types";

import {
  APIHandler
} from "./api-handler";

export class APIRouter {
  private readonly routes =
    new Map<
      string,
      APIHandler
    >();

  register(
    method: string,
    path: string,
    handler: APIHandler
  ): void {
    const key =
      this.createKey(
        method,
        path
      );

    this.routes.set(
      key,
      handler
    );
  }

  resolve(
    request: APIRequest
  ): APIHandler | null {
    return (
      this.routes.get(
        this.createKey(
          request.method,
          request.path
        )
      ) || null
    );
  }

  private createKey(
    method: string,
    path: string
  ): string {
    return `${method.toUpperCase()}:${path}`;
  }
}
