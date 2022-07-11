import Item from "../item/Item.js";
import "./ItemList.css"

const ItemList = ({productos}) => {
    return (
        <div className="grid">
            {productos && productos.map(i =><Item key={i.id} producto={i.nombre} categoria={i.categoria} precio= {i.precio} img={i.img} id={i.id}/>)} 
        </div>
    )
}

export default ItemList;