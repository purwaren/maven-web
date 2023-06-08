import {Container ,Carousel, Button, Row, Col,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './HomeStyle.css';
import Depan from '../img/Hal-depan-baru.webp';
import Depan2 from '../img/Depan2.webp';
import Depan3 from '../img/Depan3.webp';

const CarouselHome = () => {

    return (
        <div>
        <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Carousel slide={false}  className='my-carousel'>
        <Carousel.Item >
            <img
              className="d-block w-100 darken-image"
              src={Depan}
              alt="Second slide"
            />  
        <Carousel.Caption>
        <div className="caption-content">
            <h1 className="caption-line">LUXURY LIMITED UNITS</h1>
            <h1 className="caption-line">IN WEST JAKARTA</h1>
            <p className="caption-line">Started from <h4 style={{display: 'inline'}} className='highlights'>Rp. 2 billions</h4> </p>
            <p className="caption-line">Specially Designed by <h4 style={{display: 'inline'}} className='highlights'>Atelier Riri</h4> </p>
            <div className='caption-line-whatsapp'>
           {/* <img src={wa}  className='whatsapp' alt="" /> */}

            </div>
          </div>
        </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item className='smartphone' >
            <img
              className="d-block w-100 darken-image"
              src={Depan2}
              alt="Second slide"
            />
        <Carousel.Caption>
        <div className="caption-content">
            <h1 className="caption-line">LUXURY LIMITED UNITS</h1>
            <h1 className="caption-line">IN WEST JAKARTA</h1>
            <p className="caption-line">Started from <h4 style={{display: 'inline'}} className='highlights'>Rp. 2 billions</h4> </p>
            <p className="caption-line">Specially Designed by <h4 style={{display: 'inline'}} className='highlights'>Atelier Riri</h4> </p>
            {/* <Button className="caption-button" rounded>
              Learn More
            </Button> */}
          </div>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
            <img
              className="d-block w-100 darken-image"
              src={Depan3}
              alt="Second slide"
              
            />
            <Carousel.Caption>
        <div className="caption-content">
            <h1 className="caption-line">LUXURY LIMITED UNITS</h1>
            <h1 className="caption-line">IN WEST JAKARTA</h1>
            <p className="caption-line">Started from <h4 style={{display: 'inline'}} className='highlights'>Rp. 2 billions</h4> </p>
            <p className="caption-line">Specially Designed by <h4 style={{display: 'inline'}} className='highlights'>Atelier Riri</h4> </p>
          </div>
        </Carousel.Caption> 
        </Carousel.Item>
          
      </Carousel>
      </Container>
      </div>
    )
}

export default CarouselHome;