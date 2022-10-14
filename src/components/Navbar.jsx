import { Nav , Navbar , Container, Card , Button} from 'react-bootstrap';
import './HomeStyle.css';
import Logo from '../img/Logo.png';



const NavbarTop = () => {
    return (
    <Navbar bg='myBg' expand="lg">
    <Container>
      <Navbar.Brand href="/"><img src={Logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/about"><p className='warna'>About Maven</p></Nav.Link>
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