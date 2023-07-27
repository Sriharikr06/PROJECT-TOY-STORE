import React from 'react';
import './Navbar.css';
import {  Link } from "react-router-dom";
const Footer= () =>{
  return (
    <div className='footer'>
        <img src='logomini.jpg'></img>
        <div className='links'>
            <li id='term'>
            <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li id='pay'>
            <Link to="/pay">Payment and Return Policy</Link>
            </li>
            <li id='contact'>
            <Link to="/contact">Customer Care</Link>
            </li>
            <p>© 2023 ToyVerse. All rights reserved. All audio, visual and textual content on this site (including all names, characters, images, trademarks and logos) are</p>
            <p id='inline'>protected by trademarks, copyrights and other Intellectual Property rights owned by ToyVerse or its subsidiaries, licensors, licensees, suppliers and accounts.</p>
        </div>
    </div>
  );
}
export default Footer;