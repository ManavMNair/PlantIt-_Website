import React from 'react'
import './Hero.css'
import Home_iconOg from '../Assets/Homepage/Home_iconOg.png'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <p>Where Nature Meets Home: Transform Your Space with the Beauty of Plants and Herbs.</p>
        <Link to={'/Login'}><button>Join Now!</button></Link>
      </div>
      <div className="hero-right">
        <img src={Home_iconOg} alt="" />

      </div>
    </div>
  )
}

export default Hero
