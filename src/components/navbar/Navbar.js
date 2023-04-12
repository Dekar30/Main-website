import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './../navbar/Navbar.css'
import {Button} from './../button/Button'
import logo from'./../images/video-games.png'
import {IconContext} from 'react-icons/lib'

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

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={logo} className='navbar-icon' height={50} width={50} />
                        Singye&Galem
                    </Link>
                </div>

                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
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
                                buttonSize='btn--mobile' onClick={closeMobileMenu}>
                                    SIGN UP
                                </Button>
                        </Link> 
                        )}
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar