import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [detalle, setDetalle] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch("./data.json")
            .then((resp)=>resp.json())
            .then((data)=>setDetalle(data))
        },4000)
    },[])

    return (
        <section>
             {detalle && detalle.map(e =><ItemDetail key={e.id} titulo={e.nombre} precio= {e.precio} img={e.img} descripcion={e.descripcion}/>)}
        </section>
    )
}

export default ItemDetailContainer;