import "./itemCount.css"
import { useState } from "react";


const ItemCount = (props) => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(10);

    const sumar = () => {
        if(stock>0){
            setCount(count + 1);
            setStock(stock - 1);
        }else{
            alert("No hay mas stock de este producto")
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
            alert (`Usted agrego al carrito ${count} unidades`)
            props.onSaveData(count);
            setCount(0);
        }else {
            alert ("Su carrito esta vacio")
        }
        
    }

    return(
        <div className="botonera">
            <div className="count">
                <button onClick={restar} className="buttonRest">-</button>
                <p>{count}</p>
                <button onClick={sumar} className="buttonAdd">+</button>
            </div>
            <p>Stock: {stock}</p>
            <button onClick={onAdd} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;