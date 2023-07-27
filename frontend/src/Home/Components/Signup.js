import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [userType, setUserType] = useState('client');
  const [showPassword, setShowPassword] = useState(false);
  


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    const selectedUserType = e.target.value;
    setUserType(selectedUserType);
    console.log(`Selected user type: ${selectedUserType}`);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up clicked');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignin = () => {
    window.location.href = "/login";
    console.log('Siin in clicked');
  };

  const formHandler=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8080/api/v1/auth/register",{
      "name":firstName + lastName,
      "email":email,
      "password":password
    })
    .then((res)=>{
      
      console.log(res.data.token)
      toast.success("Registered successfully")
    }
    )
    .catch((err)=>console.log(err))

  }

  return (
    <div className="container">
      <ToastContainer/>
      <h1>Sign Up</h1>
      <div className="signin-container">
        <p>Already have an account? </p>
        <span className="signin-link" onClick={handleSignin}>
          Sign in
        </span>
      </div>
      <form id='signupform' onSubmit={handleSignUp}>
        <div className="label-container">
          <label>Email:</label>
          <div className="input-container">
            <input type="email"  onChange={handleEmailChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>First Name:</label>
          <div className="input-container">
            <input type="text"  onChange={handleFirstNameChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>Last Name:</label>
          <div className="input-container">
            <input type="text"  onChange={handleLastNameChange} required />
          </div>
        </div>
        <div className="label-container">
          <label>Password:</label>
          <div className="input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              onChange={handlePasswordChange}
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
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
        <div className="label-container">
          <label>Mobile:</label>
          <div className="input-container">
            <input type="text" value={mobile} pattern="[1-9]{1}[0-9]{9}" onChange={handleMobileChange} required />
          </div>
        </div>
        
        <div className="button-container">
          <Link to='/'>
          <button type="submit" className="signup-button" onClick={formHandler}>
            Sign Up
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
