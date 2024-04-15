import React from 'react'
import './RelatedProducts.css'
import product_data from '../Assets/ShopPage/js-files/allProductsdata'
import Product_list from '../Product_list/Product_list';

const RelatedProducts = (props) => {
    const {product} = props;

    const trimy = (product.subcategory.replaceAll(/[-\s]/g, '')).toLowerCase()

    const filteredData = product_data.filter(x => {
        const trimx = (x.subcategory.replaceAll(/[-\s]/g, '')).toLowerCase()
        return trimx === trimy 
    })

  return (
    <div className='relatedproducts'>
        <hr />
        <div className="heading">
            <h1>Related products</h1>
            <hr />
        </div>
        
      <div className="relatedproducts-items">
        {filteredData.map((item,i)=>{
            return <Product_list key={item.productId} id={item.productId} name={item.productName} image={item.imageUrl} category={item.category} subcategory={item.subcategory} price={item.price} />

        })}

      </div>
    </div>
  )
}

export default RelatedProducts
