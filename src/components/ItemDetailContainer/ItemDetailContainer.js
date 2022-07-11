import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    const {iditem} = useParams();

    useEffect(()=>{
        setTimeout(()=>{
            fetch("./data.json")
            .then((resp)=>resp.json())
            .then((data)=>{
                const dataFetch = data.find((e)=>e.id===iditem);
                setDetalle(dataFetch);
            })
            .finally(()=>setIsLoading(false))
        },2000)
    },[detalle])

    return (
        isLoading ? <h2>CARGANDO...</h2>:
        (
            <section style={{backgroundColor: "grey", margin: "0px"}}>
                <ItemDetail {...detalle}/>
            </section>
        )
    )
}

export default ItemDetailContainer;