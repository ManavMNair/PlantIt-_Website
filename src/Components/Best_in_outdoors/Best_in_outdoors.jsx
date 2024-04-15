import React from 'react'
import './Best_in_outdoors.css'
import product_data from '../Assets/ShopPage/js-files/outdoor-data'
import Recomentations from '../Recomentation/Recomentations'

const Best_in_outdoors = () => {
  return (
    <div className='Best_in_outdoors'>
      <h2>Best in Outdoors</h2>
      <hr />
        <div className="Best_in_outdoors_items">
            {product_data.map((item,i)=>{
                return <Recomentations key={i} id={item.id}  image={item.image} category={item.category} attribute={item.attribute} />
            })}
        </div>
      
    </div>
  )
}

export default Best_in_outdoors
