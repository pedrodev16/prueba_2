'use server';
import { createConnection } from '../conexion';

export async function Set_usuario_auth(nombre, apellido, email, telefono, auth_google_id) {
    const connection = await createConnection();

    try {
        const [result] = await connection.query(
            'INSERT INTO `usuarios` (nombre, apellido, email, telefono, auth_google_id) VALUES (?, ?, ?, ?, ?)',
            [nombre, apellido, email, telefono, auth_google_id]
        );
        return { insertId: result.insertId };
    } catch (error) {
        return { error: error.message };
    } finally {
        connection.end();
    }
}
export async function existeIdGoogle(id_google) {
    const connection = await createConnection();

    try {
        const [rows] = await connection.query(
            'SELECT * FROM `usuarios` WHERE auth_google_id = ?',
            [id_google]
        );
        return rows;
    } catch (error) {
        return { error: error.message };
    } finally {
        connection.end();
    }
}