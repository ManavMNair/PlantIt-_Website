import React from 'react'
import './KnowUs.css'
import know_us_icon from '../Assets/Homepage/pngwing.com.png'
const KnowUs = () => {
  return (
    <div>
      <div className="know_us">
        <h1>#knowUs</h1>
      </div>
      <div className="know_us_description">
        <div className="know_us_left">
            <img src={know_us_icon} alt="" />

        </div>
        <div className="know_us_right">
            <p>Welcome to ‘Plant it’ where passion for greenery meets a vibrant community of plant enthusiasts. We are more than just an online marketplace – we are a haven for plant lovers, connecting buyers with sellers who share the same dedication to the beauty and benefits of plants and herbs. Join us on this green journey, where every purchase contributes to the growth of your personal oasis and the collective love for all things botanical.</p>

        </div>
      </div>
    </div>
  )
}

export default KnowUs
