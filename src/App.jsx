import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
function App() {
  return (
<>
  <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/detalle/:idProducto" element={ <ItemDetailContainer/>} />
          <Route path="/marca/:marcaParam" element={ <ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
  </main>
</>

  )
}
export default App
