"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import Image from 'next/image';
//import Dashboard
import Navbar from "../components/Navbar";

const products = [
    { id: 1, name: 'Roti Tawar', price: 15000, image: '/images/image1.jpg' },
    { id: 2, name: 'Roti Gandum', price: 18000, image: '/images/image2.jpg' },
    { id: 3, name: 'Croissant', price: 20000, image: '/images/image3.jpg' },
    { id: 4, name: 'Donat', price: 12000, image: '/images/image4.jpg' },
    { id: 5, name: 'Baguette', price: 22000, image: '/images/image5.jpg' },
];

export default function Harga2() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            console.log("Isi Keranjang:", cart);
        }
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const totalHarga = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Daftar Harga Toko Roti</h1>
            <Swiper spaceBetween={20} slidesPerView={2}>
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.name} width={150} height={150} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
                        <p className="text-lg text-gray-700">Rp {product.price.toLocaleString()}</p>
                        <button
                            onClick={() => addToCart(product)}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Tambah ke Keranjang
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="mt-6 p-4 border-t">
                <h2 className="text-xl font-bold">Keranjang Belanja</h2>
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="text-lg">
                                {item.name} - Rp {item.price.toLocaleString()} x {item.quantity}
                            </li>
                        ))}
                        <p className="mt-2 font-semibold text-lg">Total: Rp {totalHarga.toLocaleString()}</p>
                    </ul>
                ) : (
                    <p className="text-gray-500">Keranjang masih kosong</p>
                )}
            </div>
        </div>
    );
}
