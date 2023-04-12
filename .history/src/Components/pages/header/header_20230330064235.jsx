import React from 'react'
import { Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { Nav } from 'react-bootstrap';
import './header.css';

function Header() {
  return (
    <>
     <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>


      <Navbar.Brand className='logotext' as={Link} to='/'>
        <div className='logo'></div>
      </Navbar.Brand>

      <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>

        <Nav className="ms-auto" defaultActiveKey="#home">


          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}> Home </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav.Item>

          <Button
            className='signupbtn'><span>Sign Up</span>
          </Button>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    </>
  )
}

export default Header

