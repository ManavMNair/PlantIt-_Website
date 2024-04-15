import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/Shopcontext'
import cross_icon from '../Assets/ShopPage/close.png'

const CartItem = () => {
  const {getTotalAmount,all_products,cartItems,removeFromCart,deleteCartItem}  = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e)=>{
        if(cartItems[e.productId]>0){
          return <div className="">
                    <div className="cartitems-format cartitems-format-main">
                      <img src={e.imageUrl} alt="" className='carticon-product-icon'/>
                      <p>{e.productName}</p>
                      <p>₹{e.price}</p>
                      <button className='cartitems-quantity'>{cartItems[e.productId]}</button>
                      <p>₹{e.price * cartItems[e.productId]}</p>
                      <img src={cross_icon} alt="" onClick={()=>{removeFromCart(e.productId)}} className='cartitems-remove'/>
                    </div>
                    <hr />
                  </div>
        }
        return null;

      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h2>PRICE DETAILS</h2>
          <div>
            <div className="cartitems-total-item">
              <p>Price</p>
              <p>₹{getTotalAmount()}</p>
            </div>
            <div className="cartitems-total-item">
              <p>Discount</p>
              <p>₹{0}</p>
            </div>
            <div className="cartitems-total-item">
              <p>Delivery Charges</p>
              <p>Free</p>
            </div>
            <div className="cartitems-total-item">
              <h3>Total Amount</h3>
              <p>₹{getTotalAmount()}</p>
            </div>
          </div>
          <button>PLACE ORDER</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
