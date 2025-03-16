//import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";



export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();



  //tambahan untuk session
  
  const [loading, setLoading] = useState(true);
  const router = useRouter();







  
  useEffect(() => {
    const fromNavbar = sessionStorage.getItem("fromNavbar");


      const checkSession = async () => {
      const res = await fetch("/api/session");
      const data = await res.json();

      
        if (!data.allowed) {
          router.replace("/"); // Redirect ke halaman utama jika tidak ada session
        } else {
          setLoading(false);
        }
      };

    checkSession();
  }, []);
  
    /*if (fromNavbar === "true") {
      setIsAllowed(true); // Boleh masuk ke halaman
      sessionStorage.removeItem("fromNavbar"); // Hapus status setelah masuk
    } else {
      router.push("/"); // Redirect kalau langsung akses
    }

     */




  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
    } else {
      setSuccess("Registrasi berhasil! Silakan login.");
      setTimeout(() => router.push("/login"), 2000);
    }
  };

  //if (!isAllowed) return null;


  if (loading) return <p>Loading...</p>;
  return <h1>Halaman Register - Akses diberikan!</h1>;

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded mb-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded">Register</button>
        </form>
        <p className="text-center text-sm mt-4">
          Sudah punya akun? <Link href="/login" className="text-blue-500">Login</Link>
          
        </p>
      </div>
    </div>
  );
}