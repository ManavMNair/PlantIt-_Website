import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import Navbar_shop from '../Components/Navbar_shop/Navbar_shop'
import Validation from '../Seller/SellerAssets/Validation'

const LoginSignup = () => {

    const [state,setState] = useState('login')
    const [errors,setErrors] = useState ({})

    const [formData,setFormData]  = useState({
        name : "",
        password : "",
        email : ""
    })

    const changeHandler= (e)=>{
        setFormData({...formData , [e.target.name]:e.target.value })
        
        // setErrors(Validation(formData)) 
    }

    const validateform =()=>{
        console.log("Formdata >>",formData);
        const validateErrors = Validation(formData)
        setErrors(validateErrors)
        return Object.keys(validateErrors).length === 0;
    }

    const login = async()=>{
        console.log("Login Function " , formData);

        let responseData;
        await fetch ('http://localhost:4000/login',{
            method : 'POST',
            headers : {
                Accept : 'application/form-data',
                'Content-type' : 'application/json',
            },
            body : JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData = data);

        if(responseData.success){
            alert("Accout successfully created")
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/shop")
        }
        else{
            alert(responseData.errors)
        }



    }

    const signup = async ()=>{
        if (!validateform()){
            return
        }
        console.log("Sign up called", formData);
        
        let responseData;
        await fetch ('http://localhost:4000/signup',{
            method : 'POST',
            headers : {
                Accept : 'application/form-data',
                'Content-type' : 'application/json',
            },
            body : JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData = data);

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/shop")
        }
        else{
            alert(responseData.errors)
        }
    }
    

  return (
    <div>
        <Navbar_shop/>
        <div className="colorbg">
            <div className='loginsignup'>
            
                <div className='loginsignup-left'>

                </div>
                <div className="loginsignup-container">
                    <h2>{state}</h2>
                    <div className="loginsignup-fields">
                        {state==='Sign up'?<input type="text" placeholder='Your Name' autoComplete='false' name='name' value={formData.name } onChange={changeHandler}/> : <></>}
                        {errors.name ? <p style={{color : "red"}}>{errors.name}</p> : <></>}
                        
                        <input type="email" placeholder='Email Address' autoComplete='off' name='email' value={formData.email } onChange={changeHandler} />
                        {errors.email ?  <p style={{color : "red"}}>{errors.email}</p>:<></>}
                        
                        <input type="password" placeholder='Password' autoComplete='off' id='myInput' name='password' value={formData.password } onChange={changeHandler} />
                        {errors.password ? <p style={{color : "red"}}>{errors.password}</p> :<></>}
                        <div>
                            
                        
                        <input type="checkbox" onClick={() => {
                            var x = document.getElementById("myInput");
                            if (x.type === "password") {
                                x.type = "text";
                            } else {
                                x.type = "password";
                            }
                        }} className='checkBox' id='checkBox'/>
                        
                        <label htmlFor="checkBox" className="checkBox"> Show Password</label>
                        </div>
                    </div>

                    <button onClick={()=>{ state === "login"? login():signup()}}>{state}</button>
                    {state === "Sign up"? <p className='loginsignup-login'>Already have an account ? <span onClick={()=>{setState("login")}}>Login here</span ></p>: <p className='loginsignup-login'>Create an account ? <span onClick={()=>{setState("Sign up")}}>Sign up</span> now</p>}
                    
                    
                    <div className="loginsignup-agree">
                        <input type="checkbox" name='' id='' />
                        <p>By continuing, I agree to the terms and conditions of use & privacy policy.</p>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default LoginSignup
