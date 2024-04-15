import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Homepage/LOGO-Final-PhotoRoom.png-PhotoRoom.png'
import './Navbar.css'
import {showSideBar,hideSideBar} from '../Assets/ShopPage/js-files/navbarScript'
const Navbar = () => {
    const[menu,setMenu] = useState("Home");

    const handleShowSidebar = (e) => {
      e.preventDefault();
      showSideBar();
    };
  
    const handleHideSidebar = (e) => {
      e.preventDefault();
      hideSideBar();
    };
    
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <a href="/"><img src={logo} alt="Plant It"/></a>
        
      </div>
      <div>
        <ul className="nav-menu-sidebar">
        {/* <a href="/"><img src={logo} alt="Plant It"/></a> */}
        <div className="nav-menu-items">
            <li onClick={hideSideBar} className='menu-icon'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
            <li onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration:'none'}} to='/Shop'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("About")}}><Link style={{ textDecoration:'none'}} to='/AboutUs'>About Us</Link>{menu==="About"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Seller")}}><Link style={{ textDecoration:'none'}} to='/Become_A_Seller'>Become a Seller</Link>{menu==="Seller"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Login")}}><Link style={{ textDecoration:'none'}} to='/Login'>SignUp</Link>{menu==="Login"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Cart")}}><Link style={{ textDecoration:'none'}} to='/Cart'>Join</Link>{menu==="Cart"?<hr/>:<></>}</li>
        </div>
            
        </ul>
        <ul className="nav-menu">
            <li className='hideOnMobile' onClick={()=>{setMenu("Shop")}}><Link style={{ textDecoration:'none'}} to='/Shop'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
            <li className='hideOnMobile' onClick={()=>{setMenu("About")}}><Link style={{ textDecoration:'none'}} to='/AboutUs'>About Us</Link>{menu==="About"?<hr/>:<></>}</li>
            <li className='hideOnMobile' onClick={()=>{setMenu("Seller")}}><Link style={{ textDecoration:'none'}} to='/Become_A_Seller'>Become a Seller</Link>{menu==="Seller"?<hr/>:<></>}</li>
            <li className='hideOnMobile' onClick={()=>{setMenu("Login")}}><Link style={{ textDecoration:'none'}} to='/Login'>SignUp</Link>{menu==="Login"?<hr/>:<></>}</li>
            <li className='hideOnMobile' onClick={()=>{setMenu("Cart")}}><Link style={{ textDecoration:'none'}} to='/Cart'>Join</Link>{menu==="Cart"?<hr/>:<></>}</li>
            <li className='menu-icon' onClick={showSideBar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" fill=''/></svg></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
