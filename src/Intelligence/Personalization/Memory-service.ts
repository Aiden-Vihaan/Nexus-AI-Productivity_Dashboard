import {
  UserMemory,
  MemoryObservation,
  MemoryCategory,
  MemoryUpdate
} from "./memory-types";

import {
  MemoryStore,
  InMemoryMemoryStore
} from "./memory-store";

import {
  calculateMemoryConfidence,
  calculateMemoryImportance
} from "./memory-scoring";

import {
  getDefaultExpirationDays,
  shouldActivateMemory,
  DEFAULT_MEMORY_POLICY,
  MemoryPolicy
} from "./memory-policy";

import {
  applyMemoryDecay,
  isMemoryExpired
} from "./memory-decay";

export class MemoryService {
  constructor(
    private readonly store:
      MemoryStore =
      new InMemoryMemoryStore(),

    private readonly policy:
      MemoryPolicy =
      DEFAULT_MEMORY_POLICY
  ) {}

  async createMemory(
    userId: string,
    category: MemoryCategory,
    key: string,
    value: unknown,
    observation: MemoryObservation
  ): Promise<UserMemory> {
    const now =
      new Date();

    const expirationDays =
      getDefaultExpirationDays(
        category
      );

    const expiresAt =
      new Date(
        now.getTime() +
          expirationDays *
            24 *
            60 *
            60 *
            1000
      ).toISOString();

    const memory: UserMemory = {
      id:
        `memory_${Date.now()}_${Math.random()
          .toString(36)
          .slice(2, 8)}`,

      userId,

      category,

      key,

      value,

      source:
        observation.source,

      confidence:
        observation.confidence,

      importance:
        0,

      relevance:
        0.5,

      status:
        "candidate",

      observationCount:
        1,

      createdAt:
        now.toISOString(),

      updatedAt:
        now.toISOString(),

      lastObservedAt:
        observation.observedAt,

      expiresAt,

      metadata:
        observation.context
    };

    memory.importance =
      calculateMemoryImportance(
        memory
      );

    if (
      shouldActivateMemory(
        memory,
        this.policy
      )
    ) {
      memory.status =
        "active";
    }

    await this.store.save(
      memory
    );

    return memory;
  }

  async observe(
    memoryId: string,
    observation: MemoryObservation
  ): Promise<
    MemoryUpdate | null
  > {
    const memory =
      await this.store.getById(
        memoryId
      );

    if (!memory) {
      return null;
    }

    const previousValue =
      memory.value;

    const nextConfidence =
      calculateMemoryConfidence(
        observation,
        memory.confidence,
        memory.observationCount
      );

    memory.value =
      observation.value;

    memory.confidence =
      nextConfidence;

    memory.observationCount +=
      1;

    memory.lastObservedAt =
      observation.observedAt;

    memory.updatedAt =
      new Date().toISOString();

    memory.importance =
      calculateMemoryImportance(
        memory
      );

    if (
      shouldActivateMemory(
        memory,
        this.policy
      )
    ) {
      memory.status =
        "active";
    }

    await this.store.update(
      memory
    );

    return {
      memoryId,

      previousValue,

      newValue:
        observation.value,

      confidence:
        nextConfidence,

      reason:
        "Memory updated from a new observation.",

      updatedAt:
        memory.updatedAt
    };
  }

  async maintainMemory(
    memoryId: string
  ): Promise<
    UserMemory | null
  > {
    const memory =
      await this.store.getById(
        memoryId
      );

    if (!memory) {
      return null;
    }

    if (
      isMemoryExpired(
        memory
      )
    ) {
      memory.status =
        "expired";

      await this.store.update(
        memory
      );

      return memory;
    }

    const decayed =
      applyMemoryDecay(
        memory
      );

    memory.confidence =
      decayed.confidence;

    memory.updatedAt =
      decayed.updatedAt;

    await this.store.update(
      memory
    );

    return memory;
  }

  async getMemory(
    memoryId: string
  ): Promise<UserMemory | null> {
    return this.store.getById(
      memoryId
    );
  }

  async getUserMemories(
    userId: string
  ): Promise<UserMemory[]> {
    return this.store.getByUser(
      userId
    );
  }

  async search(
    userId: string,
    context?: Record<string, unknown>,
    limit = 10
  ) {
    return this.store.search({
      userId,

      context,

      limit
    });
  }
}
