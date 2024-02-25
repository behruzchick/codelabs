import React, { useState } from 'react'
import { Container, Nav, Navbar, NavbarBrand, Offcanvas } from 'react-bootstrap'
import city from '../../../img/city.jpg'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLinkClick = (path) => {
    navigate(path)
    handleClose();
    
  };
  return (
    <div className='header-wrape' style={{ display: 'flex', alignItems: 'center', justifyContent: "center", width: "100%" }}>
      <Navbar className='navbar-wrap' style={{ display: "flex", width: '87%', paddingTop: '30px' }}>
        <Container style={{ width: "200px" }}>
          <Navbar.Brand href='/' style={{ color: "white" }}>codelabs.uz</Navbar.Brand>
        </Container>
        <Nav className='nav'>
          <Nav.Link className='link' style={{ color: "white" }} href='/about'>ABOUT US</Nav.Link>
          <Nav.Link className='link' style={{ color: "white" }} href='/services'>SERVICES</Nav.Link>
          <Nav.Link className='link' style={{ color: "white" }} href='/portfolio'>PORTFOLIO</Nav.Link>
          <Nav.Link className='link' style={{ color: "white" }} href='#footer'>CONTACT</Nav.Link>
          <Nav.Link className='nav-number text-white'>+998 99 812 01 58</Nav.Link>

          <MenuIcon className='menu-btn'  onClick={handleShow}/>


          <Offcanvas show={show} className='of-canvas bg-dark' onHide={handleClose}>
            <Offcanvas.Header>
              <Offcanvas.Title style={{color:"white"}}>codelabs.uz</Offcanvas.Title>  
              <CloseIcon style={{color:"white",fontSize:"40px"}} onClick={handleClose}/>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column gap-5 justify-content-center py-4'>
              <Link className='c-link' style={{ color: "white" }} to='/about' onClick={() => handleLinkClick('/about')}>ABOUT US</Link>
              <Link className='c-link' style={{ color: "white" }} to='/services' onClick={() => handleLinkClick('/services')}>SERVICES</Link>
              <Link className='c-link' style={{ color: "white" }} to='/portfolio' onClick={() => handleLinkClick('/portfolio')}>PORTFOLIO</Link>
              <Nav.Link className='c-link' style={{ color: "white" }} href='/#footer' onClick={() => handleLinkClick('/#footer')}>CONTACT</Nav.Link>
              <Nav.Link className='c-number' style={{color:"white"}}>+998 99 812 01 58</Nav.Link>

            </Offcanvas.Body>
          </Offcanvas>

        </Nav>  
      </Navbar>
    </div>
  )
}

export default Header