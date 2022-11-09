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
        
        <Container fluid style={{paddingTop: '50px', paddingBottom: '50px'}}>
        <div>
          <Row className="text-nama">
            <Col>
            Nesta House
            <Row style={{fontWeight: 'normal'}}>
              <Col style={{fontSize: 'smaller'}}>
                JL. Haji Sa’aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</Col>
            </Row>
            </Col>
            <Col>
              <Row className="text-spek">
                <Col>Type
                  <Row>
                    <Col style={{fontSize: 'smaller', fontWeight: 'normal'}}>Townhouse</Col>
                  </Row>
                </Col>
                <Col>Unit Land Size
                <Row>
                    <Col style={{fontSize: 'smaller', fontWeight: 'normal'}}>91 - 130m2</Col>
                  </Row>
                  </Col>
                <Col>Certificate
                <Row>
                    <Col style={{fontSize: 'smaller', fontWeight: 'normal'}}>Sertifikat Hak Milik (SHM)</Col>
                  </Row>
                  </Col>
              </Row>
        
            </Col>
          </Row>


          <Row className="text-nama" style={{paddingTop: '25px'}}>
            <Col style={{fontSize: 'smaller', textAlign: 'justify'}}>
            Nesta, a compact and comfortable living space in the heart of the city that will help you to obtain work-life balance. We construct exceptional facilities to raise the worth of your living value as well as guarantee security for each residence. Nesta is supported by the number of features surrounding the environment and within the houses.
            </Col>
            <Col>
              <Row className="text-spek">
                <Col>Building Size
                  <Row>
                    <Col style={{fontSize: 'smaller', fontWeight: 'normal'}}>179 m2</Col>
                  </Row>
                </Col>
                <Col>Interior
                <Row>
                    <Col style={{fontSize: 'smaller', fontWeight: 'normal'}}>Semi Furnished (Optional)</Col>
                  </Row>
                  </Col>
                <Col></Col>
              </Row>
        
            </Col>
          </Row>

        </div>
        </Container>
            
        </div>
    )
}

export default Product1;