import {
  DatabaseHealth
} from "./database-types";

export interface DatabaseClient {
  connect(): Promise<void>;

  disconnect(): Promise<void>;

  healthCheck():
    Promise<DatabaseHealth>;
}

export class InMemoryDatabase
  implements DatabaseClient {
  private connected =
    false;

  async connect(): Promise<void> {
    this.connected =
      true;
  }

  async disconnect(): Promise<void> {
    this.connected =
      false;
  }

  async healthCheck():
    Promise<DatabaseHealth> {
    const started =
      Date.now();

    return {
      connected:
        this.connected,

      latencyMs:
        Date.now() -
        started,

      provider:
        "memory",

      checkedAt:
        new Date().toISOString()
    };
  }
}
