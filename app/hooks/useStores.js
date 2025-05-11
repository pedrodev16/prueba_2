"use client";
// 👈 Esto indica que el componente es de cliente

import { useEffect, useState } from 'react';

export default function useStores() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        fetch('https://pedrodev16.alwaysdata.net/')
            .then(response => response.json())
            .then(data => setStores(data))
            .catch(error => console.error('Error fetching stores:', error));
    }, []);

    return stores;
}