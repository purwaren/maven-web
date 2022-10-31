import { Container, Card , Col, Row} from 'react-bootstrap';
import './HomeStyle.css';
import Depan from '../img/Hal-depan-baru.png';
import Gb1 from '../img/gambar-depan-new.png';
import Footer from './Footer';
import NavbarTop from './Navbar';
import Carousels from './Carousels';



function Home(){
    return( 
    <div>
  
      <NavbarTop />
      
      
      <div className='gambar'>
        <Card border='0'>
          <Card.Img  variant='top' src={Depan} />
        </Card> 
{/* 
        <Row>
          <Col>
            <img src={Depan} alt=""  style={{width: '100s%'}}/>  
          </Col>
        </Row> */}

      </div>
     
{/* 
      <div className='text'>
        <h3>Maven Project</h3>
      </div> */}

      <Container>
        <Row style={{paddingTop: '50px'}}>
          <Col>
            <img src={Gb1} style={{paddingTop: '35px' , width: '100%' , height: '90%'}} alt="" />
          </Col>
          <Col className='text'>
            <h1 style={{paddingLeft: '35px'}}>Nesta House</h1>
            <p  style={{paddingLeft: '35px', paddingTop: ' 5px' , paddingBottom: '20px'}} className='text-content'>JL. Simantujak No. 13 - 73, Jakarta Selatan, Indonesia</p>
          <p style={{paddingLeft: '35px', paddingBottom: '15px'}} className='text-content'>In this fast-paced world, a work-life balance must be established and maintained. 
            A good work-life balance should start from the very essential thing such as living space. Most of the crucial fields are centered in the capital city. Jakarta, one of the busiest and fast growing cities in the world, has become a popular place for people to chase their dream. To live in Jakarta means opening the door to more opportunities. We’d like to provide a tranquil and practical nest for people to come after facing the hustle bustle. </p>

            <p style={{paddingLeft: '35px' , paddingBottom: '15px'}} className='text-content'>
            Nesta, a compact and comfortable living space in the heart of the city that will help you to obtain work-life balance. We construct exceptional facilities to raise the worth of
            your living value as well as guarantee security for each residence. Nesta is supported
            by the number of features surrounding the environment and within the houses.
            </p>

            <p style={{paddingLeft: '35px' }} className='text-content'>
            Nesta is the ideal option for everyone who lives in the hustle and bustle 
            of the city but longs for a balanced life.</p>

          <Row style={{paddingLeft: '35px' , paddingBottom: '10px'}} className='text-content-2'>
            <Col>Tipe</Col>
            <Col>Luas Tanah</Col>
            <Col>Sertifikat</Col>
          </Row>

          <Row style={{paddingLeft: '35px'}} className='text-content'>
            <Col>Townhouse</Col>
            <Col>72 m2</Col>
            <Col>Sertifikat Hak Milik</Col>
          </Row>

          <Row style={{paddingLeft: '35px' , paddingBottom: '10px'}} className='text-content-2'>
            <Col>Luas Bangunan</Col>
            <Col>Interior</Col>
            <Col></Col>
            
          </Row>

          <Row style={{paddingLeft: '35px'}} className='text-content'>
            <Col>125m2</Col>
            <Col>Tidak Berperabot</Col>
            <Col></Col>
          </Row>



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