import React from 'react'
import Navbar_shop from '../Components/Navbar_shop/Navbar_shop'
import Best_seller from '../Components/Best_sellers/Best_seller'
import Best_in_Indoors from '../Components/Best_in_Indoors/Best_in_Indoors'
import Best_in_outdoors from '../Components/Best_in_outdoors/Best_in_outdoors'
import Accessories from '../Components/Accessories/Accessories'
import PopularCategory from '../Components/Popularategory/Popularcategory'
import PeoplesChoice from '../Components/PeoplesChoice/PeoplesChoice'

const Shop = () => {
  return (
    <div>
      <Navbar_shop/>
      <PopularCategory/>
      <PeoplesChoice/>
      <Best_seller/>
      
      {/* <Best_in_Indoors/>
      <Best_in_outdoors/> */}
      {/* <Accessories/> */}
      
    </div>
  )
}

export default Shop
