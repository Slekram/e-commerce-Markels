import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";
import { useState } from "react";
import { setStock } from "../../services/firestore";

const ItemDetail = ({producto, img, precio, descripcion, id, stock}) => {

    const cartCtx = useCartContext();

    const [contador , setContador] = useState (cartCtx.contadorItem);
    const [disponibles , setDisponibles] = useState (stock);

    const saveDataHandler = (count, stock) => {
        const carritoData = {
            id: `${id}`, 
            producto: `${producto}`,
            cantidad: count,
            precio: `${precio}`,
            img: `${img}`,
            subtotal: `${precio*count}`,
            stockRestante: stock
        }

        setContador (contador + count);
        setDisponibles (stock);
        setStock(id, stock);
        cartCtx.addItem(carritoData);
        cartCtx.setearContador();
    }

    return (
        <>
            <div className="grid-item-detail">
                <div className="div1"><img src={img} alt={producto}></img></div>
                <div className="div2"><h2>{producto}</h2></div>
                <div className="div3"><h3>{precio}</h3></div>
                <div className="div4"><p>{descripcion}</p></div>
                <span>En carrito: {contador}</span>
                <span>Stock disponible: {disponibles}</span>
                <ItemCount stock={disponibles} onSaveData={saveDataHandler}/>
            </div>
            <Link to="/cart"><button className="finalizar-compra">Finalizar Compra</button></Link>
        </>


    )
}

export default ItemDetail;
