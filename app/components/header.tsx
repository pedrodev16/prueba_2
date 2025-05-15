import Link from "next/link";
import React from "react";
import { handleSignIn, handleSignOut } from "../lib/auth";
import { useSession } from "next-auth/react";
import { FaReact } from "react-icons/fa6";

const Header = () => {
    const { data: session } = useSession();

    return (
        <header className="bg-blue-600 p-4 flex justify-between items-center px-6">
            {/* Logo con ícono de React */}
            <div className="flex items-center space-x-2">
                <FaReact className="text-white text-3xl" />
                <h1 className="text-white text-xl font-bold">RifaYa</h1>
            </div>

            {/* Barra de búsqueda */}
            <input
                type="text"
                placeholder="Buscar rifas o usuarios..."
                className="p-2 rounded w-1/3"
            />

            {/* Menú de navegación */}
            <nav className="flex space-x-4">
                <Link href="/createRaffle" className="text-white">Crear Rifa</Link>
                <Link href="/userProfile" className="text-white">Mi Perfil</Link>

                {/* Autenticación */}
                {session ? (
                    <button
                        onClick={handleSignOut}
                        className="text-white flex items-center space-x-2"
                    >
                        <span>Cerrar sesión</span>
                    </button>
                ) : (
                    <button
                        onClick={handleSignIn}
                        className="text-white flex items-center space-x-2"
                    >
                        <span>Iniciar sesión</span>
                    </button>
                )}
            </nav>
        </header>
    );
};

export default Header;