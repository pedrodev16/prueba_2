

import Header from '../components/header';
import { getDatos } from '../actions/getDatos';









const page = () => {
    const Datos = async () => {
        const datosa = await getDatos();
        console.log(datosa);
        return (
            <div>
                <h1>Datos desde MySQL</h1>
                <ul>

                </ul>
            </div>
        );
    };
    // async function Datos() {
    //     const datos = await getDatos();

    //     return datos;
    // }

    return (
        <div>
            <Header />
            <h1>{Datos()}</h1>
        </div>
    );

};

export default page;