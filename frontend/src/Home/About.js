import React from 'react'
import './About.css'
import about1 from '../Home/about1.jpg'
import about2 from '../Home/about2.png'
import about3 from '../Home/about3.png'
import Navbar from './FrontPage/Navbar';
import Footer from './FrontPage/Footer';

const About = () => {
  return (
    
    <div>
        <Navbar/>
        <h1 id='cond'>About Us</h1><br></br>
        <div className='full'>
          <div className='left'>
              <img id='on1' src={about1}></img>
          </div>
          <div className='right'>
            <p id='he'>Who We Are?</p>
            <p id='p1'>World’s Favorite Baby & Kid’s Shopping Platform.</p>
            <p id='p2'>Toy store(y) is an excellent platform to buy wooden toys for your kids. We have a wide range of handmade wooden toys for kids and home decors. Our goal is to spread our traditional craftsmanship and endangered arts to the world. We value people’s satisfaction and comfort, that’s why people choose toy store(y) for their kids. Toy store(y) is the best place to buy wooden toys for your kids.</p>
            <p id='p2'> Toys represented in the site include the categories of toys for born babies, toys for kids, educational toys, home decor, kitchen utilities, gifts, and showcase collections. Toys from toystore.in is complete</p>
            <img id='on3' src={about3}></img>
          </div>

        </div>
        <img id='on2' src={about2}></img>
        <Footer/>
    </div>
  )
}

export default About

