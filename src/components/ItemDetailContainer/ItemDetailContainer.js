import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/firestore";
import { useCartContext } from "../../contexts/cart-context";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState(false)
    const {iditem} = useParams();

    const cartCtx = useCartContext();

    useEffect(()=>{

        getItem(iditem).then((res)=>{
            setIsLoading(false);
            if(res.length>0){
                setDetalle(res);
                cartCtx.setearContadorItems(iditem);
            }else{
                setErrorMsg(true);
            }
        })
    },[])

    if (isLoading) {
        return <div className="is-loading"><h2>CARGANDO...</h2></div>

    }else {
        if (errorMsg){
            return <div className="is-loading"><h2>ERROR</h2><span>NO EXISTE EL PRODUCTO</span></div>
        }else {
            return (
                <section style={{backgroundColor: "grey", margin: "0px"}}>
                    {detalle && detalle.map(i =><ItemDetail  key={i.id} stock={i.stock} producto={i.producto} img={i.img} precio={i.precio} descripcion={i.descripcion} id={i.id}/>)}
                </section>
            )
        }
    }
}

export default ItemDetailContainer;