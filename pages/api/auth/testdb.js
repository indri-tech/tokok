//import { connectDB } from "./lib/db.js";
import db from '../../../lib/db';

async function testDB() {
  try {
    const db = await connectDB();
    console.log("✅ Koneksi ke database berhasil!");
    db.end();
  } catch (error) {
    console.error("❌ Gagal koneksi ke database:", error);
  }
}

testDB();