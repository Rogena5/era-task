import React from 'react'
import './about.css'
import One from '../../assets/1.jpg'
import Abouttwo from '../aboutTwo/Abouttwo.jsx'
import Aboutthree from '../aboutthree/Aboutthree.jsx'



export default function About() {
  return (
    <>
      <div className="section">
  <img src={One} className="section-img" alt="..." />

  <div className="card-img-overlay row container">
  <div className="contentOne-aboutone col-8">
    <h5 >ABOUT US</h5>
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

<Abouttwo/>
<Aboutthree/>
    
    </>
  )
}
