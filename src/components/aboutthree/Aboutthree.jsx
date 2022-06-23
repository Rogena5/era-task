import React from "react";
import './aboutthree.css'
import One from '../../assets/1.jpg'
import Two from '../../assets/2.jpeg'

export default function Aboutthree() {
    return (
        <>
            <div className="section">
            <img src={One} className="section-img" alt="..." />
            <div className="card-img-overlay container">

            <div className="row">
            <div className="left col-md-12 col-lg-7 m-2">
    <h5 className="section-title">OUR VISION</h5>
        <p>
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </p>
        </div> 


            <div className="right col-md-12 col-lg-3 m-5">
            <div className="building">
                <div className='image-about-three'>
                <img src={Two} alt="one"/>
                </div>
            </div>
            </div> 
            </div>


        </div>
            </div>
        </>
    )}
