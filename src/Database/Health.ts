import {
  DatabaseClient
} from "./database";

export async function checkDatabaseHealth(
  database: DatabaseClient
) {
  return database.healthCheck();
}
