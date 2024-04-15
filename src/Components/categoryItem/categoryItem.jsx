import React from 'react'
import './categoryItem.css'
import { Link } from 'react-router-dom'

const CategoryItem = (props) => {
  return (
    <div className='CategoryItem'>
      
      <Link to={`/Shopcategory/Popularcategory`} state={props.name}>
      <img src={props.image} alt="" />
      </Link>
      <h5>{props.name}</h5>
    </div>
  )
}

export default CategoryItem
