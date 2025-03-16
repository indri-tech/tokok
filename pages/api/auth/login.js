//import { connectDB } from "@/lib/db";
//import { connectDB } from "../../lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import { connectDB } from "../../../lib/db";
import { connectDB } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, password } = req.body;

  try {
    const db = await connectDB();
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: "Email tidak terdaftar!" });
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Password salah!" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, "secret123", { expiresIn: "1h" });

    //log in jadi log out 
    req.session.user = { id: user.id, email: user.email };
    await req.session.save();
    res.json({ message: "Login berhasil!" });


    res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Path=/`);
    res.status(200).json({ message: "Login berhasil", token });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error });
  }
}
