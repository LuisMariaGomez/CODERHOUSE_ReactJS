import './ComponentsStyles/ComponentsCss.css'
import logo from "../assets/logo.png";
import CartWidget from './CartWidget';
import { Link } from 'react-router';

export default function Navbar(){
    return(
        <header>    
            <div className='logoDiv'>
                <Link to='/'><img className="logo" src={logo} alt="LogoPagina"></img></Link>
                <div>
                    <p>White Tail</p>
                    <p>Archery Shop</p>
                </div>
            </div>
            <nav>
            <ul>
                <li><Link className='navLinks' to="/marca/PSE">PSE</Link></li>
                <li><Link className='navLinks' to="/marca/Bear">Bear</Link></li>
                <li><Link className='navLinks' to="/marca/Hoyt">Hoyt</Link></li>
                <li><Link className='navLinks' to="/marca/Mathews">MATHEWS</Link></li>
            </ul>
            </nav>
            <Link to='/cart'>
                <CartWidget/>
            </Link>
            
        </header>
                
    )
}