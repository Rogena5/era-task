import React from 'react'
import './footer.css'
import { BsTelephoneFill } from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'

import One from '../../assets/1.jpg'


export default function Footer() {
  return (
    <>
    <div className="logo-footer bg-light">
        <div className="logo"> <img src="" alt="logo"/> </div>
      </div>
    <div className="section footer">
    
    <img src={One} className="section-img" alt="..." />
    <div className="card-img-overlay">
      <div className="row">
      <div className="address col-lg-4">
        <h3>ADDRESS</h3>
        <small>lorem ipsum is simply dummy text of the printing</small>
      </div>
      <div className="telephones col-lg-4">
      <h3>TELEPHONES</h3>
      <p className="icons"> <BsTelephoneFill/> <small>+955244459966</small> </p>
      <p className="icons"> <BsTelephoneFill/> <small>+955244459966</small> </p>
      <p className="icons"> <BsTelephoneFill/> <small>+955244459966</small> </p>
      <p className="icons"> <BsTelephoneFill/> <small>+955244459966</small> </p>
          
      </div>
      <div className="Email col-lg-4">
      <h3>EMAIL</h3>
      <small>lorem ipsum is simply dummy text of the printing</small>
      <div className="icons">
      <div className="icon"><AiOutlineTwitter/></div>
      <div className="icon"><AiFillFacebook/></div>
      <div className="icon"><AiOutlineLinkedin/></div>
      <div className="icon"><AiOutlineYoutube/></div>
      </div>

      </div>

      </div>
      </div>
    </div>
      <div className="credit">2022 LOREM IPSUM IS SIMPLY DUMMY, ALL RIGHTS RESERVED</div>
    </>
  )
}
