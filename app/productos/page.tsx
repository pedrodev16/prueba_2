
"use client";
import Header from '../components/header';
import { getDatos } from '../actions/getDatos';
import { useEffect, useState } from 'react';









const page = () => {
    const [datosa, setDatosa] = useState<any[]>([]);

    useEffect(() => {
        const fetchDatos = async () => {
            const datos = await getDatos();
            setDatosa(datos);

        };

        fetchDatos();
    }, []);

    console.log(datosa);
    // async function Datos() {
    //     const datos = await getDatos();

    //     return datos;
    // }

    return (
        <div>
            <Header />

        </div>
    );

};

export default page;