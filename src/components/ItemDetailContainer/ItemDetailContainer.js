import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/firestore";
import { useCartContext } from "../../contexts/cart-context";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    const {iditem} = useParams();

    const cartCtx = useCartContext();

    useEffect(()=>{

        getItem(iditem).then((res)=>{
            setDetalle(res);
            setIsLoading(false);
            cartCtx.setearContadorItems(iditem);
        })

    },[])

    return (
        isLoading ? <h2>CARGANDO...</h2>:
        (
            <section style={{backgroundColor: "grey", margin: "0px"}}>
                {detalle && detalle.map(i =><ItemDetail  key={i.id} stock={i.stock} producto={i.producto} img={i.img} precio={i.precio} descripcion={i.descripcion} id={i.id}/>)}
            </section>
        )
    )
}

export default ItemDetailContainer;