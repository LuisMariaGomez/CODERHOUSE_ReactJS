import './ComponentsStyles/ComponentsCss.css'
import logoCarrito from "../assets/carrito.png";
import {Link} from 'react-router';

export default function CartWidget(){
    return(
        <Link to='/carrito' className='carritoDiv'>
            <img className="logoCarrito" src={logoCarrito} alt="LogoCarrito"></img>
            <span className='contadorCarrito'>x</span>
        </Link>
    )
}

