import {createContext, useContext, useState} from "react";
import { setStock } from "../services/firestore";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const estadoInicial = [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(estadoInicial);
    const [contador, setContador] = useState(0);
    const [contadorItem, setContadorItem] = useState (0);
    const [isCartVacio, setIsCartVacio] = useState(true);
    
    //Setea el contador del itemDetail por cada producto.
    const setearContadorItems = (id) => {
        let items = cart.findIndex ((el) => el.id === id);
        if (items>=0){
            setContadorItem (cart[items].cantidad);
        }else{
            setContadorItem (0);
        }
    }

    //Se encarga de agregar los productos al carrito, si esta repetido solo aumenta su cantidad.
    const addItem = (item, stock) => {
        const idBuscado = item.id;
        const cantidadAgregada = item.cantidad;
        let buscarCarrito = cart.some((el)=>el.id === idBuscado);

        if (buscarCarrito) {
            let indexCarrito = cart.findIndex((el)=>el.id===idBuscado);
            cart[indexCarrito].cantidad += cantidadAgregada;
            cart[indexCarrito].stockRestante = stock;
            setContador(contador + cantidadAgregada);
        }else {
            cart.push(item);
            setCart(cart);
            setIsCartVacio(false);
        }
    }

    //Funcion que remueve un item particular del carrito y tambien se ve implicada en devolver su stock.
    const removeItem = (idItem) => {
        let findIndexCarrito = cart.findIndex((el) => el.id === idItem);
        let devolverStock = cart[findIndexCarrito].cantidad;
        if (cart.length === 1) {
            setIsCartVacio(true);
        }
        cart.splice(findIndexCarrito, 1);
        setCart(cart);
        return devolverStock;
    }

    //Borra todo el carrito
    const clearItem = () => {
        setCart ([]);
        setIsCartVacio(true);
        setContador(0);
    }

    //Consigue el valor total de la compra
    const getTotal = () => {
        let subtotal = 0;
        let total = 0;
        cart.forEach((e)=>{
            subtotal = parseInt(e.subtotal);
            total = total + subtotal;
        })
        return total;
    }

    //Al finalizar la compra devuelve el stock a la base de datos para que se pueda simular numerosas veces.
    const finalizarCompra = () => {
        cart.forEach((el)=>{
            let id = el.id;
            setStock(id, 10);
        })
    }

    //Devuelve stock de todos los productos que s eencuentran en el carrito cuando este es vaciado por completo.
    const limpiarStock = () => {
        cart.forEach((el)=>{
            let stockActualizado = el.stockRestante + el.cantidad;
            let id = el.id;
            setStock(id, stockActualizado);
        })
    }

    //Se ve implicado en setear el contador del widget.
    const setearContador = () => {

        if (cart.length>0) {
            let cartReduce= cart.reduce((acc, el) => acc + el.cantidad, 0);
            setContador(cartReduce);
        }else {
            setContador(0);
        }
    }

    return (
        <CartContext.Provider value={{cart, contadorItem, isCartVacio, contador, limpiarStock, finalizarCompra, setearContadorItems, setearContador, addItem, clearItem, removeItem, getTotal}}>
            {children}
        </CartContext.Provider>

    )

}