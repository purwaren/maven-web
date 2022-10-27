import {  Carousel, Col , Container, Button} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb1 from '../img/ProductIn.png';
import Gb2 from '../img/ProductIn2.png';
import Gb3 from '../img/ProductIn3.png';

const Product1 = () => {
    return (
        <div>
            <NavbarTop />
   
        <Carousel>
      <Carousel.Item>
        <img
        style={{height: '777px'}}
          className="d-block w-100"
          src={Gb1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: '777px'}}
          className="d-block w-100"
          src={Gb2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: '777px'}}
          className="d-block w-100"
          src={Gb3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        <div>
            <h1>Test</h1>
        </div>
            
        </div>
    )
}

export default Product1;