import React from 'react'
import logo from '../../../Components/Assets/Homepage/LOGO-Final-PhotoRoom.png-PhotoRoom.png'
import profileIcon from '../../SellerAssets/profile.png'
import './NavbarSeller.css'

const NavbarSeller = () => {
  return (
    <div className='navbarSeller'>
      <img src={logo} alt="" className='logo'/>
      <img src={profileIcon} alt="" className='profile'/>
      
    </div>
  )
}

export default NavbarSeller
