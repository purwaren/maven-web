import { Nav , Navbar , Container, Row, Col} from 'react-bootstrap';
import './HomeStyle.css';
import Logo from '../img/Logo.webp';
import {Link} from 'react-router-dom';
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
    <Container style={{paddingTop: '5px', paddingBottom: '5px'}}>
      <Navbar.Brand> 
        <Link to='/'> <img src={Logo} style={{width: '70%'}} alt="" /> </Link> 
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      
        <div style={{display: 'flex'}}>
          <Navbar.Collapse className='justify-content-end'  id="basic-navbar-nav">
            <Nav style={{display: 'flex',textAlign: 'justify'}}>
              <Link to='/about/vission' style={{ marginRight: '70px'}} className={style} onClick={changeStyle1} ><p className={'warna'}>About Maven</p></Link>
              <Link style={{marginRight: '60px'}} to='/investor' className={style2} onClick={changeStyle2}><p className='warna'>Collaboration With Us</p></Link>
              <Link style={{marginRight: '50px'}} to='/product' className={style3} onClick={changeStyle3} ><p className='warna'>Product</p></Link>
              <Link style={{marginLeft: '15px', marginRight: '-5px'}} to='/contact' className={style4} onClick={changeStyle4}><p className={'warna'}>Contact</p></Link>
            </Nav>
          </Navbar.Collapse>
        </div>
     


    </Container>
  </Navbar>
    )
}

export default NavbarTop;