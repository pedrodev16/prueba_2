'use server';
import mysql from 'mysql2/promise';

export async function getDatos() {
    const connection = await mysql.createConnection({


        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME

    });



    try {
        const [rows] = await connection.query('SELECT * FROM `rifas`');
        return rows;
    } catch (error) {
        return { error: error.message };
    } finally {
        connection.end();
    }
}