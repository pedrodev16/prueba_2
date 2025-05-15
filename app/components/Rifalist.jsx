"use client";
import React, { useState, useEffect } from "react";
import { getDatos } from '../database/models/Get_rifas';

const Rifalist = () => {
    const [rifas, setRifas] = useState([]);

    useEffect(() => {
        const fetchRifas = async () => {
            const data = await getDatos();
            setRifas(data);
        };

        fetchRifas();
    }, []);

    return (
        <main className="p-6 flex flex-wrap gap-4">
            <h2 className="text-xl font-bold">Lista de Rifas</h2>
            <ul>
                {rifas.map((rifa) => (
                    <li key={rifa.id} className="p-3 border-b">{rifa.titulo}</li>
                ))}
            </ul>
        </main>
    );
};

export default Rifalist;