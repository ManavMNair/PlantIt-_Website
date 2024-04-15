import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import product_data from '../Components/Assets/ShopPage/js-files/allProductsdata';

const Shopcategory = () => {
  const { subcategory } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(subcategory)
  useEffect(() => {
    if (subcategory) {
      const filteredProducts = product_data.filter(product => product.subcategory === subcategory);
      setFilteredProducts(filteredProducts);
    }
  }, [subcategory]);

  return (
    <div>
      <h2>{subcategory}</h2>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.productId}>
            <img src={product.imageUrl} alt={product.productName} />
            <h3>{product.productName}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopcategory;