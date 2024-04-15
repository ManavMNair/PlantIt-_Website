import React, { useState, useContext } from 'react'
import Navbar_shop from '../Components/Navbar_shop/Navbar_shop'
import './CSS/SellerLogin.css'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom';

const SellerDetails = () => {

  const navigate = useNavigate()
  // userData.sellerId
  const { user, setUser } = useContext(UserContext);
  const userData = user();
  const [formData, setFormData] = useState({
    storeName: "",
    storeAddress: "",
    storeDescription: "",
    paymentInfo: ""
  })




  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const save = async () => {
    console.log("Saved", formData);

    const newData = { ...userData, ...formData };

    console.log("context : ", userData);

    console.log("CHECKING SAVE DATA >>>", newData);
    let responseData;

    await fetch('http://localhost:4000/SellerDetails', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-type': 'application/json',
        // 'Authorization': `${tokenData}`
      },
      body: JSON.stringify(newData)
    }).then((res) => res.json()).then((data) => responseData = data);

    if (responseData.success) {
      alert("Profile completed .")

      navigate('/dashboard')
    }
    else {
      alert(responseData.errors)
    }


  }
  return (
    <div>
      <Navbar_shop />
      <div className="colorbg">
        <div className='seller_login'>

          <div className='seller_login-left'>

          </div>
          <div className="seller_login-container">
            <h2>Complete profile</h2>
            <div className="seller_login-fields">
              <input type="text" placeholder='Store Name' autoComplete='false' name='storeName' value={formData.storeName} onChange={changeHandler} />
              <input type="text" placeholder='Store Address' autoComplete='off' name='storeAddress' value={formData.storeAddress} onChange={changeHandler} />
              <input type="text" placeholder='Store Description' autoComplete='off' name='storeDescription' value={formData.storeDescription} onChange={changeHandler} />
              <input type="text" placeholder='UPI Address' autoComplete='Off' name='paymentInfo' value={formData.paymentInfo} onChange={changeHandler} />

            </div>
            <button onClick={() => { save() }}>Save</button>
            {/* <Link to={'/Become_A_Seller'}><p className='back'>&lArr; Back</p></Link> */}

            {/* <p className='seller_login-login'>Already have an account? <span>Login here</span></p> */}
            {/* <div className="seller_login-agree">
                        <input type="checkbox" name='' id='' />
                        <p>By continuing, I agree to the terms and conditions of use & privacy policy.</p>
                    </div> */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SellerDetails