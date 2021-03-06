import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";

const ItemDetail = ({producto, img, precio, descripcion, id}) => {
    
    const [contadorCarrito, setContadorCarrito] = useState(0)

    const cartCtx = useCartContext();

    const saveDataHandler = (count) => {
        const carritoData = {
            id: `${id}`, 
            producto: `${producto}`,
            cantidad: count,
            precio: `${precio}`,
            img: `${img}`,
            subtotal: `${precio*count}`
        }
        setContadorCarrito(count);
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
                <span>En carrito: {contadorCarrito}</span>
                <ItemCount onSaveData={saveDataHandler}/>
            </div>
            <Link to="/cart"><button className="finalizar-compra">Finalizar Compra</button></Link>
        </>


    )
}

export default ItemDetail;
