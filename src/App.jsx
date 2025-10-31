import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import { CartProvider } from './context/cartContext';
import CartContainer from './components/CarttContainer/CartContaines';
import { subirProductosAFiresote } from './data/firebase';

function App() {
  // subirProductosAFiresote();
  return (
<>
  <main>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/detalle/:idProducto" element={ <ItemDetailContainer/>} />
          <Route path="/marca/:marcaParam" element={ <ItemListContainer/>} />
          <Route path="/cart" element={ <CartContainer/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </main>
</>

  )
}
export default App
