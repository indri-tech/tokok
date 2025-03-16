import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();

  return (
      <button
          onClick={() => router.push("/harga2")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
      >
        Lihat Harga
      </button>
  );
}