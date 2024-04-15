import React from 'react'
import './Recomentations.css'
import { Link } from 'react-router-dom'

const Recomentations = (props) => {
  return (
    <div className='recommendations'>
      <Link to={`/Shopcategory/Subcategory`} state={props.category}>
      <img src={props.image} alt="" />
      </Link>

      <p>{props.category}</p>
      <h6>{props.attribute}</h6>
    
    </div>
  )
}

export default Recomentations
