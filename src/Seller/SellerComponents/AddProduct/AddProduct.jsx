import React, { useContext, useState } from 'react';
import './AddProduct.css';
import upload_icon from '../../SellerAssets/photo.png'
import { UserContext } from '../../../Context/UserContext';
import { jwtDecode } from 'jwt-decode'
const jwt = require("jsonwebtoken");



const AddProduct = () => {
  const token = localStorage.getItem('auth-token')
  console.log("Token>>>", token);

  const decodedToken = jwtDecode(token);
  console.log("Decoded data >>", decodedToken);
  const sellerId = decodedToken.seller.sellerId;

  console.log("SellerId>>>", sellerId);
  // const {user,setUser} = useContext(UserContext);

  // const userData = user();

  const [image, setImage] = useState(false)
  const [productDetails, setProductDetails] = useState({
    sellerId: sellerId,
    productName: "",
    imageUrl: "",
    category: "",
    subcategory: "",
    price: "",
    quantity: 0,
    description: ""


  })

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
  }
  const imageHandler = (e) => {
    setImage(e.target.files[0]);

  }

  const Add_Product = async () => {

    const requiredFields = ['productName', 'price', 'quantity', 'description', 'category', 'subcategory'];
    const missingFields = requiredFields.filter(field => !productDetails[field]);

    if (missingFields.length > 0) {
      alert(`Please fill out all required fields: ${missingFields.join(', ')}`);
      return;
    }
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    if (image) {
      formData.append('product', image);
      await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      }).then((resp) => resp.json()).then((data) => { responseData = data })
    } else{
      alert('please upload a product Image.');
      return;
    }
    if (responseData.success) {
      product.imageUrl = responseData.image_url
      console.log(product)
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        console.log(product)
        data.success ? alert("Product Added Successfully") : alert("Failed")
      })
    }


  }
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input onChange={changeHandler} type="text" name="productName" id="" value={productDetails.productName} required />
      </div>

      <div className="category_subcategory">


        <div className="addproduct-itemfield">
          <p>Category</p>
          <select type="text" name="category" id="" value={productDetails.category} className='addproduct-selector' onChange={changeHandler} required>
            <option value="">--Select--</option>
            <option value="indoor plants">Indoor Plants</option>
            <option value="outdoor plants">Outdoor Plants</option>
            <option value="Ayurvedic Plants">Ayurvedic Plants</option>
            <option value="Seeds">Seeds</option>
            <option value="Ayurvrdic Products">Ayurvedic Products</option>
            <option value="Accessories & Tools">Accessories & Tools</option>
          </select>
        </div>
        <div className="addproduct-itemfield"  >
          <p>Subcategory</p>
          <select type="text" value={productDetails.subcategory} name="subcategory" id="" className='addproduct-selector' onChange={changeHandler} required>
            <option value="">--Select--</option>
            <option value="Best in air purifying">Best in air purifying</option>
            <option value="Best in low maintenance">Best in low maintenance</option>
            <option value="Best in fragrant">Best in fragrant</option>
            <option value="Best in trailing/hanging">Best in trailing/hanging</option>
            <option value="Ayurvedic Plants">Ayurvedic Plants</option>
            <option value="Great deals in vegetables">Great deals in vegetables</option>
            <option value="Best in herbs">Best in herbs</option>
            <option value="tools">Tools</option>
            <option value="fertiliZers">Fertilizers</option>
            <option value="seeds">Seeds</option>
          </select>
        </div>
      </div>
      <div className="price-quantity">
        <div className="addproduct-itemfield" >
          <p>Price</p>
          <input onChange={changeHandler} value={productDetails.price} type="text" name="price" id="" required />
        </div>

        <div className="addproduct-itemfield">
          <p>Quantity</p>
          <input type="number" name="quantity" id="" onChange={changeHandler} value={productDetails.quantity} required></input>
        </div>

      </div>

      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea type="text" className='addproduct-description' name="description" id="description" rows="10" placeholder='Type here...' value={productDetails.description} onChange={changeHandler} required>

        </textarea>
      </div>


      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_icon} alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' required hidden />
      </div>
      <button className='addproduct-button' onClick={() => { Add_Product() }}>Add Product</button>

    </div>
  );
};

export default AddProduct;
