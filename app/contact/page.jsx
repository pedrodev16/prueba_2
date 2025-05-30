"use client"
import { getDatos } from '../database/models/Get_rifas';
import { useEffect, useState } from 'react';
import { handleSignIn, handleSignOut } from '../lib/auth';
import { useSession } from 'next-auth/react';
import Header from '../components/header';
import Panelcategorias from '../components/Panelcategorias';
export default function Page() {
    const { data: session } = useSession();



    const [datosa, setDatosa] = useState([]);

    useEffect(() => {
        const fetchDatos = async () => {
            const datos = await getDatos();
            setDatosa(datos);
        };

        fetchDatos();
    }, []);

    console.log(datosa);

    return (
        <>
            <Header />
            <Panelcategorias />
            <main className="flex items-center justify-center min-h-screen bg-gray-100">


                {session ? (
                    <div>
                        <h2 className="text-lg font-medium text-gray-700">
                            Welcome, {session.user.name}!
                        </h2>
                        <button
                            onClick={handleSignOut}
                            className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleSignIn}
                        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    >
                        Sign in with Google
                    </button>
                )}
            </main>
        </>
    );
}