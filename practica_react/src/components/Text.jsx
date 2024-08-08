import { useState } from "react";
import TextH2 from "./TextH2";

const Text = () => {


    const [show, setShow] = useState (true);

    function handleShow () {
        setShow(!show)
    }
    
    return (
        <div>
            <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
            {show && <TextH2/>}
        </div>
    )
};

export default Text;
/**Que es un Hook?
    Son funciones de React que nos devuelven ciertas cosas que nos van a servir
    para controlar un poco los ciclos de vida de cuando un componente se monta o se actualiza
 */