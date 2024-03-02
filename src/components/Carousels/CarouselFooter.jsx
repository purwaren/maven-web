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
                    height={350}
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
                    height={350}
                  />  
              </Carousel.Item>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={350}
                  />  
                  <img
                    className="img-footer-center-2"
                    src={Kitchen}
                    alt="Second slide"
                    height={450}
                  />  
                  <img
                    className="img-footer"
                    src={stairs}
                    alt="Second slide"
                    height={350}
                  />  
              </Carousel.Item>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={Kitchen}
                    alt="Second slide"
                    height={350}
                  />  
                  <img
                    className="img-footer-center-2"
                    src={stairs}
                    alt="Second slide"
                    height={450}
                  />  
                  <img
                    className="img-footer"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={350}
                  />  
              </Carousel.Item>
          </Carousel>

          <Carousel slide={false}  className='my-carousel-mobile'>
              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={stairs}
                    alt="Second slide"
                    height={100}
                  />  
                  <img
                    className="img-footer-center"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={120}
                  />  
                  <img
                    className="img-footer"
                    src={Kitchen}
                    alt="Second slide"
                    height={100}
                  />  
              </Carousel.Item>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={100}
                    
                  />  
                  <img
                    className="img-footer-center-2"
                    src={Kitchen}
                    alt="Second slide"
                    height={120}

                   
                  />  
                  <img
                    className="img-footer"
                    src={stairs}
                    alt="Second slide"
                    height={100}
                    
                  />  
              </Carousel.Item>

              <Carousel.Item className='item-1'>
                  <img
                    className="img-footer"
                    src={Kitchen}
                    alt="Second slide"
                    height={100}
                    
                  />  
                  <img
                    className="img-footer-center-2"
                    src={stairs}
                    alt="Second slide"
                    height={120}
                   
                  />  
                  <img
                    className="img-footer"
                    src={LivingRoom1}
                    alt="Second slide"
                    height={100}
                    
                  />  
              </Carousel.Item>
          </Carousel>
        </Container>
      </>
    )
}

export default CarouselFooter;