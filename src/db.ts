import { DataSource } from "typeorm";
import { Class } from "./entities/Class";
import { Student } from "./entities/Student";
import env from "./env";

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT, DB_HOST } = env

const db = new DataSource({
  type: "mssql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Student, Class],
  synchronize: true,
  options: {
    encrypt: true,
  }
})

export async function clearDB() {
  const entities = db.entityMetadatas
  const tableNames = entities.map((entity) => `"${entity.tableName}"`).join(", ")
  await db.query(`TRUNCATE ${tableNames} RESTART IDENTITY CASCADE;`)
}

export default db
