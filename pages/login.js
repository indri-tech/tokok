import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
      } else {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Login Kasir</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handleLogin}>
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
            <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
          </form>
        </div>
      </div>
  );
}