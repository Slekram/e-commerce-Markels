import "./Cart.css"
import { useCartContext } from "../../contexts/cart-context";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartCtx = useCartContext();

    const limpiarCarrito = () =>{
        cartCtx.limpiarStock();
        cartCtx.clearItem();
    }

    return (
        cartCtx.isCartVacio ? (<div className="cart-container"><h2>El carrito se encuentra vacio</h2><Link to="/"><button className="comun">Volver a catalogo</button></Link></div>) :
        (
            <div className="cart-container">
                {cartCtx.cart.map(e =><CartItem key={e.id} stock={e.stockRestante} id={e.id} producto={e.producto} cantidad={e.cantidad} precio={e.precio} img={e.img} subtotal={e.subtotal}></CartItem>)}
                <div>
                    <span className="total">Cantidad de articulos: {cartCtx.contador} UNIDADES</span>
                    <span className="total">Total: {cartCtx.getTotal()} $</span>
                    <div className="btn-container">
                        <button className="danger" onClick={limpiarCarrito}>Limpiar carrito</button>
                        <Link to="/Orden"><button className="susses">Finalizar compra</button></Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default Cart;