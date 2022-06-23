import React from 'react'
import One from "../../assets/1.jpg"
import Two from "../../assets/2.jpeg"
import './home.css'


export default function Home() {
  return (
    <>
      <div className="slider">
        <div className="slides">

          <input type="radio" name="radio=btn" id="radio1"/>
          <input type="radio" name="radio=btn" id="radio2"/>
          <input type="radio" name="radio=btn" id="radio3"/>
          

            <div className="slide first">
              <img src={One} alt=""/> 
              <div className="overlay">
              <h3>lorem ipsum dolor sit amet</h3>
                <p>lorem ipsum is simply dummy text of sit amit</p>
                <button className="btn" type="button">lorem ipsum</button>
              </div>
            </div>

            <div className="slide" id="or">
              <img src={Two} alt="" />
              <div className="overlay">
              <h3>lorem ipsum dolor sit amet</h3>
                <p>lorem ipsum is simply dummy text of sit amit</p>
                
              </div>
                    </div>

            <div className="slide">
              <img src={One} alt=""/>.
            </div>


            <div className="navigation-manual">
              <label for="radio1" className="manual-btn"></label>
              <label for="radio2" className="manual-btn"></label>
              <label for="radio3" className="manual-btn"></label>
              
            </div>

        </div>
      </div>
    </>
  )
}
