import {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const estadoInicial = [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(estadoInicial);
    const [contadorWidget, setContadorWidget] = useState(0);
    const [isCartVacio, setIsCartVacio] = useState(true)

    const addItem = (item) => {
        const idBuscado = item.id;
        const cantidadAgregada = item.cantidad;
        
        let buscarCarrito = cart.some((el)=>el.id === idBuscado);
        
        if (buscarCarrito) {
            let indexCarrito = cart.findIndex((el)=>el.id===idBuscado);
            cart[indexCarrito].cantidad = cart[indexCarrito].cantidad + cantidadAgregada;
        }else {
            cart.push(item);
            setCart(cart);
            setIsCartVacio(false);
        }
        setContadorWidget(contadorWidget + cantidadAgregada);
    }

    const removeItem = (idItem) => {
        if (cart.length > 0){
            const newCarrito = [...cart].filter((e)=>e.id !== idItem);
            console.log(newCarrito);
            setCart(newCarrito);
            console.log(cart);
            getCantidadTotal();
        }else{
            setIsCartVacio(true);
            setContadorWidget(0);
        }
    }

    const clearItem = () => {
        setCart ([]);
        setContadorWidget(0);
        console.log(cart);
        setIsCartVacio(true);
    }

    const getTotal = () => {
        let subtotal = 0;
        let total = 0;
        cart.forEach((e)=>{
            subtotal = parseInt(e.subtotal);
            total = total + subtotal;
        })
        console.log(total);
        return total;
    }

    const getCantidadTotal = () => {
        const cantidadTotal = cart.reduce((acc,el)=>acc + el.cantidad);
        console.log(cantidadTotal);
        setContadorWidget(cantidadTotal);
    }

    return (
        <CartContext.Provider value={{cart, isCartVacio, contadorWidget, addItem, clearItem, removeItem, getTotal}}>
            {children}
        </CartContext.Provider>

    )

}