import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/firestore";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    const {iditem} = useParams();

    useEffect(()=>{

        getItem(iditem).then((res)=>{
            setDetalle(res);
            setIsLoading(false);
        })

    },[])

    return (
        isLoading ? <h2>CARGANDO...</h2>:
        (
            <section style={{backgroundColor: "grey", margin: "0px"}}>
                {detalle.map(i =><ItemDetail  key={i.id} producto={i.producto} img={i.img} precio={i.precio} descripcion={i.descripcion} id={i.id}/>)}
            </section>
        )
    )
}

export default ItemDetailContainer;