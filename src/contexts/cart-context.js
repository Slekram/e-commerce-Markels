import {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const estadoInicial = [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(estadoInicial);

    const addItem = (item) => {
        const idBuscado = item.id;
        const cantidadAgregada = item.cantidad; 
        console.log(idBuscado);
        
        let buscarCarrito = cart.some((el)=>el.id === idBuscado);
        console.log(buscarCarrito);
        
        if (buscarCarrito) {
            let indexCarrito = cart.findIndex((el)=>el.id===idBuscado);
            console.log(indexCarrito);
            cart[indexCarrito].cantidad = cart[indexCarrito].cantidad + cantidadAgregada;
        }else {
            cart.push(item);
            setCart(cart);
        }
        console.log(cart);
    }

    const removeItem = (idItem, cantidadRemover) => {
        const indexRemover = cart.findIndex((el)=>el.id === idItem);
        if(cart[indexRemover].cantidad < cantidadRemover){
            alert("Usted no tiene esa cantidad de items en el carrito. Ingrese una cantidad correcta")
        }else{
            if(cart[indexRemover].cantidad == cantidadRemover){
                setCart (estadoInicial);
            }else{
                cart[indexRemover].cantidad = cart[indexRemover].cantidad - cantidadRemover;
            }
        }
        
    }

    const clearItem = () => {
        setCart (estadoInicial);
    }

    return (
        <CartContext.Provider value={{cart, addItem, clearItem, removeItem}}>
            {children}
        </CartContext.Provider>

    )

}