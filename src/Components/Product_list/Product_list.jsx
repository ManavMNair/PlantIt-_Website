import React from 'react'
import './Product_list.css'
import { Link } from 'react-router-dom'

const Product_list = (props) => {
  
  return (
    <div className='Product_list'>
      
        <Link to={`/product/${props.id}`} ><img src={props.image} alt="" onClick={window.scrollTo(0,0)}/></Link>
        <p>{props.name}</p>
        <p className='subcategory'>{props.subcategory} </p>
        <h6>{props.category}</h6>
        <p>₹{props.price}</p>
      
    </div>
  )
}

export default Product_list
