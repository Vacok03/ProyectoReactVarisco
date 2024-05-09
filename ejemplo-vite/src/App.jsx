import { Home } from './components/Pages/Home/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navegation } from './components/Layout/Navegation/Navegation.jsx'
import { Footer } from './components/Layout/Footer/Footer.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { Cart } from './components/Cart/Cart.jsx'
import { Error } from './components/Error/Error.jsx'

const App = () => {

  return  ( 
    <BrowserRouter>
      <Navegation/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='*' element={<Error/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
};

export default App;