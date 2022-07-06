import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("./data.json")
            .then((resp)=>resp.json())
            .then((data)=>{
                const dataFetch = data.find((e)=>e.id===1);
                setDetalle(dataFetch);
            })
        },2000)
    },[])

    return (
        <section style={{backgroundColor: "grey", margin: "0px"}}>
            <ItemDetail {...detalle}/>
        </section>
    )
}

export default ItemDetailContainer;