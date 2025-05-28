import React, { useState } from 'react'
import './navbar.css' 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">TourBuilder</div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#menu">Menu</a>
          <a href="#editor">Editor</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
