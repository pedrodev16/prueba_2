import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mysql from "mysql2/promise";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            const connection = await mysql.createConnection({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            });

            const [rows] = await connection.execute('SELECT * FROM usuarios WHERE id_google = ?', [user.id]);

            if (rows.length === 0) {
                // Si el usuario no existe, se guarda en la base de datos
                await connection.execute(
                    'INSERT INTO usuarios (id_google, nombre, email) VALUES (?, ?, ?)',
                    [user.id, user.name, user.email]
                );
            }

            await connection.end();
            return true; // Permitir inicio de sesión
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // ✅ Adaptación para Next.js 13+ con "app" directory