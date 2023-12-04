import {Container ,Carousel, Button, Row, Col,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import '../HomeStyle.css';
import './CarouselFooter.css';
import LivingRoom1 from '../../img/Commercial Use/Living Room Backyard Angle.png';
import stairs from '../../img/Commercial Use/Split Level.png'
import Kitchen from '../../img/Commercial Use/Kitchen 1.png'

const CarouselFooter = () => {

    return (
        <>
          <Container fluid className='container-carousel'>
            <Carousel slide={false}  className='my-carousel-footer'>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={stairs}
                    alt="Second slide"
                    height={200}
                  />  
                  <img
                    className="img-footer-center"
                    src={LivingRoom1}
                    alt="Second slide"
                  />  
                  <img
                    className="img-footer"
                    src={Kitchen}
                    alt="Second slide"
                    height={200}
                  />  
              </Carousel.Item>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={200}
                  />  
                  <img
                    className="img-footer-center-2"
                    src={Kitchen}
                    alt="Second slide"
                    height={280}
                  />  
                  <img
                    className="img-footer"
                    src={stairs}
                    alt="Second slide"
                    height={200}
                  />  
              </Carousel.Item>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={Kitchen}
                    alt="Second slide"
                    height={200}
                  />  
                  <img
                    className="img-footer-center-2"
                    src={stairs}
                    alt="Second slide"
                    height={280}
                  />  
                  <img
                    className="img-footer"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={200}
                  />  
              </Carousel.Item>
              
              {/* <Carousel.Item className='smartphone' >
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
              </Carousel.Item> */}

          </Carousel>
        </Container>
      </>
    )
}

export default CarouselFooter;