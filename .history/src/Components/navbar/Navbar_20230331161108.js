import React from 'react'
import {Link} from 'react-router-dom'
import {BiGame} from 'react-icons/bi'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    <BiGame className='navbar-icon' />
                    Singye&Galem
                </Link>
            </div>

            <div className='menu-icon'/>
            {click ? <FaTimes /> : <FaBars />}
        </div>
    </>
  )
}

export default Navbar