import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './index.css'

function App() {

  return (
<>
  <Navbar />
  <main style={{ paddingTop: '10rem' }}>
    <ItemListContainer
      Saludo="Bienvenido"
      Descripcion="Proxiamamente una tienda de articulos de caza con arco"
    />
  </main>
</>

  )
}
export default App
