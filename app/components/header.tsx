import Link from 'next/link';
import React from 'react';
import { FaReact } from 'react-icons/fa6';

const header = () => {
    return (
        <div>
            <header>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/contact">contacto</Link>
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link href="/productos">pro</Link>
                    </li>
                </ul>       <FaReact></FaReact>
            </header>
        </div>
    );
};

export default header;