import { Nav , Navbar , Container, Row, Col} from 'react-bootstrap';
import './Navbar.css';
import Logo from '../../img/Logo.webp';
import {Link} from 'react-router-dom';


const NavbarTop = () => {

  return (
      <Navbar bg="myBg" expand="lg" >
        <Container>

          <Navbar.Brand> 
            <Link to='/'><img src={Logo} className="left-top-logo" alt="" fluid /> </Link> 
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Link to='/about/vission' className='navbar-text' >About Maven</Link>
              <span style={{ margin: '0 10px' }}></span>
              <Link to='/investor' className='navbar-text' >Investor</Link>
              <span style={{ margin: '0 10px' }}></span>
              <Link to='/contact' className='navbar-text' >Contact</Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    )
}

export default NavbarTop;