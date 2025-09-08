import './ComponentsStyles/ComponentsCss.css'
import logo from "../assets/logo.png";
import CartWidget from './CartWidget';

export default function Navbar(){
    return(
        <header>    
            <div className='logoDiv'>
                <a href='#'><img className="logo" src={logo} alt="LogoPagina"></img></a>
                <div>
                    <p>White Tail</p>
                    <p>Archery Shop</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="">Arcos</a></li>
                    <li><a href="">Flechas</a></li>
                    <li><a href="">Accesorios</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
                
    )
}