import { useState } from "react";

const TextH2 = () => {

    const [text, setText] = useState("");

    const handleText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleText} />
            <h2>{text}</h2>
        </div>
    )
};

export default TextH2;


/**console.log(e) información del evento que estamos utilizando
 * console.log(e.target.value) Obtenemos información detallada
 * setTextext(e.target.value) Setear la información mientras se reenderiza
*/