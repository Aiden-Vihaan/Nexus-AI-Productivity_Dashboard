import {
  InMemoryDatabase
} from "../../src/database/database";

describe(
  "Database",
  () => {
    it(
      "should connect and report healthy state",
      async () => {
        const database =
          new InMemoryDatabase();

        await database.connect();

        const health =
          await database.healthCheck();

        expect(
          health.connected
        ).toBe(true);

        await database.disconnect();
      }
    );
  }
);
