import { getDatos } from './actions';

export default async function Datos() {
    const datos = await getDatos();

    return (
        <div>
            <h1>Datos desde MySQL</h1>
            <ul>
                {datos.map((item, index) => (
                    <li key={index}>{item.nombre} - {item.valor}</li>
                ))}
            </ul>
        </div>
    );
}