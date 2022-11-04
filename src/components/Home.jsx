import { Container, Col, Row, Carousel, Button} from 'react-bootstrap';
import './HomeStyle.css';
import Depan from '../img/Hal-depan-baru.png';
import Depan2 from '../img/Depan2.png';
import Depan3 from '../img/Depan3.png';
import Gb1 from '../img/gambar-depan-new.png';
import Footer from './Footer';
import NavbarTop from './Navbar';
import Carousels from './Carousels';
import Peta from '../img/Maps.png';
import Jalan from '../img/Jalan.png';
import Rumahsakit from '../img/Rumah-sakit.png';
import Mall from '../img/supermarket.png';
import Lippo from '../img/Lippo.png';
import Sekolah from '../img/sekolah.png';
import Bandara from '../img/bandara.png';



function Home(){
    return( 
    <div style={{display: '1'}}>
  
      <NavbarTop />
      
      
      <div className='gambar'>
        {/* <Card border='0'>
          <Card.Img  variant='top' src={Depan} />
        </Card> 
        {/*  */}
        <Carousel >
          <Carousel.Item className=''>
            <img
              className="d-block w-100 darken-image"
              src={Depan}
              alt="First slide"
            />
          <Carousel.Caption style={{alignItems: 'center', justifyContent: 'center', maxHeight:'600px', paddingBottom: '250px'}}>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , marginBottom: '0px'}}>LUXURY LIMITED UNITS</h3>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , textAlign: 'left' ,marginTop: '0px', paddingLeft: '290px'}}>
            IN WEST JAKARTA
          </h3>
          <p style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
            Started from 
            <h3 style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)' , textAlign: 'left' ,marginTop: '0px'}}>
             Rp. 2 Billions
          <p style={{display: 'inline',paddingRight: '50px'}}></p>
          </h3>
          </p>
          <div style={{paddingLeft: '0px', paddingRight: '180px'}}>
           <a href="https://wa.me/6285817000448">
          <Button style={{color: '#527A6F', backgroundColor: '#D9D9D9'}} variant="secondary" size="lg" active>
            Whatsapp
          </Button>
          </a>

          </div>
          
        </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 darken-image"
              src={Depan2}
              alt="Second slide"
            />

          <Carousel.Caption style={{alignItems: 'center', justifyContent: 'center', maxHeight:'600px', paddingBottom: '250px'}}>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , marginBottom: '0px'}}>LUXURY LIMITED UNITS</h3>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , textAlign: 'left' ,marginTop: '0px', paddingLeft: '290px'}}>
            IN WEST JAKARTA
          </h3>
          <p style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
            Started from 
            <h3 style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)' , textAlign: 'left' ,marginTop: '0px'}}>
             Rp. 2 Billions
          <p style={{display: 'inline',paddingRight: '50px'}}></p>
          </h3>
          </p>
          <div style={{paddingLeft: '0px', paddingRight: '180px'}}>
          <a href="https://wa.me/6285817000448">
          <Button style={{color: '#527A6F', backgroundColor: '#D9D9D9'}} variant="secondary" size="lg" active>
            Whatsapp
          </Button>
          </a>
          </div>
          
        </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item >
            
            <img
              className="d-block w-100 darken-image"
              src={Depan3}
              alt="Third slide"
            />
            <Carousel.Caption style={{alignItems: 'center', justifyContent: 'center', maxHeight:'600px', paddingBottom: '250px'}}>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , marginBottom: '0px'}}>LUXURY LIMITED UNITS</h3>
          <h3 style={{color: '#EBE4DA' , filter: 'brightness(100%)' , textAlign: 'left' ,marginTop: '0px', paddingLeft: '290px'}}>
            IN WEST JAKARTA
          </h3>
          <p style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
            Started from 
            <h3 style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)' , textAlign: 'left' ,marginTop: '0px'}}>
             Rp. 2 Billions
          <p style={{display: 'inline',paddingRight: '50px'}}></p>
          </h3>
          </p>
          <div style={{paddingLeft: '0px', paddingRight: '180px'}}>
          <a href="https://wa.me/6285817000448">
          <Button style={{color: '#527A6F', backgroundColor: '#D9D9D9'}} variant="secondary" size="lg" active>
            Whatsapp
          </Button>
          </a>
          </div>
          
        </Carousel.Caption>

          </Carousel.Item>
      </Carousel>

      </div>
     

      <Container>
        <Row style={{paddingTop: '50px'}}>
          <Col>
            <img src={Gb1} style={{paddingTop: '35px' , width: '100%' , height: '90%'}} alt="" />
          </Col>
          <Col className='text' style={{paddingTop: '70px'}}>
            <h1 style={{paddingLeft: '35px'}}>Nesta House</h1>
          <p style={{paddingLeft: '35px', paddingBottom: '15px', paddingTop: '30px'}} className='text-content'>
          A masterpiece by Maven Realestat Indonesia which teamed up with Atelier Riri as an exclusive partner.</p>
            <p style={{paddingLeft: '35px' , paddingBottom: '15px'}} className='text-content'>
            We present 12 exclusive residential units which focus on life balance - in a premium location in West Jakarta.
            </p>

            <p style={{paddingLeft: '35px' }} className='text-content'>
These units are surrounded by various essentials facilities such as malls,  famous schools and reputable hospitals . This makes Nesta House a right choice for families who crave sustainability, comfort, and above all life balance. </p>

          <Row style={{paddingLeft: '35px' , paddingBottom: '10px'}} className='text-content-2'>
            <Col>Type</Col>
            <Col>Unit Land Size</Col>
            <Col>Certificate</Col>
          </Row>

          <Row style={{paddingLeft: '35px'}} className='text-content-3'>
            <Col>Townhouse</Col>
            <Col>72 m2</Col>
            <Col>Sertifikat Hak Milik (SHM)</Col>
          </Row>

          <Row style={{paddingLeft: '35px' , paddingBottom: '10px'}} className='text-content-2'>
            <Col>Building Size</Col>
            <Col>Interior</Col>
            <Col></Col>
            
          </Row>

          <Row style={{paddingLeft: '35px'}} className='text-content-3'>
            <Col>125m2</Col>
            <Col>Semi Furnished (Optional)</Col>
            <Col></Col>
          </Row>



          </Col>

        
          
        </Row>
      </Container>



      <Container>
        <Row style={{paddingTop: '50px'}}>
          
          <Col className='text' style={{paddingTop: '70px'}}>
            <h1 style={{paddingLeft: '0px'}}>Nesta House Location</h1>
          <p style={{paddingLeft: '0px', paddingBottom: '15px', paddingTop: '0px'}} className='text-content-4'>
          JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
          <Col><img src={Jalan} alt="" width={100} /> 7 minutes to Joglo and Meruya Toll Gate</Col>
          <Col style={{marginTop: '0px'}}><img src={Rumahsakit} alt="" width={100} /> Nearby from 2 reputable hospitals</Col>
          <Col><img src={Mall} alt="" width={100} /> Nearby from 3 supermarkets</Col>
          <Col><img src={Lippo} alt="" width={100} /> 15 minutes from Lippo Mall Puri</Col>
          <Col><img src={Sekolah} alt="" width={100} /> Surrounded by Grade A and International Schools</Col>
          <Col><img src={Bandara} alt="" width={100} /> 26 minutes to Soekarno Hatta International Airport</Col>

          </Col>

          <Col>
            <img src={Peta} style={{paddingTop: '85px' , width: '100%' , height: '90%'}} alt="" />
          </Col>
          
        
          
        </Row>
        
        <h2 className='text-2' style={{fontStyle: 'italic'}}>"Home is not a place, it's a Feeling formed by its inhabitants"</h2>
      </Container>


      <Carousels />
      
      
        <Footer />
     </div>

     
    );
}

export default Home;