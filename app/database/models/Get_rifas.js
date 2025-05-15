'use server';
import { createConnection } from '../conexion';

export async function getDatos() {
    const connection = await createConnection();

    try {
        const [rows] = await connection.query('SELECT * FROM `rifas`');
        return rows;
    } catch (error) {
        return { error: error.message };
    } finally {
        connection.end();
    }
}