import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul className='nav-links'>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/admin">ADMIN</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
