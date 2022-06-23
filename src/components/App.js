import React, { Component } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Navbar from './navbar/Nav'
import Home from './home/Home'
import About from './about/About'
import Profile from './profile/Profile'
import Services from './services/Services'
import Contact from './contact/contact'
import Footer from './footer/Footer'
import Head from './header/Head.jsx'


export default class App extends Component {
  render() {
    return (
      <>
      <Head/>
      <Navbar/>
      <div components="container">
      <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      
      </div>
      <Footer/>
    </>
    )
  }
}
