import { Navbar ,Form, Button, Col, Row, Container } from 'react-bootstrap';
import './Footer.css';
// import './ResponsiveFooter.css';


function Footer(){
    return( 
      <div>
          <Navbar bg='myBg' expand="lg" className='cont-footer'>
        <div className='cont-footer'>
            <Container >
              <Row className="justify-content-around">
                <Col>
                  <p className='text-foot'>Kantor Pusat</p>
                </Col>
                <Col>
                  <p className='text-foot'>Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                  Pondok Ranji, <br />
                  Kec. Ciputat Timur, 
                  Kota Tangerang Selatan, 
                  Banten 15412</p> 
                </Col>
                <Col style={{marginLeft: '100px'}}>
                  <p className='text-foot'>Telephone</p>
                  <p className='text-foot'>E - Mail</p>
                  <br />
                </Col>
                <Col>
                  <p className='text-foot'>+62 81242421985</p>
                  <p className='text-foot'>info@mavenindonesia.com</p>
                </Col>
                <span style={{ margin: '0 10px' }}></span>
                <span style={{ margin: '0 10px' }}></span>
              </Row>
            </Container>
        </div>
          </Navbar>


      <div className='cont-footer-mobile'>
      <Navbar bg='myBg' expand="lg">
            <Container >
              <div className='responsive-text-footer'>

                <p>Kantor pusat <br /> <br />

                Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                Pondok Ranji, <br />
                Kec. Ciputat Timur, 
                Kota Tangerang Selatan, 
                Banten 15412 <br /> <br />
                
                Telephone <br />
                +62 81242421985 <br /> <br />
                E - Mail <br />
                info@mavenindonesia.com

                </p>
                

              </div>
            </Container>
          </Navbar>
      </div>


          
      </div>
    
    );
}

export default Footer;