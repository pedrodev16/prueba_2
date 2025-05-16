import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createConnection } from '../../../database/conexion';



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

    ], callbacks: {
        async signIn({ user }) {
            const connection = await createConnection();

            // Verificar si el usuario ya existe en la base de datos
            const [rows] = await connection.execute('SELECT * FROM usuarios WHERE id_google = ?', [user.id]);

            if (rows.length === 0) {
                // Si el usuario no existe, se guarda en la base de datos
                await connection.execute(
                    'INSERT INTO usuarios (id_google, nombre, email) VALUES (?, ?, ?)',
                    [user.id, user.name, user.email]
                );
            }

            await connection.end();
            return true;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };