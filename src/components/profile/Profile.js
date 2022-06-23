import React from 'react'
import './profile.css'
import One from "../../assets/1.jpg"
import Profilet from "../profiletwo/Profilet.jsx"
import Profilethree from "../profilethree/Profilethree.jsx"


export default function profile() {
  return (
    <>
       <div className="section">
       <img src={One} className="section-img" alt="..." />
       <div className="card-img-overlay">

       <div className="row container">
       <div className="right col-lg-6 col-md-6 col-sm-12">
       <div className="title">
        LOREM LPSLM
       </div>
       
       <div className="diver">GUYT</div>
            <p className="section-text text-first">G is a wider card with supporting text
            his is a wider card with supporting text below asthis is a wider cardn</p>
       </div>
       
       <div className="left col-lg-6 col-md-6 col-sm-12">
       <div className="content ">
            <div className="diver">LIJNNCR</div>
            <p className="section-text text-first"> L is a wider card with supporting text 
            his is a wider card with supporting text below asthis is a wider cardn</p>
       
             <div className="diver">POOSNHTRNNDUIP</div>
            <p className="section-text text-first">P is a wider card with supporting text 
            his is a wider card with supporting text below asthis is a wider cardn</p>
       </div>

       </div>

       </div>
       </div>
       </div>
          <Profilet/>
          <Profilethree/>
            </>  )}



