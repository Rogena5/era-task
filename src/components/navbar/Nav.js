import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>

<ul class="nav justify-content-center">
  <li class="nav-item">
    <Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/about">ABOUT US</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/profile">OUR PROFILE</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/services">SERVICES</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">CONTACT US</Link>
  </li>
</ul>

    </>
  )
}
