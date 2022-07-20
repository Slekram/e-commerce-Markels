import { data } from "../../data/data";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/Firestore";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([]);
    const [isLoading, setIsLoading] = useState([true])
    const {iditem} = useParams();

    useEffect(()=>{
            
            // const getItem = new Promise ((resolve)=>{
            //     setTimeout(()=>{
            //         const dataFetch = data.find((e)=>e.id===iditem);
            //         resolve(dataFetch);
            //     },2000)
            // })

        getItem(iditem).then((res)=>{
            console.log(res);
            setDetalle(res);
            setIsLoading(false);
        })

    },[])

    return (
        isLoading ? <h2>CARGANDO...</h2>:
        (
            <section style={{backgroundColor: "grey", margin: "0px"}}>
                {console.log(detalle)}
                {detalle.map(i =><ItemDetail  key={i.id} producto={i.producto} img={i.img} precio={i.precio} descripcion={i.descripcion} id={i.id}/>)}
            </section>
        )
    )
}

export default ItemDetailContainer;