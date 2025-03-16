import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost/yii2-backend/web/api/data")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Data List</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <ul>
                    {data.map((item) => (
                        <li key={item.id} className="border-b p-2">
                            {item.name} - {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
