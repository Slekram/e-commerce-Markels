import { useCartContext } from "../../contexts/cart-context";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from 'react-router-dom';
import { getOrden } from "../../services/Firestore";

const Cart = () => {

    const cartCtx = useCartContext();

    const limpiarCarrito = () =>{
        cartCtx.clearItem();
    }

    const finalizarCompra = (carrito) =>{
        
        let total = cartCtx.getTotal();
        console.log(total);

        let name = prompt("Ingrese su nombre completo");
        let telefono =  prompt("Ingrese su numero de telefono");
        let direccion = prompt("Ingrese su direccion donde recibira el producto");

        let orden = {
            buyer: {name: {name}, telefono: {telefono}, direccion: {direccion}},
            items: {carrito},
            total: {total},
            date: new Date().toISOString(),

        }
        
        getOrden(orden);
        cartCtx.clearItem();
    }

    return (
        cartCtx.isCartVacio ? (<Link to="/"><h2 style={{color: "black"}}>El carrito se encuentra vacio</h2> <button>Volver a catalogo</button></Link>) :
        (
            <div>
                {cartCtx.cart.map(e =><CartItem key={e.id} id={e.id} producto={e.producto} cantidad={e.cantidad} precio={e.precio} img={e.img} subtotal={e.subtotal}></CartItem>)}
                <span>Total: {cartCtx.getTotal()} $</span>
                <button onClick={limpiarCarrito}>Limpiar carrito</button>
                <button onClick={()=>finalizarCompra(cartCtx.cart)}>Finalizar compra</button>
            </div>
        )
    )
}

export default Cart;