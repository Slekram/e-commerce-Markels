import "./ItemDetail.css"


const ItemDetail = ({nombre, img, precio, descripcion}) => {
    return (

            <div className="gridItemDetail">
                <div className="div1"><img src={img} alt={nombre}></img></div>
                <div className="div2"><h2>{nombre}</h2></div>
                <div className="div3"><h3>{precio}</h3></div>
                <div className="div4"><p>{descripcion}</p></div>
            </div>

    )
}

export default ItemDetail;
