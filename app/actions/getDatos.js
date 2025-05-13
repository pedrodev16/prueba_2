'use server';
import mysql from 'mysql2/promise';

export async function getDatos() {
    const connection = await mysql.createConnection({


        host: "mysql-pedrodev16.alwaysdata.net",
        port: 3306,
        user: "411793",
        password: "Lol2024..",
        database: "pedrodev16_p"
    });

    try {
        const [rows] = await connection.query('SELECT * FROM `mensajes`');
        return rows;
    } catch (error) {
        return { error: error.message };
    } finally {
        connection.end();
    }
}