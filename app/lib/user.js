import { useSession } from 'next-auth/react';
import { Set_usuario_auth, existeIdGoogle } from '../database/models/Set_usuario_auth';
//guardar id_google en la base de datos mysql

export function GuardarIdGoogle() {
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            const id_google = session.user.id;
            const nombre = session.user.name;
            const email = session.user.email;

            // Verificar si el ID de Google ya existe en la base de datos
            existeIdGoogle(id_google).then((existe) => {
                if (!existe) {
                    Set_usuario_auth(nombre, email, id_google)
                        .then((response) => console.log('ID de Google guardado:', response))
                        .catch((error) => console.error('Error al guardar el ID:', error));
                } else {
                    console.log('El ID de Google ya existe en la base de datos');
                }
            });
        }
    }, [session]);

    return null; // Este componente no renderiza nada, solo ejecuta la lógica
}
