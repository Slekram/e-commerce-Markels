import "./ItemListContainer.css"

const ItemListContainer = ({nombre}) => {
    return (
        <section className="ItemListContainer">
            <h2>Catalogo de Productos</h2>
            <p>Bienvenido {nombre}, este es nuestro catalogo actual de productos</p>
        </section>
    )
}

export default ItemListContainer;