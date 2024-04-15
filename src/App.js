
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import About_us from './Pages/About_us';
import Become_A_Seller from './Pages/Become_A_Seller';
// import Join from './Pages/Join';
import React from 'react';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import Shopcategory from './Pages/Shopcategory';
import Subcategory from './Components/Subcategory/Subcategory';
import Category from './Components/Category/Category';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import Dashboard from '../src/Seller/SellerComponents/Dashboard/Dashboard';
import AddProduct from './Seller/SellerComponents/AddProduct/AddProduct';
import ListProduct from './Seller/SellerComponents/ListProduct/ListProduct';
import SellerDetails from './Pages/SellerDetails';
function App() {
  return (
    <div >
      
       <BrowserRouter>
        <Routes>  
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/About_us' element={<About_us/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='/Become_A_Seller' element={<Become_A_Seller/>}/>
          <Route path='/SellerDetails' element={<SellerDetails/>}/>
          <Route path='/Login' element={<LoginSignup/>}/>
          <Route path='/Shopcategory/:category' element={<Shopcategory/>}/>
          <Route path='/Shopcategory/Subcategory' element={<Subcategory/>} />
          <Route path='/Shopcategory/Popularcategory' element={<Category/>} />
          <Route path="/product" element={<SingleProduct/>} >
            <Route path=':productId' element={<SingleProduct/>}/>
          </Route>
          
          {/* Routes for sellers */}
          
          <Route path='/dashboard' element={<Dashboard/>} />
          
          
        </Routes>
       </BrowserRouter>
    </div>
  );
}


export default App;
