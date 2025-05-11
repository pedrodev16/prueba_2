"use client";
import React from 'react';
import Header from '../components/header';
import useStores from '../hooks/useStores';

export default function Page() {
    const stores = useStores();

    return (
        <div>
            <Header />
            <h1>Lista de Tiendas</h1>
            <ul>
                {stores.map(store => (
                    <li key={store.id}>
                        {store.name} - {store.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}


