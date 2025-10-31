import { getProductById } from "../../data/firebase";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import './ItemDetailContainerCss.css'
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';
import ItemCount from "../ItemCount/ItemCount";
function ItemDetailContainer(){
    const {idProducto} = useParams();
    const [producto, setProducto] = useState({});
    const { agregarAlCarrito } = useContext(cartContext);

    useEffect(() => {
        getProductById(idProducto).then((data) => {
            setProducto(data);
        });
    }, []);

    function onAddToCart(quantity) {
        agregarAlCarrito(producto, quantity);
    }
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
                <ItemCount 
                    max={producto.stock} 
                    min={1} 
                    onAddToCart={onAddToCart} 
                />
                {/* <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button> */}
            </div>
        </div>
    )
}

export default ItemDetailContainer;