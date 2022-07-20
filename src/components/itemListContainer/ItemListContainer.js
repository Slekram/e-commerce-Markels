import "./ItemListContainer.css";
import ItemList from "../itemList/ItemList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import {data } from "../../data/data";
import { getProducts } from "../../services/Firestore";

const ItemListContainer = ({nombre}) => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {idcategoria} = useParams();

    useEffect(()=> {

        getProducts(idcategoria).then((data)=> {
            setProductos(data);
            setIsLoading(false);
        })
        
    },[idcategoria])

    // useEffect(()=>{
    //     const getItem = new Promise ((resolve)=>{
    //         setTimeout(()=>{
    //             const myData = idcategoria ? data.filter((item) => item.categoria === idcategoria) : data;
    //             resolve(myData);
    //         },2000)
    //     })

    //     getItem.then((res)=>{
    //         setProductos(res);
    //         setIsLoading(false);
    //     })

    // },[idcategoria ])
    
    return (
        isLoading ? <h2>CARGANDO...</h2> :
        (
            <section className="ItemListContainer">
                <h2>Catalogo de Productos</h2>
                <p>Bienvenido {nombre}, este es nuestro catalogo actual de productos</p>
                {console.log(productos)}
                <ItemList
                    productos={productos}
                />
            </section>
        )
    )
}

export default ItemListContainer;