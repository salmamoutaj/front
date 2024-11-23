import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import collier_banner from './Components/Assets/banner_colliers.png'
import bague_banner from './Components/Assets/banner_bagues.png'
import bracelet_banner from './Components/Assets/banner_bracelets.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/colliers' element={<ShopCategory banner={collier_banner} category="collier"/>}/>
          <Route path='/bagues' element={<ShopCategory banner={bague_banner} category="bague"/>}/>
          <Route path='/bracelets' element={<ShopCategory banner={bracelet_banner} category="bracelet"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
