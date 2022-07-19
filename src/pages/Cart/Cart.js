import { useCartContext } from "../../contexts/cart-context";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {

    const cartCtx = useCartContext();

    const limpiarCarrito = () =>{
        cartCtx.clearItem()
    }

    console.log(cartCtx.isCartVacio);

    return (
        cartCtx.isCartVacio ? (<Link to="/"><h2 style={{color: "black"}}>El carrito se encuentra vacio</h2> <button>Volver a catalogo</button></Link>) :
        (
            <div>
                {cartCtx.cart.map(e =><CartItem key={e.id} id={e.id} producto={e.producto} cantidad={e.cantidad} precio={e.precio} img={e.img} subtotal={e.subtotal}></CartItem>)}
                <span>Total: {cartCtx.getTotal()} $</span>
                <button onClick={limpiarCarrito}>Limpiar carrito</button>
            </div>
        )
    )
}

export default Cart;