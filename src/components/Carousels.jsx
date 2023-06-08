import { Carousel, Container} from 'react-bootstrap';
import './HomeStyle.css';
import Gambar1 from '../img/Carousel.webp';
import Gambar2 from '../img/Carousels2.webp';
import Gambar3 from '../img/Carousels3.webp';
import stairs from '../img/Commercial Use/Split Level.png'
import living from '../img/Commercial Use/Living Room Backyard Angle.png'
import kitchen from '../img/Commercial Use/Kitchen 1.png'



const Carousels = () => { 
    return(
        <div>
          {/* <Container fluid className='car-normal' style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px', paddingBottom: '50px'}}>
            <Carousel>
            <Carousel.Item>
              <img 
                src={stairs}
                className='gambar-car-1'
                alt=""
                />

                <img
                  className='gambar-car-2'
                  src={living}
                  alt="Third slide"
                />
                <img 
                src={kitchen}
                className='gambar-car-3'
                alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src={living}
                className='gambar-car-1-2'
                alt=""
                />

                <img
                  className='gambar-car-2-2'
                  src={kitchen}
                  alt="Third slide"
                />
                <img 
                src={stairs}
                className='gambar-car-3-2'
                alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src={kitchen}
                className='gambar-car-1-3'
                alt=""
                />

                <img
                  className='gambar-car-2-3'
                  src={stairs}
                  alt="Third slide"
                />
                <img 
                src={living}
                className='gambar-car-3-3'
                alt=""
                />
            </Carousel.Item>

            </Carousel>
          </Container>


          <Container fluid className='car-resp' style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px'}}>
            <Carousel>
              <Carousel.Item>
              <img 
                src={stairs}
                style={{display: 'inline', width: '23%',height: '90px', paddingRight: '25px'}}
                alt=""
                />

                <img
                  style={{margin: 'auto', width: '50%'}}
                  src={living}
                  alt="Third slide"
                />
                <img 
                src={kitchen}
                style={{display: 'inline', width: '27%', height: '100px', paddingLeft: '25px'}}
                alt=""
                />
              </Carousel.Item>
              <Carousel.Item>
              <img 
                src={living}
                style={{display: 'inline', width: '27%',height: '100px', paddingRight: '25px'}}
                alt=""
                />

                <img
                  style={{margin: 'auto', width: '48%'}}
                  src={kitchen}
                  alt="Third slide"
                />
                <img 
                src={stairs}
                style={{display: 'inline', width: '25%',height: '100px', paddingLeft: '25px'}}
                alt=""
                />

              </Carousel.Item>
              <Carousel.Item>
              <img 
                src={kitchen}
                style={{display: 'inline', width: '33%', height: '100px', paddingRight: '25px'}}
                alt=""
                />

                <img
                  style={{margin: 'auto', width: '150px'}}
                  src={stairs}
                  alt="Third slide"
                />
                <img 
                src={living}
                style={{display: 'inline', width: '100px', height: '100px', paddingLeft: '25px'}}
                alt=""
                />
              </Carousel.Item>
          </Carousel>
         </Container>       */}

        <Container fluid className='car-normal' style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px', paddingBottom: '50px'}}>
            <Carousel>
            <Carousel.Item>
              <img 
                src={stairs}
                className='gambar-car-1'
                alt=""
                />

                <img
                  className='gambar-car-2'
                  src={living}
                  alt="Third slide"
                />
                <img 
                src={kitchen}
                className='gambar-car-3'
                alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src={living}
                className='gambar-car-1-2'
                alt=""
                />

                <img
                  className='gambar-car-2-2'
                  src={kitchen}
                  alt="Third slide"
                />
                <img 
                src={stairs}
                className='gambar-car-3-2'
                alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src={kitchen}
                className='gambar-car-1-3'
                alt=""
                />

                <img
                  className='gambar-car-2-3'
                  src={stairs}
                  alt="Third slide"
                />
                <img 
                src={living}
                className='gambar-car-3-3'
                alt=""
                />
            </Carousel.Item>

            </Carousel>
          </Container>

          <Container fluid className='car-resp' style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px', paddingTop: '100px', paddingBottom: '50px'}}>
            <Carousel>
            <Carousel.Item>
              <img 
                src={stairs}
                className='gambar-car-1'
                alt=""
                />

                <img
                  className='gambar-car-2'
                  src={living}
                  alt="Third slide"
                />
                <img 
                src={kitchen}
                className='gambar-car-3'
                alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src={living}
                className='gambar-car-1-2'
                style={{height: '110px'}}
                alt=""
                />

                <img
                  className='gambar-car-2-2'
                  src={kitchen}
                  alt="Third slide"
                />
                <img 
                src={stairs}
                className='gambar-car-3-2'
                alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img 
                src={kitchen}
                className='gambar-car-1-3'
                alt=""
                />

                <img
                  className='gambar-car-2-3'
                  src={stairs}
                  style={{height: '150px'}}
                  alt="Third slide"
                />
                <img 
                src={living}
                className='gambar-car-3-3'
                style={{height: '110px'}}
                alt=""
                />
            </Carousel.Item>

            </Carousel>
          </Container>
        </div>
    )
}


export default Carousels;