import pg from "pg";

const pool = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Ecosunscreen",
  password: "AUaptx4869",
  port: 4567,
});
pool.connect();
export default pool;
