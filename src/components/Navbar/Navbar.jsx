import React from 'react'
import appleLogo from "../../assets/logo.png";
import "../../App.css"

const Navbar = () => {
  return (
    <div>
      <nav>
      <div className="logo">
        <img src={appleLogo} alt="appleLogo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
    </div>
  )
}

export default Navbar
