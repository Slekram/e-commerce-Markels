import { useCartContext } from "../../contexts/cart-context";
import "./CartItem.css";
import { setStock } from "../../services/firestore";


const CartItem = ({stock, producto, cantidad, id, img, precio, subtotal}) => {

    const cartCtx = useCartContext();

    const remover = (id) =>{
        let recibirStock= cartCtx.removeItem(id);
        console.log(recibirStock);
        console.log(stock);
        let restablecerStock= recibirStock + stock;
        console.log(restablecerStock);
        setStock(id, restablecerStock);
        cartCtx.setearContador();
    }

    return (
        <div className="item-cart-container">
            <div className="img-item-container">
                <img src={img} alt={producto}></img>
            </div>
            <div className="container-item-descripcion">
                <span>Producto: {producto}</span>
                <span>Precio unitario: {precio} $</span>
                <span>Cantidad: {cantidad}</span>
                <span>Subtotal: {subtotal} $</span>
                <button className="comun" onClick={()=>remover(id)}>Remover Item</button>
            </div>
        </div>
    )
}

export default CartItem;