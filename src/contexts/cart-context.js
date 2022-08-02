import {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const estadoInicial = [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(estadoInicial);
    const [contador, setContador] = useState(0);
    const [isCartVacio, setIsCartVacio] = useState(true);
    
    


    const addItem = (item) => {
        const idBuscado = item.id;
        const cantidadAgregada = item.cantidad;
        
        let buscarCarrito = cart.some((el)=>el.id === idBuscado);
        
        if (buscarCarrito) {
            let indexCarrito = cart.findIndex((el)=>el.id===idBuscado);
            cart[indexCarrito].cantidad += cantidadAgregada;
            setContador(contador + cantidadAgregada);
        }else {
            cart.push(item);
            setCart(cart);
            setIsCartVacio(false);
        }
    }

    const removeItem = (idItem) => {
        let findIndexCarrito = cart.findIndex((el) => el.id === idItem);
        cart.splice(findIndexCarrito, 1);
        setCart(cart);
    }

    const clearItem = () => {
        setCart ([]);
        setIsCartVacio(true);
        setContador(0);
    }

    const getTotal = () => {
        let subtotal = 0;
        let total = 0;
        cart.forEach((e)=>{
            subtotal = parseInt(e.subtotal);
            total = total + subtotal;
        })
        return total;
    }

    const setearContador = () => {

        if (cart.length>0) {
            let cartReduce= cart.reduce((acc, el) => acc + el.cantidad, 0);
            setContador(cartReduce);
            console.log("estoy seteando el contador en un valor nuevo");
            console.log(contador);
        }else {
            setContador(0);
            console.log("estoy seteando el contador en 0");
            console.log(contador);
        }
    }

    return (
        <CartContext.Provider value={{cart, isCartVacio, contador, setearContador, addItem, clearItem, removeItem, getTotal}}>
            {children}
        </CartContext.Provider>

    )

}