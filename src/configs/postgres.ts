import { Pool } from "pg";

const pool = new Pool({
  host: "database",
  user: "postgres",
  database: "postgres",
  password: "postgres",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
