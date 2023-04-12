import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BiGame} from 'react-icons/bi'
import {FaBars, FaTimes} from 'react-icons/fa'
import './../navbar/Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

  return (
    <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <BiGame className='navbar-icon' />
                    Singye&Galem
                </Link>
            </div>

            <div className='menu-icon' onClick={handleClick} >
                {click ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links'>
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar