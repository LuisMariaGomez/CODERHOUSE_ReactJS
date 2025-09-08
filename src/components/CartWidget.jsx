import './ComponentsStyles/ComponentsCss.css'
import logoCarrito from "../assets/carrito.png";

export default function CartWidget(){
    return(
        <div className='carritoDiv'>
            <img className="logoCarrito" src={logoCarrito} alt="LogoCarrito"></img>
            <span className='contadorCarrito'>x</span>
        </div>
    )
}

