import {  Carousel, Col , Container, Row} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb1 from '../img/ProductIn.webp';
import Gb2 from '../img/ProductIn2.webp';
import Gb3 from '../img/ProductIn3.webp';
import './Product1.css'

const Product1 = () => {
    return (
        <div>
            <NavbarTop />
   
        <Carousel>
      <Carousel.Item>
        <img
        style={{height: '542px'}}
          className="d-block w-100"
          src={Gb1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: '542px'}}
          className="d-block w-100"
          src={Gb2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: '542px'}}
          className="d-block w-100"
          src={Gb3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        
        <div>
            <Container style={{paddingTop: '25px'}}>
              <Row className="text-nama">
                <Col xs={6} style={{fontSize: 'larger',  fontWeight: 'bold'}}>Nesta House</Col>
                <Col xs={1}></Col>
                <Col style={{ fontWeight: 'bold'}}>Tipe</Col>
                <Col style={{ fontWeight: 'bold'}}>Luas Tanah</Col>
                <Col style={{ fontWeight: 'bold'}}>Sertifikat</Col>
              </Row>
            </Container>
            <Container style={{paddingTop: '5px'}}>
              <Row className="text-nama" style={{fontSize: 'smaller'}}>
                <Col xs={6} style={{fontSize: 'smaller'}}>JL. Simanjutak No. 13 - 17, Jakarta Selatan, Indonesia</Col>
                <Col xs={1}> </Col>
                <Col>Townhouse</Col>
                <Col>72 m2</Col>
                <Col>Sertifikat Hak Milik</Col>
              </Row>
            </Container>
            <Container style={{paddingBottom: '100px', paddingTop: '25px'}}>
              <Row className="text-nama">
                <Col xs={6} style={{fontSize: 'smaller', fontWeight: 'normal'}}>Nesta, a compact and comfortable living space in the heart of the city that will help you to obtain work-life balance. We construct exceptional facilities to raise the worth of your living value as well as guarantee security for each residence. Nesta is supported by the number of features surrounding the environment and within the houses.</Col>
                <Col xs={1}> </Col>
                <Col style={{ fontWeight: 'bold'}}>Luas Bangunan
                <Row>
                  <Col style={{fontSize: 'smaller', fontWeight: '100', paddingTop: '10px'}}>125 m2</Col>
                </Row>
                </Col>
                <Col style={{ fontWeight: 'bold'}}>Interior
                <Row>
                  <Col style={{fontSize: 'smaller', fontWeight: '100', paddingTop: '10px'}}>Tidak Berperabot</Col>
                </Row>
                </Col>
                <Col>
                <Row>
                  <Col></Col>
                </Row>
                </Col>
                
              </Row>
              
            </Container>
        </div>
            
        </div>
    )
}

export default Product1;