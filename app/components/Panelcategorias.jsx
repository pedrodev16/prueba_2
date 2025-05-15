import React from "react";

const categories = ["Tecnología", "Vehículos", "Dinero", "Viajes", "Electrodomésticos"];

const Panelcategorias = () => {
    return (
        <aside className="bg-gray-100 p-6 w-60 h-full">
            <h2 className="text-lg font-bold mb-4">Categorías</h2>
            <ul className="space-y-3">
                {categories.map((category, index) => (
                    <li key={index} className="cursor-pointer hover:text-blue-600">
                        {category}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Panelcategorias;