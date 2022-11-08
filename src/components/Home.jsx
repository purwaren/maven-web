import { Container, Col, Row, Carousel, Button} from 'react-bootstrap';
import './HomeStyle.css';
import Gb1 from '../img/gambar-depan-new.webp';
import Footer from './Footer';
import NavbarTop from './Navbar';
import Carousels from './Carousels';
import Peta from '../img/Maps.webp';
import Jalan from '../img/Jalan.webp';
import Rumahsakit from '../img/Rumah-sakit.webp';
import Mall from '../img/supermarket.webp';
import Lippo from '../img/Lippo.webp';
import Sekolah from '../img/sekolah.webp';
import Bandara from '../img/bandara.webp';
import CarouselHome from './CarouselHome';



function Home(){
    return( 
    <div style={{display: '1'}}>
  
      <NavbarTop />
      <div className='gambar'>
        <CarouselHome />
      </div>
     
    <div>
        <Container fluid style={{paddingLeft: '50px', paddingRight: '50px'}}>
          <div style={{display: 'flex',paddingTop: '50px', justifyContent: 'space-around'}}>
          <Row>
            <Col>
              <img src={Gb1} style={{paddingTop: '35px', width: '100%'}} alt="" />
            </Col>

            <Col xs={1}></Col>
            
            <Col className='text' style={{paddingTop: '70px'}}>
                <h1>Nesta House</h1>
              <p style={{ paddingBottom: '15px', paddingTop: '30px', textAlign: 'justify'}} className='text-content'>
              A masterpiece by Maven Realestat Indonesia which teamed up with Atelier Riri as an exclusive partner.</p>
                <p style={{paddingBottom: '15px', textAlign: 'justify'}} className='text-content'>
                We present 12 exclusive residential units which focus on life balance - in a premium location in West Jakarta.
                </p>

                <p style={{textAlign: 'justify' }} className='text-content'>
                These units are surrounded by various essentials facilities such as malls,  famous schools and reputable hospitals . This makes Nesta House a right choice for families who crave sustainability, comfort, and above all life balance. </p>
              
              
                <Row style={{justifyContent: 'space-around'}}>
                  <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Type</Col>
                  <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Unit Land Size</Col>
                  <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Certificate</Col>
                </Row>
                {/* <Row style={{justifyContent: 'space-around', paddingBottom: '0px'}}>
                  <Col xs={3}></Col>
                  <Col xs={2} className='text-content-3' style={{justifyContent: 'space-between'}}><p style={{fontSize: '10px', display:'inline'}}>2</p></Col>
                  <Col xs={3}></Col>
                </Row>   */}
              <Row style={{justifyContent: 'space-around'}}>
                  <Col className='text-content-3' style={{justifyContent: 'space-between'}}>Townhouse</Col>
                  <Col className='text-content-3' style={{justifyContent: 'space-between'}}>91 - 130 m2</Col>
                  <Col className='text-content-3' style={{justifyContent: 'space-between'}}>Sertifikat Hak Milik (SHM)</Col>
                </Row>

                <Row style={{justifyContent: 'space-around' , paddingTop: '50px'}}>
                  <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Building Size</Col>
                  <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Interior</Col>
                  <Col className='text-content-2' style={{justifyContent: 'space-between'}}></Col>
                </Row>
              <Row style={{justifyContent: 'space-around'}}>
                  <Col className='text-content-3' style={{justifyContent: 'space-between'}}>179 m2</Col>
                  <Col className='text-content-3' style={{justifyContent: 'space-between'}}>Semi Furnished (Optional)</Col>
                  <Col className='text-content-3' style={{justifyContent: 'space-between'}}></Col>
                </Row>

            </Col>
          </Row>
          </div>
        </Container>

      </div>


      <Container fluid style={{ paddingTop: '50px' ,paddingLeft: '50px', paddingRight: '50px'}}>
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

          <Col style={{paddingTop: '85px'}}  >
            <img src={Peta} style={{ width: '100%'}} alt="" />
          </Col>
          
        
          
        </Row>
        
        <h2 className='text-2' style={{fontStyle: 'italic'}}>"True Happiness is When We Enjoy Life With Family, Begins at Home!"</h2>
      </Container>


      <Carousels />
      
      
        <Footer />
     </div>

     
    );
}

export default Home;