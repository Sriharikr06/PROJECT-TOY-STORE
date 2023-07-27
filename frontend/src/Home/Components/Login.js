import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import HomePage from '../FrontPage/HomePage';
import axios from 'axios';



const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('client');
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  const[customerLogin,setCustomerLogin]=useState({
	email:"",
	password:"",
	name:""
  })

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    console.log(email);

  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    console.log(password)
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    setUserType(selectedUserType);
    console.log(`Selected user type: ${selectedUserType}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked');
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
    console.log('Sign up clicked');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleResetpwd = () => {
    window.location.href = '/reset-password';
  };
  const formHandler=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/auth/authenticate",{
      "email":email,
      "password":password
    })
    .then((res)=>{
      console.log(res)
      alert('login success')
      navigate("/")
    }).catch((err)=>console.log(err))

  }
 
  return (
    <div className="container">
      <h1 id='head'>Login</h1>
      <div className="signup-container">
        <p>Don't have an account? </p>
        <span className="signup-link" onClick={handleSignUp}>
          Sign up
        </span>
      </div>
      <form id='loginform' onSubmit={formHandler}>
	  {/* <div className="label-container">
          <label>Name:</label>
          <div className="input-container">
            <input type="text" value={name} placeholder='Name' onChange={(e)=>{
				setCustomerLogin({
					...customerLogin,
					name:e.target.value
				})
			}} required/> 
          </div>
        </div> */}
        <div className="label-container">
          <label>Email:</label>
          <div className="input-container">
            <input type="email" onChange={handleEmailChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>Password:</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              
              // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
              onChange={handlePasswordChange}
              required
            />
            <button
              type="button"
              className="toggle-password-button"
              onClick={handleTogglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        {/* <div className="label-container">
          <label>User Type:</label>
          <div className="input-container">
            <select value={userType} onChange={handleUserTypeChange}>
              <option value="client">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div> */}

        <div className="button-container">
          {/* <Link to='/'> */}
          <button type="submit" className="login-button">
            LOGIN
          </button>
          {/* </Link> */}
        </div>

        <div className="pwd-container">
        <p>Forgot Password? </p>
                <div className="pwdup-link" onClick={handleResetpwd}>
            Reset Password
        </div>
      </div>

      </form>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from 'react'
// import "./Login.css"
// import {Link, useNavigate} from "react-router-dom"
// import {useDispatch, useSelector} from 'react-redux'


// export default function SignIn() {
// 	const navigate=useNavigate();
// 	const dispatch=useDispatch();
// 	const [customerLogin,setCustomerLogin]=useState(
// 		{email:"",
// 		password:"",
// 		name:""
// 	}
// 	)
// 	const user=useSelector(selectUser);
// 	console.log(user);
// 	const handleLogin=(e)=>{
// 		e.preventDefault();
// 		dispatch(
// 			login(
// 				{email:customerLogin.email,
// 				password:customerLogin.password,
// 				name:customerLogin.name}
// 			)
// 		)
// 		navigate("/dashboard");
// 	}
//   return (
//     <div>
//       <div className="sign-in">
// 		<form id='loginform' action="#">
// 			<h1 id='loginh1'>Login</h1>
// 			<input type="text" placeholder='Name' onChange={(e)=>{
// 				setCustomerLogin({
// 					...customerLogin,
// 					name:e.target.value
// 				})
// 			}} required/>
// 			<input type="email" placeholder="Email" onChange={(e)=>{
// 				setCustomerLogin({
// 					...customerLogin,
// 					email:e.target.value
// 				})
// 			}} required />
// 			<input type="password" placeholder="Password" onChange={(e)=>{
// 				setCustomerLogin({
// 					...customerLogin,
// 					password:e.target.value
// 				})
// 			}} pattern="^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{8,}$" required/>

// 			<button type="submit" id="btn" onClick={handleLogin}>Sign In</button>

// 			<div className='com1'>
// 				Not a User?<Link to="/signup">SignUp</Link>
// 			</div>
// 		</form>
// 	</div>
//     </div>
//   )
// }
