
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Homepage/LOGO-Final-PhotoRoom.png-PhotoRoom.png'
import cartIcon from '../Assets/ShopPage/shopping-bag.png'
import './Navbar_shop.css'
import { ShopContext } from '../../Context/Shopcontext'
const Navbar_shop = () => {
    const[menu,setMenu] = useState("Home");
    const {getTotalCart} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
       <a href="/"><img src={logo} alt="Plant It" /></a> 
      </div>
      <div>
        
        <ul className="nav-menu">
            {localStorage.getItem('auth-token') ?<li onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</li> : <li onClick={()=>{setMenu("Login")}}><Link style={{ textDecoration:'none'}} to='/Login'>Login</Link>{menu==="Login"?<hr/>:<></>}</li>}
            
            <li onClick={()=>{setMenu("Seller")}}><Link style={{ textDecoration:'none'}} to='/Become_A_Seller'>Become a Seller</Link>{menu==="Seller"?<hr/>:<></>}</li>
            
            <li onClick={()=>{setMenu("Cart")}}><Link style={{ textDecoration:'none'}} to='/Cart'>
                <div className="nav-login-cart">
                  <p>Cart</p>
                  <img src={cartIcon} alt="" />
                  <div className="nav-cart-count">{getTotalCart()}</div>
                </div>
              </Link>{menu==="Cart"?<hr/>:<></>}
            </li>
        </ul>
        
      </div>
      
    </div>
  )
}

export default Navbar_shop
