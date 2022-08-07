import "./ItemCount.css"
import Swal from "sweetalert2";
import { useState } from "react";



const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(props.stock);

    const sumar = () => {
        if(stock>0){
            setCount(count + 1);
            setStock(stock - 1);
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'No hay mas stock de este producto',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }
    const restar = () => {
        if(count>0){
            setCount(count - 1);
            setStock(stock + 1);
        }
    }

    const onAdd = () => {
        if(count>0){
            Swal.fire({
                title: 'Felicitaciones!',
                text: `Usted agrego al carrito ${count} unidades`,
                icon: 'success',
                confirmButtonText: 'Ok'
            })
            props.onSaveData(count, stock);
            setCount(0);
        }else {
            Swal.fire({
                title: 'Error!',
                text: 'Su carrito esta vacio',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    }

    return(
        <div className="botonera">
            <div className="count">
                <button onClick={restar} className="buttonRest">-</button>
                <p>{count}</p>
                <button onClick={sumar} className="buttonAdd">+</button>
            </div>
            <button onClick={onAdd} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;