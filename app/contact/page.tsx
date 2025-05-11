import React from 'react';
import Header from '../components/header';
const page = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto my-10">
                <section className="hero bg-gray-200 p-10 text-center">
                    <h1 className="text-4xl font-bold">Bienvenido a nuestro sitio</h1>
                    <p className="mt-4 text-lg">Explora nuestros servicios y categorías</p>
                </section>

                <section className="categories grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                    <div className="category bg-white shadow rounded p-5 text-center">
                        <h2 className="text-2xl font-bold">Categoría 1</h2>
                        <p>Descripción breve de la categoría</p>
                    </div>
                    <div className="category bg-white shadow rounded p-5 text-center">
                        <h2 className="text-2xl font-bold">Categoría 2</h2>
                        <p>Descripción breve de la categoría</p>
                    </div>
                    <div className="category bg-white shadow rounded p-5 text-center">
                        <h2 className="text-2xl font-bold">Categoría 3</h2>
                        <p>Descripción breve de la categoría</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default page;