import React  from 'react'
import './contact.css'


export default function contact() {
  return (
     <>
       <div className="contact">
       <div className=" contact-content row container">

        <div className="google-map col-lg-6 col-md-12">
          
       <iframe width="100%" height="400" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
       <a href="https://www.gps.ie/wearable-gps/">wearable gps</a></iframe>
       
        </div>

        <div className="contact-text col-lg-6 col-md-12">
          <h5>CONTACT US</h5>
          <p> lorem is is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is is is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is
       </p>
       <form>
       <div className='form'>
       <input type="text" placeholder="FULL NAME" className="control col-lg-6" />
       <input type="email" placeholder="EMAIL" className="control col-lg-6"/>
       </div>
       <div className="form">
       <input type="number" placeholder="PHONE NUMBER" className="control col-lg-6"/>
       <input type="text" placeholder="CASE" className="control col-lg-6" />
       </div>
       <div className="form">
       <input type="text" placeholder="MESSAGE" className="control message col-12" />
       </div>
        <button type="button" className="btnform">SEND REQUEST</button>
       </form>
  
        </div>
       </div>


       
       
       
       </div>
     </>
  )
}
