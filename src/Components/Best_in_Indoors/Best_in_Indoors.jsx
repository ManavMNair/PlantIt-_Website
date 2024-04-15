import React from 'react'
import './Best_in_Indoors.css'
// import data_product from '../Assets/ShopPage/sample_data'
import product_data from '../Assets/ShopPage/js-files/indoor-data'
import Item from '../Item/Item'
import Recomentations from '../Recomentation/Recomentations'

const Best_in_Indoors = () => {
  return (
    <div className='Best_in_Indoors'>
      <h2>Best in Indoors</h2>
      <hr />
        <div className="Best_in_Indoors_items">
            {product_data.map((item,i)=>{
                return <Recomentations key={i} id={item.id}  image={item.image} category={item.category} attribute={item.attribute} />
            })}
        </div>
      
    </div>
  )
}

export default Best_in_Indoors
