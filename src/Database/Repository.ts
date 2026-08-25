import {
  Repository
} from "./database-types";

export class InMemoryRepository<
  TEntity extends {
    id: string;
  }
> implements Repository<TEntity> {
  private readonly store =
    new Map<
      string,
      TEntity
    >();

  async findById(
    id: string
  ): Promise<
    TEntity | null
  > {
    return (
      this.store.get(id) ||
      null
    );
  }

  async findAll(): Promise<
    TEntity[]
  > {
    return Array.from(
      this.store.values()
    );
  }

  async create(
    entity: TEntity
  ): Promise<TEntity> {
    this.store.set(
      entity.id,
      entity
    );

    return entity;
  }

  async update(
    id: string,
    entity: Partial<TEntity>
  ): Promise<TEntity> {
    const existing =
      this.store.get(id);

    if (!existing) {
      throw new Error(
        "Entity not found."
      );
    }

    const updated = {
      ...existing,
      ...entity,
      id
    };

    this.store.set(
      id,
      updated
    );

    return updated;
  }

  async delete(
    id: string
  ): Promise<void> {
    this.store.delete(id);
  }
}
