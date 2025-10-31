import './ComponentsStyles/ComponentsCss.css'
import logoCarrito from "../assets/carrito.png";
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

export default function CartWidget() {
    const { countCartItems } = useContext(cartContext);
    return (
        <div className='carritoDiv'>
            <img className="logoCarrito" src={logoCarrito} alt="LogoCarrito" />
            <span className='contadorCarrito'>{ countCartItems() }</span>
        </div>
    )
}