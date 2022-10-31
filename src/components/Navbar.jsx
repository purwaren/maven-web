import { Nav , Navbar , Container, Card , Button} from 'react-bootstrap';
import './HomeStyle.css';
import Logo from '../img/Logo.png';
import { Router , Link , NavLink } from 'react-router-dom';
import {useState} from 'react';


const NavbarTop = () => {

  
  const [style, setStyle] = useState('link-mati');
  const [style2, setStyle2] = useState('link-mati');
  const [style3, setStyle3] = useState('link-mati');
  const [style4, setStyle4] = useState('link-mati');
  
  const changeStyle1 = () => {
    setStyle('link-aktif1');
  }
  const changeStyle2 = () => {
    setStyle2('link-aktif2');
  }
  const changeStyle3 = () => {
    setStyle3('link-aktif3');
  }

  const changeStyle4 = () => {
    setStyle4('link-aktif4');
  }

  return (
    <Navbar bg='myBg' expand="lg">
    <Container>
      {/* <Navbar.Brand href="/"><img src={Logo} alt="" /></Navbar.Brand> */}
      <Navbar.Brand> <Link to='/'> <img src={Logo} style={{width: '70%'}} alt="" /> </Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
        <Nav style={{display: 'flex',textAlign: 'justify'}}>
          <Link to='/about/vission' style={{marginRight: '25px'}} className={style} onClick={changeStyle1} ><p className={'warna'}>About Maven</p></Link>
          <Link style={{marginRight: '25px'}} to='/investor' className={style2} onClick={changeStyle2}><p className='warna'>Collaboration With Us</p></Link>
          <Link style={{marginRight: '25px'}} to='/product' className={style3} onClick={changeStyle3} ><p className='warna'>Product</p></Link>
          <Link to='/contact' className={style4} onClick={changeStyle4}><p className={'warna'}>Contact</p></Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    )
}

export default NavbarTop;