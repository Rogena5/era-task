import React from 'react'
import './services.css'
import One from "../../assets/1.jpg";
import ServicesTwo from '../servicesTwo/ServicesTwo.jsx'
import Servicethree from '../serviceThree/Servicethree.jsx'

export default function Services() {
  
  return (
   <>
    <div className="section">
  <img src={One} className="section-img" alt="..." />

  <div className="card-img-overlay row container">
  <div className="contentOne-aboutone col-8">
    <h5 >SERVICES</h5>
    <p>This is a wider card with supporting text 
    his is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural lead-in 
    his is a wider card with supporting text below as a natural </p>
    </div>

    <div className="contentTwo-abouttwo col-5">
      <p>
      lorem ipsum dolo dolo dlol stynl ipsum lorem ipsum lorem ipsum lorem ipsum
      lorem ipsum dolo stynl ipsum lorem ipsum lorem ipsum 
      </p>
      </div> 

  </div>
</div>
    <ServicesTwo/>
    <Servicethree/>
   </>
  )
}
