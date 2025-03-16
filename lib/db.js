/*import mysql from "mysql2/promise";

export async function connectDB() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasir_roti",
  });
}
*/


import mysql from "mysql2/promise";

export async function connectDB() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // Ganti dengan password database
    database: "kasir_roti" // Sesuaikan dengan database yang digunakan
  });

  return connection;
}
