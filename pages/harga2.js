import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const products = [
    { id: 1, name: 'Roti Tawar', price: 15000, image: '/images/roti-tawar.jpg' },
    { id: 2, name: 'Roti Gandum', price: 18000, image: '/images/roti-gandum.jpg' },
    { id: 3, name: 'Croissant', price: 20000, image: '/images/croissant.jpg' },
    { id: 4, name: 'Donat', price: 12000, image: '/images/donat.jpg' },
    { id: 5, name: 'Baguette', price: 22000, image: '/images/baguette.jpg' },
];

export default function PriceList() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Daftar Harga Toko Roti</h1>
            <Swiper spaceBetween={20} slidesPerView={2}>
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
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
                        {cart.map((item, index) => (
                            <li key={index} className="text-lg">{item.name} - Rp {item.price.toLocaleString()}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Keranjang masih kosong</p>
                )}
            </div>
        </div>
    );
}
