import { getProductById } from "../../data/mockAPI.js";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import './ItemDetailContainerCss.css'
function ItemDetailContainer(){
    const {idProducto} = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        getProductById(idProducto).then((data) => {
            setProducto(data);
        });
    }, []);

    console.log(`Id del producto: ${idProducto}`);

    return(
        <div className="itemDetailContainer">
            <img className="itemDetailImage" src={producto.img} alt={producto.nombre}/>
            <div className="itemDetailDescription">
                <h2>{producto.nombre}</h2>
                <h3>Precio: ${producto.precio}</h3>
                <h3>Marca: {producto.marca}</h3>
                <h3>Potencia: {producto.potencia}</h3>
                <p>{producto.descripcion}</p>
                <h4>Stock disponible: {producto.stock}</h4>
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetailContainer;