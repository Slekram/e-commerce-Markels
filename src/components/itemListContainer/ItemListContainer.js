import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = ({nombre}) => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    const {idcategoria} = useParams();
    console.log(idcategoria);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("./data.json")
            .then((resp)=>resp.json())
            .then((data)=>{
                const myData = idcategoria ? data.filter((item) => item.categoria === idcategoria) : data;
                console.log(myData);
                setProductos(myData);
            })
            .finally(()=>setIsLoading(false))
        },2000)
    },[idcategoria]);

    return (
        isLoading ? <h2>CARGANDO...</h2> :
        (
            <section className="ItemListContainer">
                <h2>Catalogo de Productos</h2>
                <p>Bienvenido {nombre}, este es nuestro catalogo actual de productos</p>
                <ItemList 
                    productos={productos}
                />
            </section>
        )
    )
}

export default ItemListContainer;