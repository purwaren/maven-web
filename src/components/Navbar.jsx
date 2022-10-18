import { Nav , Navbar , Container, Card , Button} from 'react-bootstrap';
import './HomeStyle.css';
import Logo from '../img/Logo.png';
import { Router , Link , NavLink } from 'react-router-dom';
import {useState} from 'react';


const NavbarTop = () => {
  return (
    <Navbar bg='myBg' expand="lg">
    <Container>
      {/* <Navbar.Brand href="/"><img src={Logo} alt="" /></Navbar.Brand> */}
      <Navbar.Brand> <Link to='/'> <img src={Logo} alt="" /> </Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
        <Nav>
          <Nav.Link ><Link to='about' style={{textDecorationColor: ' #EBE4DA'}}><p className='warna'>About Maven</p></Link></Nav.Link>
          <Nav.Link href="#link"><p className='warna'>Investor Relation</p></Nav.Link>
          <Nav.Link href="#link"><p className='warna'>Product</p></Nav.Link>
          <Nav.Link href="#link"><p className='warna'>News</p></Nav.Link>
          <Nav.Link href="#link"><p className='warna'>Contact</p></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default NavbarTop;