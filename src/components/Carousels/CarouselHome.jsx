import {Container ,Carousel, Button, Row, Col,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import '../HomeStyle.css';
import './CarouselHome.css';
import Depan from '../../img/Hal-depan-baru.webp';
import Depan2 from '../../img/Depan2.webp';
import Depan3 from '../../img/Depan3.webp';

const CarouselHome = () => {

    return (
        <>
          <Container fluid className='container-carousel'>
            <Carousel slide={false}  className='my-carousel'>

              <Carousel.Item >
                  <img
                    className="d-block w-100 dark-img"
                    src={Depan}
                    alt="Second slide"
                  />  
                <Carousel.Caption>
                  <div className="caption-content">
                    <h1 className="caption-line">LUXURY LIMITED UNITS</h1>
                    <h1 className="caption-line">IN WEST JAKARTA</h1>
                    <p className="caption-line">Started from 
                      <h4 style={{display: 'inline'}} className='highlights'> Rp. 2 billions</h4>
                    </p>
                    <p className="caption-line">Specially Designed by 
                      <h4 style={{display: 'inline'}} className='highlights'> Atelier Riri</h4>
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item className='smartphone' >
                  <img
                    className="d-block w-100 dark-img"
                    src={Depan2}
                    alt="Second slide"
                  />
                <Carousel.Caption>
                  <div className="caption-content">
                    <h1 className="caption-line">LUXURY LIMITED UNITS</h1>
                    <h1 className="caption-line">IN WEST JAKARTA</h1>
                    <p className="caption-line">Started from 
                      <h4 style={{display: 'inline'}} className='highlights'> Rp. 2 billions</h4> 
                    </p>
                    <p className="caption-line">Specially Designed by 
                      <h4 style={{display: 'inline'}} className='highlights'> Atelier Riri</h4> 
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item> 
                  <img
                    className="d-block w-100 dark-img"
                    src={Depan3}
                    alt="Second slide"  
                  />
                <Carousel.Caption>
                    <div className="caption-content">
                    <h1 className="caption-line">LUXURY LIMITED UNITS</h1>
                    <h1 className="caption-line">IN WEST JAKARTA</h1>
                    <p className="caption-line">Started from 
                      <h4 style={{display: 'inline'}} className='highlights'> Rp. 2 billions</h4>
                    </p>
                    <p className="caption-line">Specially Designed by 
                      <h4 style={{display: 'inline'}} className='highlights'> Atelier Riri</h4>
                    </p>
                  </div>
                </Carousel.Caption> 
              </Carousel.Item>

          </Carousel>
        </Container>
      </>
    )
}

export default CarouselHome;