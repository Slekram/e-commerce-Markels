import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList.js";
import { useEffect, useState } from "react";

const ItemListContainer = ({nombre}) => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        setTimeout(()=>{
            fetch("./data.json")
            .then((resp)=>resp.json())
            .then((data)=>setProductos(data))
        },2000)
    },[])

    console.log(productos);
    return (
        <section className="ItemListContainer">
            <h2>Catalogo de Productos</h2>
            <p>Bienvenido {nombre}, este es nuestro catalogo actual de productos</p>
            <ItemList 
                productos={productos}
            />
        </section>
    )
}

export default ItemListContainer;