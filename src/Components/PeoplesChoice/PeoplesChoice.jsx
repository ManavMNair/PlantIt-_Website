import React from 'react'
import './PeoplesChoice.css'
import product_data from '../Assets/ShopPage/js-files/peopleschoice'
import Recomentations from '../Recomentation/Recomentations'

const PeoplesChoice = () => {
  return (
    <div className='PeoplesChoice'>
        <div className="PeoplesChoice-heading">
            <h2>People's Choice</h2>
            <hr />

        </div>
      
        <div className="PeoplesChoice_items">
            {product_data.map((item,i)=>{
                return <Recomentations key={i} id={item.id}  image={item.image} category={item.category} attribute={item.attribute} />
            })}
        </div>
      
    </div>
  )
}

export default PeoplesChoice
