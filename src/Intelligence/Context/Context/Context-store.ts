import { UserContextState } from "./context-types";

export interface ContextStore {
  get(
    userId: string
  ): Promise<UserContextState | undefined>;

  set(
    context: UserContextState
  ): Promise<void>;

  delete(
    userId: string
  ): Promise<void>;

  has(
    userId: string
  ): Promise<boolean>;
}
