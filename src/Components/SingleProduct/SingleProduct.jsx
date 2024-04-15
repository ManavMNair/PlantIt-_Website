// Component using Context
import React, { useContext } from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrums/Breadcrum'
import { ShopContext } from '../../Context/Shopcontext'
import Navbar_shop from '../Navbar_shop/Navbar_shop'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import seller_data from '../Assets/ShopPage/js-files/sellerDB'
import RelatedProducts from '../RelatedProducts/RelatedProducts'
const SingleProduct = () => {
    const { all_products } = useContext(ShopContext)
    
    const { productId } = useParams();
    console.log(productId)
    const product = all_products.find((e) => e.productId === Number(productId));
    const seller = seller_data.find((e) =>e.sellerId === Number(product.sellerId))
    return (
        <div>
            <Navbar_shop/>
            <Breadcrum product={product}/>
            {/* <h1>{product.productName}</h1> */}
            <ProductDisplay product={product } seller={seller}/>
            <RelatedProducts product={product }/>
        </div>
    );
}

export default SingleProduct;
