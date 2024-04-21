import React, { useState, useEffect, useContext } from 'react'
import './EditProfile.css'
import upload from '../../SellerAssets/upload.png'
import { UserContext } from '../../../Context/UserContext'
import { jwtDecode } from 'jwt-decode'
import SellerValidation from '../../../Pages/SellerValidation'
const jwt = require("jsonwebtoken");



const EditProfile = () => {
  const [errors,setErrors] = useState({})
  const [profileData, setProfileData] = useState(null);
  const [storeData, setStoreData] = useState({
    sellerId: '',
    storeName: '',
    storeDescription: '',
    storeAddress: '',
    paymentInfo: '',
    storeBannerUrl: ''
  })
  const [image, setImage] = useState(false)
  const {validateSeller2} = SellerValidation()
  const validateform =()=>{
    console.log("Formdata >>",storeData);
    const validateErrors = validateSeller2(storeData)
    setErrors(validateErrors)
    return Object.keys(validateErrors).length === 0;
  }



  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('auth-token')
        console.log("Token>>>", token);

        const decodedToken = jwtDecode(token);
        console.log("Decoded data >>", decodedToken);
        const sellerId = decodedToken.seller.sellerId;
        const response = await fetch(`http://localhost:4000/getprofile?sellerId=${sellerId}`, {
          method: 'GET',
          headers: {
            'content-Type': 'application/json',
          },

        })
        console.log("Response >>>", response);
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          console.log("Current Profiledata>>>", data);
          setStoreData({
            sellerId: sellerId,
            storeName: data.storeName,
            storeDescription: data.storeDescription,
            storeAddress: data.storeAddress,
            paymentInfo: data.paymentInfo,
            storeBannerUrl: data.storeBannerUrl || ''
          })
          // console.log("Form Data>>>", storeData);


        } else {
          console.error("Error fetching seller data L ", response.error)
        }

      } catch (error) {
        console.error('Error fetching profile data : ', error)
      }

    }
    fetchProfileData();
  }, [])
 
    

  const Edit_Profile = async () => {
    if (!validateform()){
      console.log("checking validation function call");
      return
    }
    console.log("Outside validation function call");
    const requiredFields = ['storeName', 'storeDescription', 'storeAddress', 'paymentInfo'];
    const missingFields = requiredFields.filter(field => !storeData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill out all required fields: ${missingFields.join(', ')}`);
      return;
    }
    let responseData;
    const store = storeData;
    let formData = new FormData();
    if (image) {
      formData.append('store', image);
      await fetch('http://localhost:4000/bannerupload', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: formData,
      }).then((res) => res.json()).then((data) => { responseData = data })
      store.storeBannerUrl = responseData.image_url
      await fetch('http://localhost:4000/updatedetails', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-Type': 'application/json',
        },
        body: JSON.stringify(store),
      }).then((res) => res.json()).then((data) => {
        data.success ? alert("Changes Saved successfully") : alert("Something went wrong , please try again ")
      }) 
    } 
    // else {
    //   alert('please upload a product Image.');
    //   return;
    // }
    if (!image) {
      // store.storeBannerUrl = responseData.image_url
      await fetch('http://localhost:4000/updatedetails', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'content-Type': 'application/json',
        },
        body: JSON.stringify(store),
      }).then((res) => res.json()).then((data) => {
        data.success ? alert("Changes Saved successfully") : alert("Something went wrong , please try again ")
      }) 
    }
  }


  //Handling Form changes
  const handleProfilePictureChange = () => {
    console.log("Profile pic changed");
  }
  const handleStoreLogoChange = (e) => {
    console.log("Store logo changed");
    setImage(e.target.files[0]);

  }
  const handleStoreNameChange = (e) => {
    console.log("Strore name changed");
    setStoreData({
      ...storeData,
      storeName: e.target.value,
    });
  }
  const handleStoreDescriptionChange = (e) => {
    console.log("Strore Description changed");
    setStoreData({
      ...storeData,
      storeDescription: e.target.value,
    });
  }
  const handleStoreAddressChange = (e) => {
    console.log("Strore Address changed");
    setStoreData({
      ...storeData,
      storeAddress: e.target.value,
    });
  }
  const handleUpiIdChange = (e) => {
    console.log("Strore UPI ID changed");
    setStoreData({
      ...storeData,
      paymentInfo: e.target.value,
    });
  }


  //Handling form submission
  const handleSubmit = () => {
    console.log("form Submited");
  }



  return (
    <div className='edit_profile'>
      <h2>Edit profile</h2>
      <div className="profile_details">

        <h3>Edit Store details</h3>

        <div className='form_group_container'>
          {/* <div className="form_group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input type="file" id="profilePicture" onChange={handleProfilePictureChange} />
          </div> */}
          <div className="form_group">
            <label htmlFor=""><img src={image ? URL.createObjectURL(image) : (storeData.storeBannerUrl ? storeData.storeBannerUrl:upload)} alt="" className='storebanner' /></label>
            <label htmlFor="storeLogo" id='img_upload'>{image || storeData.storeBannerUrl ? "Click to change Banner" : "Upload banner for your store"}</label>
            <input type="file" id="storeLogo" name='image' onChange={handleStoreLogoChange} hidden />
          </div>

          <div className="form_group">
            <label htmlFor="storeName">Store Name:</label>
            <input type="text" name='storeName' id="storeName" value={storeData.storeName} onChange={handleStoreNameChange} required />
            {errors.storeName ? <p style={{color : "red"}}>{errors.storeName}</p> : <></>}
          </div>
          <div className="form_group_outer">
            <div className="form_group_inner">
              <label htmlFor="storeName">Store Description:</label>
              <textarea type="text" name='storeDescription' className='form_group_textarea' id="storeDescription" rows={10} value={storeData.storeDescription} onChange={handleStoreDescriptionChange} required />
              {errors.storeDescription ? <p style={{color : "red"}}>{errors.storeDescription}</p> : <></>}
            </div>
            <div className="form_group_inner" >
              <label htmlFor="storeName">Store Address:</label>
              <textarea type="text" name='storeAddress' id="storeAddress" value={storeData.storeAddress} className='form_group_textarea' onChange={handleStoreAddressChange} required />
              {errors.storeAddress ? <p style={{color : "red"}}>{errors.storeAddress}</p> : <></>}
            </div>
          </div>

          <div className="form_group">
            <label htmlFor="storeName"> UPI ID :</label>
            <input type="text" id="paymentInfo" name='paymentInfo' value={storeData.paymentInfo} onChange={handleUpiIdChange} required />
            {errors.paymentInfo ? <p style={{color : "red"}}>{errors.paymentInfo}</p> : <></>}
          </div>



          {/* <div className="addproduct-itemfield">
            <label htmlFor="file-input">
              <img src={image ? URL.createObjectURL(image) : upload_icon} alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' required hidden />
          </div> */}

          <button className='update_btn' onClick={Edit_Profile}>Save Changes</button>
        </div>

      </div>
    </div>
  )
}

export default EditProfile
