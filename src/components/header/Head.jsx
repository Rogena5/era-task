import { MdOutlineWatchLater } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import './head.css'
export default function Head() {
    return (
      <>
        <nav class="navbar">
    <div class="container">
      <span class="navbar-brand h1"> logo </span>
  
      <div className="open">
      <p className="bold"> <span className="icons"><MdOutlineWatchLater/></span> 
          8AM - 9PM <br></br>
          <span className="light">OUR OPENING HOURS</span>
          </p>
      </div>
  
      <div className="call">
      <p className="bold"> <span className="icons"><BsTelephoneFill/></span> 
          +955244459966 <br></br>
          <span className="light">CALL US FOR CONSULATATION</span>
          </p>
      </div>
    </div>
  </nav></>)}