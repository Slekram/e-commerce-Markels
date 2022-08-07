import {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const estadoInicial = [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(estadoInicial);
    const [contador, setContador] = useState(0);
    const [contadorItem, setContadorItem] = useState (0);
    const [contadorStock, setContadorStock] = useState (0);
    const [isCartVacio, setIsCartVacio] = useState(true);
    
    const setearContadorItems = (id) => {
        let items = cart.findIndex ((el) => el.id === id);
        console.log(items);
        if (items>=0){
            setContadorItem (cart[items].cantidad);
            console.log(contadorItem);
        }else{
            setContadorItem (0);
            console.log(contadorItem);
        }
    }

    const addItem = (item) => {
        const idBuscado = item.id;
        const cantidadAgregada = item.cantidad;

        let buscarCarrito = cart.some((el)=>el.id === idBuscado);

        if (buscarCarrito) {
            let indexCarrito = cart.findIndex((el)=>el.id===idBuscado);
            cart[indexCarrito].cantidad += cantidadAgregada;
            //setContadorItem(cart[indexCarrito].cantidad);
            setContador(contador + cantidadAgregada);
        }else {
            cart.push(item);
            setCart(cart);
            //setContadorItem(cantidadAgregada);
            setIsCartVacio(false);
        }
    }

    const removeItem = (idItem) => {
        let findIndexCarrito = cart.findIndex((el) => el.id === idItem);
        let devolverStock = cart[findIndexCarrito].cantidad
        if (cart.length === 1) {
            setIsCartVacio(true);
        }
        cart.splice(findIndexCarrito, 1);
        setCart(cart);
        return devolverStock;
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
        }else {
            setContador(0);
        }
    }

    return (
        <CartContext.Provider value={{cart, contadorItem, isCartVacio, contador, setearContadorItems, setearContador, addItem, clearItem, removeItem, getTotal}}>
            {children}
        </CartContext.Provider>

    )

}