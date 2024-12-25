import React from 'react'
import "./Hero.css"
import amazonLogo from "../../assets/amazon.png"
import fbLogo from "../../assets/fb.png"
import iphoneLogo from "../../assets/iphone.jpeg"

const Hero = () => {
  return (
    <main className='hero'>
      <div className="hero-content">
        <h1>FOOTBALL IS THE GREATEST GAME EVER</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore placeat, doloribus molestiae, laborum ipsa fuga quibusdam ea veniam atque totam maiores sunt ad.</p>
        <div className='hero-btn'>
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>
        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src={amazonLogo} alt="amazon logo" />
                <img src={fbLogo} alt="facebook logo" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={iphoneLogo} alt="iphone Logo" />
      </div>
    </main>
  )
}

export default Hero
