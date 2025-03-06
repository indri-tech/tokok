import mysql from "mysql2/promise";

export async function connectDB() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasir_roti",
  });
}
