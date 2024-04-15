import React, { useContext } from 'react'
import './ProductDisplay.css'
import cartIcon from '../Assets/ShopPage/potted-plant.png'
import { ShopContext } from '../../Context/Shopcontext'
const ProductDisplay = ({product , seller}) => {
  const {addToCart} = useContext(ShopContext)
    // const {product} = product
    // const {seller} = seller
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
            <img src={product.imageUrl} alt="" />
            <div className="btn">
                <button className='btn' onClick={()=>{addToCart(Number(product.productId))}}>
                    <img src={cartIcon} alt="" className='btnImg'/><span className='btnText'></span>Add To cart
                </button>

            </div>
            
      </div>
      <div className="productdisplay-right">
        <h1>{product.productName}</h1>
        <div className="sellerinfo">
        <p>Seller : </p>
        <h2>{seller.sellerName}</h2>
        </div>
       
        
        <p>{product.category}</p>
        <p className='description'>{product.description}</p>
        <span>₹{product.price}</span>
      </div>
    </div>
  )
}

export default ProductDisplay
