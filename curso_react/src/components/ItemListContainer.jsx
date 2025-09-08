import './ComponentsStyles/ComponentsCss.css'

export default function Navbar({Saludo, Descripcion}){
    return(
        <div className='itemListContainer'>
            <h1>{Saludo}</h1>
            <h2>{Descripcion}</h2>
        </div>
    )
}

