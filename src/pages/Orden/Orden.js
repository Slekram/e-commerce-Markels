import "./Orden.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setOrden } from "../../services/firestore";
import { useCartContext } from "../../contexts/cart-context";
import Swal from "sweetalert2";

const Orden = () => {
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAndress, setNewAndress] = useState("");
    const [newMail, setNewMail] = useState("");
    const [newMailConfirm, setNewMailConfirm] = useState("");

    const cartCtx = useCartContext();

    let carrito = cartCtx.cart;

    let total = cartCtx.getTotal();

    const nombreHandler = (event) => {
        setNewName(event.target.value);
    }

    const telefonoHandler = (event) => {
        setNewPhone(event.target.value);
    }
    const direccionHandler = (event) => {
        setNewAndress(event.target.value);
    }

    const mailHandler = (event) => {
        setNewMail(event.target.value);
    }

    const confirmMailHandler = (event) => {
        setNewMailConfirm(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (newName === "" || newPhone === "" || newAndress === "" || newMail === "" || newMailConfirm === ""){
            Swal.fire({
                title: "Error",
                text: "No ingreso alguno de los datos del formulario",
                icon: "error",
            })
        } else {
            if(newMail === newMailConfirm){
                let orden = {
                    buyer: {name: {newName}, telefono: {newPhone}, direccion: {newAndress}, mail: {newMail}},
                    items: {carrito},
                    total: {total},
                    date: `${new Date().toLocaleDateString()}, ${new Date().getHours()}:${new Date().getMinutes()}Hs`
                }

                setOrden(orden, newName);
                cartCtx.finalizarCompra();
                cartCtx.clearItem();
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Los email no coinciden",
                    icon: "error",
                })
            }
        }
    }

    return (
        <div className="form-container">
            <h2>FORMULARIO DE CONTACTO</h2>
            <p>Ingrese los datos necesarios para el envio de los productos seleccionados. <br/> Recibira un numero de orden y en 48 hs los productos llegaran a su hogar. <br/>PAGO SOLAMENTE EN EFECTIVO</p>
            <form onSubmit={submitHandler}>
                <input type="text" className="swal2-input" onChange={nombreHandler} placeholder="Nombre y apellido"></input>
                <input type="text" className="swal2-input" onChange={telefonoHandler}   placeholder="Telefono"></input>
                <input type="text" className="swal2-input" onChange={direccionHandler}  placeholder="Direccion"></input>
                <input type="text" className="swal2-input" onChange={mailHandler}  placeholder="E-Mail"></input>
                <input type="text" className="swal2-input" onChange={confirmMailHandler}  placeholder="Confirmacion E-Mail"></input>
                <div>
                    <button type="submit" className="susses">Enviar</button>
                    <Link to="/cart"><button className="danger">Cancelar</button></Link>
                </div>
            </form>
        </div>
    )

}

export default Orden;