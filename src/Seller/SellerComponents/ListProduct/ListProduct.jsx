import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import removeIcon from '../../../Components/Assets/ShopPage/close.png'





const ListProduct = () => {
  const [allproducts,setAllProducts] = useState([])

  const fetchInfo = async ()=>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json()).then((data)=>{setAllProducts(data)})
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeProduct= async(Id)=>{
    console.log("id>>",Id);
      await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({id:Id})
      })
      await fetchInfo();
  }

  return (
    <>
    <div className='listProduct'>
      <h1>All Product List</h1>
      <div className="listproduct-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <div key={index} className="listproduct-main listproduct-format">
            <img src={product.imageUrl} alt="" className="listproduct-icon" />
            <p>{product.productName}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.quantity}</p>
            <img src={removeIcon} alt="" className="listproduct-remove-icon" onClick={()=>{removeProduct(product.productId)}} />

          </div>
        })}
      </div>
    </div>
    <hr />
    </>
  )
}

export default ListProduct
