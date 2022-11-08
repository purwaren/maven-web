import {Container ,Carousel, Button, Row, Col} from 'react-bootstrap';
import './HomeStyle.css';
import Depan from '../img/Hal-depan-baru.webp';
import Depan2 from '../img/Depan2.webp';
import Depan3 from '../img/Depan3.webp';

const CarouselHome = () => {
    return (
        <div>
        <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
        <Carousel>
        <Carousel.Item >
            <img
              className="d-block w-100 darken-image"
              src={Depan}
              alt="Second slide"
            />
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <Carousel.Caption >
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , marginBottom: '0px'}}>LUXURY LIMITED UNITS</h3>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' ,marginTop: '0px'}}>
            IN WEST JAKARTA
          </h3>
          <p style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
            Started from 
            <h3 style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)' ,marginTop: '0px'}}>
             Rp. 2 Billions
          </h3>
          </p>
          <div style={{paddingLeft: '0px'}}>
          <a href="https://wa.me/6281242421985">
          <Button style={{color: '#527A6F', backgroundColor: '#D9D9D9'}} variant="secondary" size="lg" active>
            Whatsapp
          </Button>
          </a>
          </div>
          
        </Carousel.Caption>
        </div>
        </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100 darken-image"
              src={Depan2}
              alt="Second slide"
            />
        <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <Carousel.Caption >
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , marginBottom: '0px'}}>LUXURY LIMITED UNITS</h3>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' ,marginTop: '0px'}}>
            IN WEST JAKARTA
          </h3>
          <p style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
            Started from 
            <h3 style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)' ,marginTop: '0px'}}>
             Rp. 2 Billions
          </h3>
          </p>
          <div style={{paddingLeft: '0px'}}>
          <a href="https://wa.me/6281242421985">
          <Button style={{color: '#527A6F', backgroundColor: '#D9D9D9'}} variant="secondary" size="lg" active>
            Whatsapp
          </Button>
          </a>
          </div>
          
        </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item> 
            <img
              className="d-block w-100 darken-image"
              src={Depan3}
              alt="Second slide"
              
            />
            <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
          <Carousel.Caption style={{justifyContent: 'center', alignItems: 'center',  alignItems: 'center', justifyContent: 'center'}} >
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , marginBottom: '0px', alignItems: 'center', justifyContent: 'center' }}>LUXURY LIMITED UNITS</h3>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' ,marginTop: '0px', alignItems: 'center', justifyContent: 'center'}}>
            IN WEST JAKARTA
          </h3>
          <p style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
            Started from 
            <h3 style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)' ,marginTop: '0px'}}>
             Rp. 2 Billions
          </h3>
          </p>
          <div style={{paddingLeft: '0px'}}>
          <a href="https://wa.me/6281242421985">
          <Button style={{color: '#527A6F', backgroundColor: '#D9D9D9'}} variant="secondary" size="lg" active>
            Whatsapp
          </Button>
          </a>
          </div>
          
        </Carousel.Caption>
       
        </div>
        
        </Carousel.Item>
          
      </Carousel>
      </Container>
      </div>
    )
}

export default CarouselHome;