import { useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";

const ItemDetail = ({nombre, img, precio, descripcion, id}) => {
    
    const [contadorCarrito, setContadorCarrito] = useState(0)

    const cartCtx = useCartContext();

    const saveDataHandler = (count) => {
        const carritoData = {
            id: `${id}`, 
            producto: `${nombre}`,
            cantidad: count,
            precio: `${precio}`,
            img: `${img}`,
            subtotal: `${precio*count}`
        }
        setContadorCarrito(count);
        cartCtx.addItem(carritoData);
    }
    
    return (
        <>
            <div className="gridItemDetail">
                <div className="div1"><img src={img} alt={nombre}></img></div>
                <div className="div2"><h2>{nombre}</h2></div>
                <div className="div3"><h3>{precio}</h3></div>
                <div className="div4"><p>{descripcion}</p></div>
                <span>En carrito: {contadorCarrito}</span>
                <ItemCount onSaveData={saveDataHandler}/>
            </div>
            <Link to="/cart"><button className="finalizarCompra">Finalizar Compra</button></Link>
        </>


    )
}

export default ItemDetail;
