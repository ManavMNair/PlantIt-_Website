import React from 'react'
import './Best_seller.css'
// import data_product from '../Assets/ShopPage/sample_data'
import Item from '../Item/Item'
import data_product from '../Assets/ShopPage/js-files/sellerDB'

const Best_seller = () => {
  return (
    <div className='Best_seller'>
      <h2>Best Sellers</h2>
      <hr />
        <div className="Best_seller_items">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.storeName} image={item.image} slogan={item.slogan}/>
            })}
        </div>
      
    </div>
  )
}

export default Best_seller
