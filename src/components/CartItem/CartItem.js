import { useCartContext } from "../../contexts/cart-context";
import "./CartItem.css"

const CartItem = ({producto, cantidad, id, img, precio, subtotal}) => {
    
    const cartCtx = useCartContext();

    const remover = (id) =>{
        cartCtx.removeItem(id)
        cartCtx.setearContador();
    }

    return (
        <div className="itemContainer">
            <div className="imgItemContainer">
                <img src={img} alt={producto}></img>
            </div>
            <div className="containerItemDescripcion">
                <span>Producto: {producto}</span>
                <span>Precio unitario: {precio} $</span>
                <span>Cantidad: {cantidad}</span>
                <span>Subtotal: {subtotal} $</span>
                <button onClick={()=>remover(id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem;