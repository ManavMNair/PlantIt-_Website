import React from 'react'
import './Accessories.css'
// import data_product from '../Assets/ShopPage/sample_data'
import product_data from '../Assets/ShopPage/js-files/accessories'

import Recomentations from '../Recomentation/Recomentations'

const Accessories = () => {
  return (
    <div className='accessories'>
      <h2>Tools & Accessories</h2>
      <hr />
        <div className="accessories_items">
            {product_data.map((item,i)=>{
                return <Recomentations key={i} id={item.id}  image={item.image} category={item.category} attribute={item.attribute} />
            })}
        </div>
      
    </div>
  )
}

export default Accessories
