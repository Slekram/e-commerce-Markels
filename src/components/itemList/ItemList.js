import Item from "../Item/Item.js";
import "./ItemList.css"

const ItemList = ({productos}) => {
    return (
        <div className="grid">
            {productos && productos.map(i =><Item key={i.id} stock={i.stock} producto={i.producto} categoria={i.categoria} precio= {i.precio} img={i.img} id={i.id}/>)} 
        </div>
    )
}

export default ItemList;