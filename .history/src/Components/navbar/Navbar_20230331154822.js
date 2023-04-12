import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    Singye&Galem
                </Link>
            </div>

            <div className='menu-icon'>
                
            </div>

        </div>
    </>
  )
}

export default Navbar