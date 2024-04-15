import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import product_data from '../Assets/ShopPage/js-files/allProductsdata';
import Product_list from '../Product_list/Product_list';
import './Subcategory.css'
import Navbar_shop from '../Navbar_shop/Navbar_shop';
function Subcategory() {

    const [subCat, setState] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const subCat = location.state;

        
        if (!location.state)
            navigate('/shop')

        
        console.log("subcat", subCat)

        const trimy = (subCat.replaceAll(/[-\s]/g, '')).toLowerCase()

        const filteredData = product_data.filter(x => {
            const trimx = (x.subcategory.replaceAll(/[-\s]/g, '')).toLowerCase()
            return trimx == trimy            
        });
        setData(filteredData);
        console.log(filteredData)
        




    }, [location])




    return (
        <div>
            <Navbar_shop/>
            <div className='subcategory-items'>
                {data.map((item,i)=>{
                    return <Product_list key={item.productId} id={item.productId} name={item.productName} image={item.imageUrl} category={item.category} subcategory={item.subcategory} price={item.price} />
                })}
            </div>
        </div>
        
        // <div className='container'>
        //     {
        //         data.map(x =>
        //             <div key={x.productId} className='card'>
                        
        //                 <div className='cardname'>{x.productName}</div>

        //             </div>
        //         )
        //     }

        // </div>
    )
}

export default Subcategory;