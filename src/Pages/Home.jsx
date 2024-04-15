import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import KnowUs from '../Components/KnowUs/KnowUs'
import './CSS/Home.css'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <KnowUs/>
      <Footer/>
    </div>
  )
}

export default Home
