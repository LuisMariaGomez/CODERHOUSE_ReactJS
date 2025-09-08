import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
    <>
        <Navbar/>
        <ItemListContainer Saludo={"Bienvenido"} Descripcion={"Proxiamamente una tienda de articulos de caza con arco"}/>
    </>
  )
}
export default App
