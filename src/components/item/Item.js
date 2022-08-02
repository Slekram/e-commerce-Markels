import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"
import { Link } from "react-router-dom";

const Item = ({producto, precio, img, categoria, id}) => {

    return (
        <Link to={`/item/${id}`}>
            <div className="card">
                <div className="content">
                    <div className="img-container">
                        <img alt={producto} src={img}></img>
                    </div>
                    <h3>{producto}</h3>
                    <span>Categoria: {categoria}</span>
                    <span>Precio: {precio} </span>
                    <ItemCount></ItemCount>
                </div>
            </div>
        </Link>
    )
}

export default Item;