

import React, { useState } from 'react'



import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
          
                <p className={click ? "nav-menu active" : "nav-menu"}>
                    <p className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </p>
                    <p className='nav-item'>
                        <a href='#course' onClick={closeMenu}>Course</a>
                    </p>
                    <p className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </p>

                </p>
            </nav>
        </div>
    )
}

export default Navbar
