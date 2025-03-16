import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const { isLoggedIn } = useAuth();
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState(null);

    // Ambil data session user
    useEffect(() => {
        fetch("/api/session")
            .then((res) => res.json())
            .then((data) => setUser(data.user));
    }, []);

    useEffect(() => {
        setLoginStatus(isLoggedIn);
    }, [isLoggedIn]);

    const handleCasierClick = async (e) => {
        e.preventDefault(); // Mencegah default behavior dari link

        if (!isLoggedIn) {
            alert("Anda harus login terlebih dahulu!");
            router.push("/login"); // Arahkan ke halaman login jika belum login
            return;
        }

        const res = await fetch("/api/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        if (res.ok) {
            sessionStorage.setItem("fromNavbar", "true"); // Simpan status
            router.push("/register"); // Pindah ke halaman register
        }
    };

    return (
        <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[80%] max-w-3xl bg-white bg-opacity-90 shadow-lg rounded-full px-6 py-3 flex justify-between items-center z-10">
            {/* Logo */}
            <h1 className="text-xl font-bold text-gray-800">COFFIE CAFE</h1>

            {/* Menu */}
            <ul className="flex space-x-6 text-gray-700">
                <li><Link href="/coffee-and-cake" className="hover:text-blue-600">Coffee and Cake</Link></li>
                <li><Link href="/main-meal" className="hover:text-blue-600">Main Meal</Link></li>
                <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
                <li><Link href="/table-reservation" className="hover:text-blue-600">Table Reservation</Link></li>

                <li>
                    <p>Login Status: {isLoggedIn ? "Sudah Login" : "Belum Login"}</p>

                    {/* login jadi logout */}
                    {user ? (
                        <button
                            onClick={async () => {
                                await fetch("/api/logout", { method: "POST" });
                                setUser(null);
                            }}
                            className="bg-red-500 px-4 py-2 rounded"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link href="#" className="hover:text-blue-600">
                            <span onClick={handleCasierClick} className="cursor-pointer">LOG IN </span>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}