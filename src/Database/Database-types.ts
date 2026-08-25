export interface DatabaseHealth {
  connected: boolean;

  latencyMs: number;

  provider: string;

  checkedAt: string;
}

export interface Repository<
  TEntity,
  TId = string
> {
  findById(
    id: TId
  ): Promise<
    TEntity | null
  >;

  findAll(): Promise<
    TEntity[]
  >;

  create(
    entity: TEntity
  ): Promise<TEntity>;

  update(
    id: TId,
    entity: Partial<TEntity>
  ): Promise<TEntity>;

  delete(
    id: TId
  ): Promise<void>;
}
