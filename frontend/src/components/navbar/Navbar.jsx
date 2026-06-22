import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open);
    }

  return (
    <nav>
        {/* navbar */}
        {/* nav brand */}
        <a className='nav-brand' href="#">brand</a>
        {/* nav menu */}
        <ul className={`nav-menu ${open ? 'active' : ''}`}>
            <li className='nav-item'>
                <a className='nav-link' onClick={() => setOpen(false)} href="#home">home</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' onClick={() => setOpen(false)} href="#about">about</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' onClick={() => setOpen(false)} href="#services">services</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' onClick={() => setOpen(false)} href="#consultation">consultation</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' onClick={() => setOpen(false)} href="#contact">contact</a>
            </li>
        </ul>
        {/* nav icons */}
        {/* <span className="nav-icons">🛒</span> */}
        <button className='nav-toggle' onClick={toggleMenu} aria-label='hambuger'>
            <span className={`bar ${open ? 'open' : ''}`}></span>
            <span className={`bar ${open ? 'open' : ''}`}></span>
            <span className={`bar ${open ? 'open' : ''}`}></span>
        </button>
    </nav>
  )
}

export default Navbar