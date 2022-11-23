import {Container ,Carousel, Button, Row, Col} from 'react-bootstrap';
import './HomeStyle.css';
import Depan from '../img/Hal-depan-baru.webp';
import Depan2 from '../img/Depan2.webp';
import Depan3 from '../img/Depan3.webp';

const CarouselHome = () => {
    return (
        <div>
        <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Carousel slide={false}>
        <Carousel.Item >
            <img
              className="d-block w-100 darken-image"
              src={Depan}
              alt="Second slide"
            />
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
          
        </div>
        </Carousel.Item>
          <Carousel.Item className='smartphone' >
            <img
              className="d-block w-100 darken-image"
              src={Depan2}
              alt="Second slide"
            />
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
         
        </div>
        </Carousel.Item>
        <Carousel.Item> 
            <img
              className="d-block w-100 darken-image"
              src={Depan3}
              alt="Second slide"
              
            />
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        
        </div>
        
        </Carousel.Item>
          
      </Carousel>
      </Container>
      </div>
    )
}

export default CarouselHome;