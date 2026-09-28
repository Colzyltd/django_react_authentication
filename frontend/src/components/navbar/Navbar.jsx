import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar">
            {/* Nav brand */}
            <a href="/" className="nav-brand">brand</a>
            
            {/* Nav menu */}
            <ul className={`nav-links ${open ? 'open' : ''}`}>
                <li>
                    <a href="#home" onClick={() => setOpen(false)}>home</a>
                </li>
                <li>
                    <a href="#about" onClick={() => setOpen(false)}>about</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setOpen(false)}>contact</a>
                </li>
                <li>
                    <a href="#services" onClick={() => setOpen(false)}>services</a>
                </li>
            </ul>
            
            {/* Hamburger Menu */}
            <button 
                className={`nav-toggle ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label='Toggle navigation menu'>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
            </button>
        </nav>
  )
}

export default Navbar