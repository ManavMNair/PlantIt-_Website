import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../SellerAssets/plus2.png'
import list_product from '../../SellerAssets/list2.png'
import edit_profile from '../../SellerAssets/edit2.png'
import order_details from '../../SellerAssets/order2.png'

const Sidebar = ({onAddProductclick,onListProductClick,onEditProfileclick,onOrderDetailsClick}) => {
  return (
    <div className='sidebar'>
            <div className="sidebar-item" onClick={onAddProductclick}>
                <img src={add_product_icon} alt="" />
                <p>Add Product</p>

            </div>
            <div className="sidebar-item" onClick={onListProductClick}>
                <img src={list_product} alt="" />
                <p>Product List</p>
            </div> 
            <div className="sidebar-item" onClick={onEditProfileclick}>
                <img src={edit_profile} alt="" />
                <p>Edit Profile</p>
            </div> 
            <div className="sidebar-item" onClick={onOrderDetailsClick}>
                <img src={order_details} alt="" />
                <p>Order Details</p>
            </div> 
      
     
    </div>
  )
}

export default Sidebar
