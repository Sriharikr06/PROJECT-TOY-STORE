import React from 'react'
import './Pay.css'
import Navbar from './FrontPage/Navbar'
import Footer from './FrontPage/Footer'
const Pay = () => {
  return (
    <div>
      <Navbar/>
      <div className='pay'>
        <h1 id='cond'>Payment and Return</h1><br></br>
        <h1>Return Shipping</h1><br></br>
        <p>To return your product, you should mail your product to: 936 MASSACHUSETTS ST, LAWRENCE, KS, 66044, United States.</p><br></br>
        <p>Shipping costs are non-refundable. If you need to return an item, we will provide a return label and deduct the cost of return shipping from your refund. If you receive a product that is defective, please contact us for assistance. </p><br></br>
        <p>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p><br></br>
        <p>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p><br></br>
        <h1>Home Delivery</h1><br></br>
        <p>Currently we offer home delivery within the "CITY LIMITS" of Lawrence and Topeka, KS. As of 2/10/23, we are processing home deliveries after 2pm CST on Monday, Wednesday, and Fridays due to staffing. If you place an order for home delivery after this time we will deliver your order on the next delivery day. If you need the item sooner you are welcome to come into the store and pick up your order.</p><br></br>
        <h1>Return Shipping</h1><br></br>
        <p>We request you to not accept the wrong product. In case if the product received is a wrong product, do inform us immediately at support@toyverse.in or in 3 days.</p><br></br>
        <p>We will refund the 100% cost of the product.</p><br></br>
        <p>The refund will be happen within 14 days of receipt and inspection of the goods.</p><br></br>
        

      </div>
      <Footer/>
    </div>
  )
}

export default Pay