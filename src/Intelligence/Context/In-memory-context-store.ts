import {
  ContextStore
} from "./context-store";

import {
  UserContextState
} from "./context-types";

export class InMemoryContextStore
  implements ContextStore
{
  private readonly contexts =
    new Map<
      string,
      UserContextState
    >();

  async get(
    userId: string
  ): Promise<
    UserContextState | undefined
  > {
    const context =
      this.contexts.get(userId);

    if (!context) {
      return undefined;
    }

    return structuredClone(context);
  }

  async set(
    context: UserContextState
  ): Promise<void> {
    this.contexts.set(
      context.userId,
      structuredClone(context)
    );
  }

  async delete(
    userId: string
  ): Promise<void> {
    this.contexts.delete(userId);
  }

  async has(
    userId: string
  ): Promise<boolean> {
    return this.contexts.has(userId);
  }

  clear(): void {
    this.contexts.clear();
  }

  size(): number {
    return this.contexts.size;
  }
}
