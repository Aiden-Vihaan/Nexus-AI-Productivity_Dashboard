import {
  UserMemory,
  MemoryRetrievalQuery,
  MemoryRetrievalResult
} from "./memory-types";

import {
  retrieveRelevantMemories
} from "./memory-retrieval";

export interface MemoryStore {
  save(
    memory: UserMemory
  ): Promise<void>;

  update(
    memory: UserMemory
  ): Promise<void>;

  getById(
    memoryId: string
  ): Promise<UserMemory | null>;

  getByUser(
    userId: string
  ): Promise<UserMemory[]>;

  search(
    query: MemoryRetrievalQuery
  ): Promise<MemoryRetrievalResult[]>;

  delete(
    memoryId: string
  ): Promise<void>;
}

export class InMemoryMemoryStore
  implements MemoryStore {
  private memories:
    UserMemory[] = [];

  async save(
    memory: UserMemory
  ): Promise<void> {
    this.memories.push(
      memory
    );
  }

  async update(
    memory: UserMemory
  ): Promise<void> {
    const index =
      this.memories.findIndex(
        item =>
          item.id ===
          memory.id
      );

    if (index === -1) {
      return;
    }

    this.memories[index] =
      memory;
  }

  async getById(
    memoryId: string
  ): Promise<UserMemory | null> {
    return (
      this.memories.find(
        memory =>
          memory.id ===
          memoryId
      ) ?? null
    );
  }

  async getByUser(
    userId: string
  ): Promise<UserMemory[]> {
    return this.memories.filter(
      memory =>
        memory.userId ===
        userId
    );
  }

  async search(
    query: MemoryRetrievalQuery
  ): Promise<
    MemoryRetrievalResult[]
  > {
    const memories =
      await this.getByUser(
        query.userId
      );

    return retrieveRelevantMemories(
      memories,
      query
    );
  }

  async delete(
    memoryId: string
  ): Promise<void> {
    this.memories =
      this.memories.filter(
        memory =>
          memory.id !==
          memoryId
      );
  }
}
