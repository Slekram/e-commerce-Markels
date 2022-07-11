import ItemCount from "../itemCount/itemCount";
import "./Item.css"


const Item = ({producto, precio, img, categoria, id}) => {

    return (
        <div className="card">
            <div className="content">
                <div className="imgContainer">
                    <img alt={producto} src={img}></img>
                </div>
                <h3>{producto}</h3>
                <span>Categoria: {categoria}</span>
                <span>Precio: {precio} </span>
                <ItemCount></ItemCount>
            </div>
        </div>
    )
}

export default Item;