import React, { useContext } from 'react';
import './Navbar.css';
import {  Link, useNavigate } from "react-router-dom";
import Searchbar from './Searchbar';
import { UserContext } from '../../App';
const Navbar= () =>{
  const[search,setSearch]=useContext(UserContext);
  const navigate=useNavigate();
  const handleSearch=(()=>{
    navigate("/all/"+search);
  })
  return (
  <div className='nav'>
    <div className='nav1'>
        <li id='ab'>
          <Link to='about'>About Us</Link>
        </li>
      <input type='text' placeholder='' name='search' id='search-container' onChange={(e)=>{setSearch(e.target.value)}}/>
      <button id='but' onClick={handleSearch}>🔎</button>
        <img src='/logomini.jpg'></img>
        <li>
        <Link to="/">Home</Link>
        </li>
        
        <li>
        <Link to="/cart">MyBag</Link>
        </li>
        <li>
        <Link to="/wishlist">Feedback</Link>
        </li>
        <li>
        <Link to="/Login">Login/Register</Link>
        </li>
    
    
    </div>
   
  </div>
  );
}
export default Navbar;