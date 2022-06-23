import React from "react";
import './aboutTwo.css'
import One from '../../assets/1.jpg'
import Two from '../../assets/2.jpeg'

export default function AboutTwo() {
    return (
        <>
            <div className="section">
            <img src={One} className="card-img" alt="..." />
            <div className="card-img-overlay container">
            <div className="row">
            <h5>OUR VISION</h5>
            <p className="section-text text-about-two">This is a wider card with supporting text 
            his is a wider card with supporting text below as a natural lead-in</p>
            <div className=" right col-lg-6 p-5">
            <div className="building">
                <div className='image'>
                <img src={Two} alt="one"/>
                </div>
            </div>
            </div>
            <div className="left-about-two col-lg-4 p-4">
        <p>
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        lorem ipsum dolo dolo dlol dlold stynl ipsum lorem ipsum lorem ipsum lorem ipsum lorem
        </p>
        </div> 
        </div>
            </div>
        </div>
        </>
    )}