import { Navbar , Container, Col, Row, Form, Button } from 'react-bootstrap';
import './Footer.css';


function Footer(){
    return( 
    <div className='Footer-bar'>
    <Navbar bg='myBg' expand="lg">
        <Container style={{paddingTop: '25px'}}>
          <Row>
            <Col xs={2}>
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
              <ul className='warna' >
                <li>Telephone</li>
                <li>E-Mail</li>
              </ul>
              {/* <Navbar.Text><p className='warna'>Telephone</p></Navbar.Text>
              <Navbar.Text ><p className='warna'  >E-Mail</p></Navbar.Text> */}
            </Col>
            <Col xs={2}>
              {/* <Navbar.Text><p className='warna'>+62 8170141234</p></Navbar.Text>
              <Navbar.Text><p className='warna'>info@mavenindonesia.com</p></Navbar.Text> */}
              <ul className='warna' >
                <li>+62 8170141234</li>
                <li>info@mavenindonesia.com</li>
              </ul>
            </Col>
            <Col>
              <Navbar.Text><p className='warna'>Pencarian</p></Navbar.Text>
            </Col>
            <Col xs={3}>
            
              <Form className="d-flex">
              <Form.Control
                style={{backgroundColor: '#EBE4DA'}}
                type="search"
                className="me-2"
                aria-label="Search"
              />
              <Button  style={{ backgroundColor: '#B8B6B6', color: '#EBE4DA' }} variant="outline-none">Go</Button>
          </Form>
            </Col>
          </Row>
        </Container>

{/* 
        <Container>
            <Navbar.Text>
                <p>Testtt</p>
            </Navbar.Text>
        </Container> */}

        
      </Navbar>
    </div>
    );
}

export default Footer;