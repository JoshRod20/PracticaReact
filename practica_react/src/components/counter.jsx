import { useState } from "react";

const Counter = () => {
/**
Este es un estado y el useState es una función
const [number, setNumber] = useState(0);, dentro de los corchetes
Siempre habrá una variable y una funcón que en este caso es number y setNumber
 */
    const [number, setNumber] = useState(0); //Ponemos la variable en un estado y cunado cambia el estado usando useState este se reenderiza
//
    const sumar = () => {
        setNumber(number + 1);//En esta función de sumar, se ejecuta el setNumber que cambia el valor de la variable en el estado
    }//El valor cambia según lo que se ponga en el paréntesis

    const restar = () => {
        setNumber(number - 1);
    }
    return (
        <div>
            <button onClick={restar}>Restar</button>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <hr/>
        </div>
    )
}

export default Counter;
