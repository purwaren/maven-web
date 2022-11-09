import { Navbar , Container, Col, Row, Form, Button } from 'react-bootstrap';
import './Footer.css';


function Footer(){
    return( 
    <div className='Footer-bar'>
    <Navbar bg='myBg' expand="lg">
        <Container fluid style={{paddingTop: '25px'}}>
          <Row>
            <Col xs={1}>
              <Navbar.Text><p className='warna'>Kantor pusat</p></Navbar.Text>
            </Col>
            <Col xs={3}>
              <Navbar.Text>
                <p className='warna'>Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                  Pondok Ranji, 
                  Kec. Ciputat Timur, 
                  Kota Tangerang Selatan, 
                  Banten 15412
                </p>
              </Navbar.Text>
            </Col>
          
            <Col xs={1}>
              <ul className='warna'>
                <li>Telephone</li>
                <li>E-Mail</li>
              </ul>
            </Col>
            <Col xs={3} style={{paddingLeft: '25px'}}>
              <ul className='warna'>
                <li>+62 8170141234</li>
                <li>info@mavenindonesia.com</li>
              </ul>
            </Col>
            <Col xs={1}></Col>
            <Col xs={3}>
              <Navbar.Text><p className='warna'>Pencarian <Form className="d-flex">
              <Form.Control
                style={{backgroundColor: '#EBE4DA'}}
                type="search"
                className="me-2"
                aria-label="Search"
              />
              <Button  style={{ backgroundColor: '#B8B6B6', color: '#EBE4DA' }} variant="outline-none">Go</Button>
              </Form></p>
              </Navbar.Text>
            </Col>
       
          </Row> 
        </Container>
      </Navbar>
    </div>
    );
}

export default Footer;