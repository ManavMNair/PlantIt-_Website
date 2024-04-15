import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      
        <img src={props.image} alt="" />
        <h6>{props.name}</h6>
        <p>{props.slogan}</p>
      
    </div>
  )
}

export default Item
