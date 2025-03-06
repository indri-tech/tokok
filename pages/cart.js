import { useState, useEffect } from "react";
import Link from "next/link";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Hapus item dari cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Keranjang Belanja</h1>
        <Link href="/">
          <button className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Kembali ke Toko
          </button>
        </Link>
        {cart.length === 0 ? (
            <p className="text-center text-gray-700">Keranjang kosong.</p>
        ) : (
            <div className="bg-white p-4 shadow rounded-lg">
              {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b py-2">
                    <p>{item.name} - Rp {item.price.toLocaleString()}</p>
                    <button
                        onClick={() => removeFromCart(index)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </div>
              ))}
            </div>
        )}
      </div>
  );
}