import React from 'react'
import './Popularcategory.css'
import categoryData from '../Assets/ShopPage/js-files/categories'
import CategoryItem from '../categoryItem/categoryItem'

const PopularCategory = () => {
  
  return (
    
      <div className='PopularCategory'>
        <div className="static">
        <h2>Popular Categories</h2>
        <hr />
        </div>
        
          <div className="PopularCategory_items">
              {categoryData.map((item,i)=>{
                  return <CategoryItem key={i} id={item.id}  image={item.imgUrl} name={item.name}/>
                  
              })}
          </div>
        
      </div>
  )
}

export default PopularCategory
