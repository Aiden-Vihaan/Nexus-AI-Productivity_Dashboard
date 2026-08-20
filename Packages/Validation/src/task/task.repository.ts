export interface TaskRepository {
  create(input: unknown): Promise<unknown>;

  findById(
    taskId: string,
    userId: string,
  ): Promise<unknown | null>;

  findMany(
    userId: string,
  ): Promise<unknown[]>;

  update(
    taskId: string,
    userId: string,
    input: unknown,
  ): Promise<unknown>;

  delete(
    taskId: string,
    userId: string,
  ): Promise<void>;
}
