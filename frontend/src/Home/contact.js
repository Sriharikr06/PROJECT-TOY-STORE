import React from 'react'
import './Contact.css'
import Navbar from './FrontPage/Navbar'
import Footer from './FrontPage/Footer'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='contact'>
        <h1 id='cond'>Customer Care</h1><br></br>
        <h1>ToyVerse</h1><br></br>
        <p>Reliance Brands Limited</p>
        <p>10th Floor, Maker Towers E, Cuffe Parade</p>
        <p>Mumbai-400005</p>
        <p>Phone No.:8080 847 847 (10.00 AM - 7:00 PM All days)</p>
        <p>Write to us on: support@toyverse.in</p>
        <p>Order tracking: +91 1246719500</p><br></br>
        <h1>Registered Address</h1><br></br>
        <p>5th Floor, Court House,</p>
        <p>Lokmanya Tilak Marg,</p>
        <p>Dhobi Talao,</p>
        <p>Mumbai City,</p>
        <p>Maharashtra – 400002</p>
        

      </div>
      <Footer/>
    </div>
  )
}

export default Contact