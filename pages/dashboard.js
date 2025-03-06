import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Kasir</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
        Logout
      </button>
    </div>
  );
}
