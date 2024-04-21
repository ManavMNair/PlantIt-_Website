import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './CSS/Become_A_Seller.css'
import Navbar_shop from '../Components/Navbar_shop/Navbar_shop'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import SellerValidation from './SellerValidation';



const Become_A_Seller = () => {


    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext);
    const [state, setState] = useState('Sign up')
    const [formData, setFormData] = useState({
        sellerName: "",
        sellerPassword: "",
        sellerPhoneNumber: "",
        sellerEmail: "",
    })
    const [errors,setErrors] = useState ({})

    useEffect(() => {
        console.log("AFTER USEEFFECT >>>>", user)
    }, [user])



    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const {validateSeller} = SellerValidation()

    const validateform =()=>{
        console.log("Formdata >>",formData);
        const validateErrors = validateSeller(formData)
        setErrors(validateErrors)
        return Object.keys(validateErrors).length === 0;
    }

    const signup = async () => {
        if (!validateform()){
            return
        }
        console.log("Sign up called", formData);

        let responseData;
        await fetch('http://localhost:4000/sellerSignup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((res) => res.json()).then((data) => responseData = data);

        if (responseData.success) {


            console.log("before context setting : ",responseData);
            setUser(responseData);

            console.log("CONTEXT DATA >>>", user());

            

            console.log("SEE RESPONSE DATA >>>>", responseData)

            alert("Account successfully created . Now complete your deatils .")
            localStorage.setItem('auth-token', responseData.token);

            // set data

            
            navigate('/SellerDetails')

            // window.location.replace('/SellerDetails')
        }
        else {
            alert(responseData.errors)
        }
    }
    const login = async () => {
        console.log("Login called");

        let responseData;
        await fetch('http://localhost:4000/sellerlogin', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then((res) => res.json()).then((data) => responseData = data);

        if (responseData.success) {
            alert("Login Success")
            localStorage.setItem('auth-token', responseData.token);
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
                        <h2>{state === 'Sign up' ? "Sign Up as a Seller" : "Login to your Account"}</h2>
                        <div className="seller_login-fields">
                            {state === 'Sign up' ? <input type="text" placeholder='Your Name' autoComplete='false' name='sellerName' value={formData.sellerName} onChange={changeHandler} /> : <></>}
                            {errors.sellerName ? <p style={{color : "red"}}>{errors.sellerName}</p> : <></>}

                            <input type="email" placeholder='Email Address' autoComplete='off' name='sellerEmail' value={formData.sellerEmail} onChange={changeHandler} />
                            {errors.sellerEmail ? <p style={{color : "red"}}>{errors.sellerEmail}</p> : <></>}

                            {state === 'Sign up' ? <input type="tel" placeholder='Phone Number' name='sellerPhoneNumber' value={formData.sellerPhoneNumaber} onChange={changeHandler} /> : <></>}
                            {errors.sellerPhoneNumber ? <p style={{color : "red"}}>{errors.sellerPhoneNumber}</p> : <></>}

                            <input type="password" placeholder='Password' autoComplete='Off' id='myInput' name='sellerPassword' value={formData.sellerPassword} onChange={changeHandler} />
                            {errors.sellerPassword ? <p style={{color : "red"}}>{errors.sellerPassword}</p> : <></>}

                            <div>

                                <input type="checkbox" onClick={() => {
                                    var x = document.getElementById("myInput");
                                    if (x.type === "password") {
                                        x.type = "text";
                                    } else {
                                        x.type = "password";
                                    }
                                }} className='checkBox' id='checkBox' />

                                <label htmlFor="checkBox" className="checkBox"> Show Password</label>
                            </div>
                        </div>
                        <button onClick={() => { state === "Sign up" ? signup() : login() }}>{state}</button>


                        {state === "Sign up" ? <p className='loginsignup-login'>Already have an account ? <span onClick={() => { setState("Login") }}>Login here</span ></p> : <p className='loginsignup-login'>Create an account ? <span onClick={() => { setState("Sign up") }}>Sign up</span> now</p>}


                        {state === 'Sign up' ? <div className="seller_login-agree">
                            <input type="checkbox" name='' id='' />
                            <p>By continuing, I agree to the terms and conditions of use & privacy policy.</p>
                        </div> : <></>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Become_A_Seller
