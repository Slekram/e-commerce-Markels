import { useState } from "react";
import { Link } from "react-router-dom";
import { setOrden } from "../../services/firestore";
import { useCartContext } from "../../contexts/cart-context";
import Swal from "sweetalert2";

const Orden = () => {
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newAndress, setNewAndress] = useState("");

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

    const submitHandler = (event) => {
        event.preventDefault();
        if (newName == "" || newPhone == "" || newAndress == ""){
            Swal.fire({
                title: "Error",
                text: "No ingreso alguno de los datos del formulario",
                icon: "error",
            })
        } else {
            let orden = {
                buyer: {name: {newName}, telefono: {newPhone}, direccion: {newAndress}},
                items: {carrito},
                total: {total},
                date: `${new Date().toLocaleDateString()}, ${new Date().getHours()}:${new Date().getMinutes()}Hs`
            }
    
            setOrden(orden, newName);
            cartCtx.clearItem();
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" id="name" class="swal2-input" onChange={nombreHandler} placeholder="Nombre y apellido"></input>
            <input type="text" id="telefono" class="swal2-input" onChange={telefonoHandler}   placeholder="Telefono"></input>
            <input type="text" id="direccion"  class="swal2-input" onChange={direccionHandler}  placeholder="Direccion"></input>
            <button type="submit">Enviar</button>
            <Link to="/cart"><button>Cancelar</button></Link>
        </form>
    )

}

export default Orden;