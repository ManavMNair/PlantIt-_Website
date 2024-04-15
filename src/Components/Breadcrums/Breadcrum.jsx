import React from 'react'
import './Breadcrums.css'
import arrow from '../Assets/ShopPage/arrow-point-to-right.png'
import { Link } from 'react-router-dom'
const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='breadcrum'>
        
      <p><Link to={'/'}>Home</Link> <img src={arrow} alt="&gt;" /><Link to={'/shop'}>Shop</Link>  <img src={arrow} alt="&gt;"/> <Link to={`/Shopcategory/Popularcategory`} state={product.category}>{product.category} </Link> <img src={arrow} alt="&gt;"/> {product.productName}</p>
    </div>
  )
}

export default Breadcrum
