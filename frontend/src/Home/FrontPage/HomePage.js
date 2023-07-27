import React from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Footer from './Footer';
import home1 from '../../Home/home1.jpg'
import home2 from '../../Home/home2.jpg'
// import All from '../All';
const HomePage= () =>{
  return (
    <>
        <Navbar/>
        <div className='nav2'>
            <p>The Biggest Joy of Planet is Playing</p>
            
            <div className="button-container">
               <Link to='/All'>
               <button type="button" class="shopbutton">
                    Shop Now
                </button>
              </Link> 
            </div>
            </div>
            <img id='h1' src={home1}></img>
            <img id='h1' src={home2}></img>
          <Footer/>
    </>
  );
}
export default HomePage;