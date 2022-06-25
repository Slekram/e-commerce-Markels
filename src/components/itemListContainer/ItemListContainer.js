import "./ItemListContainer.css";
import ItemCount from "../itemCount/itemCount";


const ItemListContainer = ({nombre}) => {
    
    return (
        <section className="ItemListContainer">
            <h2>Catalogo de Productos</h2>
            <p>Bienvenido {nombre}, este es nuestro catalogo actual de productos</p>
            <div className="cardContainer">
                <ItemCount/>
                <ItemCount/>
            </div>
        </section>
    )
}

export default ItemListContainer;