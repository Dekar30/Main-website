import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import {BiGame} from 'react-icons/bi'
import {FaBars, FaTimes} from 'react-icons/fa'
import './../navbar/Navbar.css'
import {Button} from './../button/Button'
import logo from'./../images/video-games.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useState

    window.addEventListener('resize',
    showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                <img src={logo} className='navbar-icon' height={50} width={50} />
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
                <li className='nav-item'>
                    <Link to='/services' className='nav-links'>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links'>
                        About Us
                    </Link>
                </li>
                <li className='nav-btn'>
                    {button ? (
                        <Link to='/sign-up' className='btn-links'>
                            <Button buttonStyle='btn--outline'>
                                SIGN UP
                            </Button>
                        </Link>
                    ) : (
                       <Link to='/sign-up' className='btn-link'>
                            <Button buttonStyle='btn--outline'
                            buttonSize='btn--mobile'>
                                SIGN UP
                            </Button>
                       </Link> 
                    )}
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar