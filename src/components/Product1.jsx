import {  Carousel, Col , Container, Row} from "react-bootstrap";
import NavbarTop from './NavigationBar/Navbar';
import Gb1 from '../img/ProductIn.webp';
import Gb2 from '../img/ProductIn2.webp';
import Gb3 from '../img/ProductIn3.webp';
import './Product1.css';
import { Helmet } from "react-helmet";

const Product1 = () => {
    return (
        <div>

          <Helmet>
                <title>Our Product</title>
                    <meta 
                    name='description'
                    content='Product of Maven Realstate Indonesia'
                    />

                    <meta
                    name='keywords'
                    content='Maven Realstate Indonesia, Product, Work'
                    />
            </Helmet>
          <NavbarTop />
            <Container className="noresponsive" fluid style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px'}}>
              <Carousel slide={false} controls={false} indicators={false}>
                <Carousel.Item>
                <img 
                  src={Gb3}
                  style={{display: 'inline', width: '27%', paddingRight: '25px', height: '404px'}}
                  alt=""
                  />

                  <img
                    style={{margin: 'auto', width: '50%', height: '404px'}}
                    src={Gb1}
                    alt="Third slide"
                  />
                  <img 
                  src={Gb2}
                  style={{display: 'inline', width: '23%', paddingLeft: '25px' , height: '404px'}}
                  alt=""
                  />
                </Carousel.Item>
                
          </Carousel>
    </Container>

    <div className="carousel-responsive">
        <Carousel slide={false} indicators={false} controls={false}>
        <Carousel.Item style={{marginTop: '-3px'}}>
            <img
              style={{width: '26%'}}
              src={Gb3}
              alt="Second slide"
            />
        
            <img
              style={{width: '47%', paddingLeft: '5px'}}
              src={Gb1}
              alt="Second slide"
            />
        
            <img
              style={{width: '27%' , paddingLeft: '5px'}}
              src={Gb2}
              alt="Second slide"
              
            />
        
        </Carousel.Item>
          
      </Carousel>
        </div>
        
        <Container className="teks-biasa" fluid style={{paddingTop: '25px', paddingBottom: '50px', paddingRight: '15px', paddingLeft: '15px'}}>
        <div>
          <Row className="text-nama-pr">
            <Col>
            <p style={{fontSize: 'larger'}}>
              Nesta House
            </p>
            <Row style={{fontWeight: 'normal'}}>
              <Col style={{fontSize: 'x-small', marginTop: '-15px'}}>
                JL. Haji Sa’aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</Col>
            </Row>
            </Col>
            <Col>
              <Row className="text-spek">
                <Col>Type
                  <Row>
                    <Col style={{fontSize: 'x-small', fontWeight: 'normal'}}>Townhouse</Col>
                  </Row>
                </Col>
                <Col>Unit Land Size
                <Row>
                    <Col style={{fontSize: 'x-small', fontWeight: 'normal'}}>91 - 130m2</Col>
                  </Row>
                  </Col>
                <Col>Certificate
                <Row>
                    <Col style={{fontSize: 'x-small', fontWeight: 'normal'}}>Sertifikat Hak Milik (SHM)</Col>
                  </Row>
                  </Col>
              </Row>
        
            </Col>
          </Row>


          <Row className="text-nama-pr" style={{paddingTop: '0px'}}>
            <Col style={{fontSize: 'small', textAlign: 'justify'}}>
            Nesta, a compact and comfortable living space in the heart of the city that will help you to obtain work-life balance. We construct exceptional facilities to raise the worth of your living value as well as guarantee security for each residence. Nesta is supported by the number of features surrounding the environment and within the houses.
            </Col>
            <Col xs={1}></Col>
            <Col xs={6}>
              <Row className="text-spek">
                <Col>Building Size
                  <Row>
                    <Col style={{fontSize: 'x-small', fontWeight: 'normal'}}>179 m2</Col>
                  </Row>
                </Col>
                  <Col>Interior
                  <Row>
                    <Col style={{fontSize: 'x-small', fontWeight: 'normal'}}>Semi Furnished (Optional)</Col>
                  </Row>
                  </Col>
                <Col>
                </Col>
              </Row>

        
            </Col>
          </Row>

        </div>
        </Container>

        <div className='teks-rsp'>
            <Container>
              <Row style={{paddingRight: '25px',paddingTop: '15px', paddingLeft: '25px'}}>
                <Col><p className='judul-resp'> Nesta House <p className="alamat-resp"> JL. Haji Sa’aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta </p> </p>
                <Row><Col className="isi-resp">Nesta, a compact and comfortable living space in the heart of the city that will help you to obtain work-life balance. We construct exceptional facilities to raise the worth of your living value as well as guarantee security for each residence. Nesta is supported by the number of features surrounding the environment and within the houses.</Col></Row>
                </Col>
              </Row>

              <Container style={{marginTop: '-20px', paddingRight: '25px', paddingLeft: '25px'}}>
                  <div style={{paddingTop: '0px'}}>
                  <Row className='responsive-teks-produk' style={{justifyContent: 'space-around'}}>
                    <Col className='text-produk' style={{justifyContent: 'space-between'}}>Type</Col>
                    <Col className='text-produk' style={{justifyContent: 'space-between'}}>Unit Land Size</Col>
                    <Col className='text-produk' style={{justifyContent: 'space-between'}}>Certificate</Col>
                  </Row>
                  </div>

                <div>
                <Row style={{justifyContent: 'space-around'}}>
                    <Col className='text-produk-kecil' style={{justifyContent: 'space-between'}}>Townhouse</Col>
                    <Col className='text-produk-kecil' style={{justifyContent: 'space-between'}}>91 - 130 m2</Col>
                    <Col className='text-produk-kecil' style={{justifyContent: 'space-between'}}>Sertifikat Hak Milik (SHM)</Col>
                  </Row>
                  </div>

                <div>
                  <Row style={{justifyContent: 'space-around' , paddingTop: '20px'}}>
                    <Col className='text-produk' style={{justifyContent: 'space-between'}}>Building Size</Col>
                    <Col className='text-produk' style={{justifyContent: 'space-between'}}>Interior</Col>
                    <Col className='text-produk' style={{justifyContent: 'space-between'}}></Col>
                  </Row>
                  </div>

                <div>
                <Row style={{justifyContent: 'space-around'}}>
                    <Col className='text-produk-kecil' style={{justifyContent: 'space-between'}}>179 m2</Col>
                    <Col className='text-produk-kecil' style={{justifyContent: 'space-between'}}>Semi Furnished (Optional)</Col>
                    <Col className='text-produk-kecil' style={{justifyContent: 'space-between'}}></Col>
                  </Row>
                  </div>
                  </Container>
            </Container>
        </div>

        
            
        </div>
    )
}

export default Product1;