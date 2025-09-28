import './ComponentsStyles/ComponentsCss.css'
function Item({item}){
    return(
        <div className="itemCard">
            <img className="itemImage" src={item.img} alt={item.nombre} />
            <h3 className="itemName">{item.nombre}</h3>
            <div className="itemDetails">
                <p className="itemPrice">Precio: ${item.precio}</p>
                <p className="itemPotency">Potencia: {item.potencia}</p>
                <p className="itemBrand">Marca: {item.marca}</p>
                <p className="itemDescription">Descripción: {item.descripcion}</p>
                <p className="itemStock">Stock: {item.stock}</p>
            </div>
        </div>
    )
}

export default Item;