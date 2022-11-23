  import { Container, Col, Row, Button} from 'react-bootstrap';
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
  import './ResponsiveHome.css';



  function Home(){
      return( 

      
      <div style={{display: '1'}}>
      
          
        <NavbarTop />
        <div>
          <CarouselHome />
          <div className='center-atas'>
          <p className='media-q' style={{color: '#EBE4DA', fontWeight: 'normal' , filter: 'brightness(100%)' , marginBottom: '0px'}}>LUXURY LIMITED UNITS</p>
            <p className='media-q' style={{color: '#EBE4DA' , fontWeight: 'normal' , filter: 'brightness(100%)' ,marginTop: '-15px'}}>
              IN WEST JAKARTA
            </p>
            <p className='media-tulisankecil' style={{color: '#EBE4DA' , filter: 'brightness(100%)' , paddingLeft: '0px'}}>
              Started from 
              <p className='media-e' style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)', paddingLeft: '5px' ,marginTop: '0px'}}>
              Rp. 2 billions
            </p>
            </p>

            <p className='media-tulisankecil' style={{color: '#EBE4DA' , filter: 'brightness(100%)', paddingLeft: '0px'}}>
              Specially Designed by 
              <p className='media-e' style={{display: 'inline',color: '#EBE4DA' , filter: 'brightness(100%)', paddingLeft: '5px' ,marginTop: '0px'}}>
                Atelier Riri
            </p>
            </p>
            
            <div style={{ paddingLeft: '0px'}}>
            <a href="https://wa.me/6281242421985">
            <Button style={{color: '#527A6F',paddingLeft: '15px',paddingRight: '15px', marginTop: '-15px', backgroundColor: '#D9D9D9' , border: 'none' , borderRadius: '12px'}} variant="secondary" size="sm" active>
              WhatsApp
            </Button>
            </a>
            </div>
          </div>
        </div>
      
        <div className='tengah' style={{paddingLeft: '50px', paddingRight: '50px'}}>
          <Container>
            <div style={{display: 'flex',paddingTop: '80px'}}>
            <Row className='responsive-nesta'>
              <Col>
                <img  src={Gb1} className='gambar-nesta'  alt="" />
              </Col>
            
              
              <Col className='text' style={{paddingTop: '0px'}}>
                  <p className='judul-nesta'>Nesta House</p>
                <p style={{ paddingBottom: '15px', paddingTop: '30px', textAlign: 'justify'}} className='text-content'>
                A masterpiece by Maven Realestat Indonesia which teamed up with Atelier Riri as an exclusive partner.</p>
                  <p style={{paddingBottom: '15px', textAlign: 'justify'}} className='text-content'>
                  We present 12 exclusive residential units which focus on life balance - in a premium location in West Jakarta.
                  </p>

                  <p style={{textAlign: 'justify' }} className='text-content'>
                  These units are surrounded by various essentials facilities such as malls,  famous schools and reputable hospitals . This makes Nesta House a right choice for families who crave sustainability, comfort, and above all life balance. </p>
                
                <Container style={{marginTop: '-20px'}}>
                  <div style={{paddingTop: '0px'}}>
                  <Row className='responsive-teks-tipe' style={{justifyContent: 'space-around'}}>
                    <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Type</Col>
                    <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Unit Land Size</Col>
                    <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Certificate</Col>
                  </Row>
                  </div>

                <div>
                <Row style={{justifyContent: 'space-around'}}>
                    <Col className='text-content-3' style={{justifyContent: 'space-between'}}>Townhouse</Col>
                    <Col className='text-content-3' style={{justifyContent: 'space-between'}}>91 - 130 m2</Col>
                    <Col className='text-content-3' style={{justifyContent: 'space-between'}}>Sertifikat Hak Milik (SHM)</Col>
                  </Row>
                  </div>

                <div>
                  <Row style={{justifyContent: 'space-around' , paddingTop: '20px'}}>
                    <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Building Size</Col>
                    <Col className='text-content-2' style={{justifyContent: 'space-between'}}>Interior</Col>
                    <Col className='text-content-2' style={{justifyContent: 'space-between'}}></Col>
                  </Row>
                  </div>

                <div>
                <Row style={{justifyContent: 'space-around'}}>
                    <Col className='text-content-3' style={{justifyContent: 'space-between'}}>179 m2</Col>
                    <Col className='text-content-3' style={{justifyContent: 'space-between'}}>Semi Furnished (Optional)</Col>
                    <Col className='text-content-3' style={{justifyContent: 'space-between'}}></Col>
                  </Row>
                  </div>
                  </Container>
              </Col>
            </Row>
            </div>
          </Container>

        </div>


        <div className='bawah' style={{paddingLeft: '30px', paddingRight: '50px'}}>
        <Container fluid style={{ paddingTop: '50px' ,paddingLeft: '50px', paddingRight: '50px'}}>
          <Row style={{paddingTop: '50px'}}>
            <Col className='text' style={{paddingTop: '70px'}}>
              <p className='judul-nesta' style={{paddingLeft: '0px'}}>Nesta House Location</p>
              <p style={{paddingLeft: '0px', marginTop: '-15px', paddingBottom: '15px', paddingTop: '0px'}} className='text-content-4'>
              JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
            
              <Col>
              <img src={Peta} className='gambar-peta-responsive' alt="" />
            </Col>
            <Col className='col-gambar-kecil' ><img src={Jalan} className='gambar-kecil' alt=""  /> <p className='text-kecil'> 7 minutes to Joglo and Meruya Toll Gate </p> </Col>
            <Col className='col-gambar-kecil'><img src={Rumahsakit} className='gambar-kecil' alt=""  /> <Col xs={1} style={{display: 'inline'}}>  <p className='text-kecil'> Nearby from 2 reputable hospitals </p> </Col> </Col>
            <Col></Col>
            <Col className='col-gambar-kecil'><img src={Mall} className='gambar-kecil' alt=""  /> <p className='text-kecil'> Nearby from 3 supermarkets </p></Col>
            <Col></Col>
            <Col className='col-gambar-kecil'><img src={Lippo} className='gambar-kecil' alt=""  /> <p className='text-kecil'> 15 minutes from Lippo Mall Puri </p></Col>
            <Col></Col>
            <Col className='col-gambar-kecil'><img src={Sekolah} className='gambar-kecil' alt=""  /> <p className='text-kecil'> Surrounded by Grade A and International Schools </p></Col>
            <Col></Col>
            <Col className='col-gambar-kecil'><img src={Bandara} className='gambar-kecil' alt=""  /> <p className='text-kecil'> 26 minutes to Soekarno Hatta International Airport </p></Col>
            
            </Col>
            <Col style={{paddingTop: '85px'}}  >
              <img src={Peta} className='gambar-peta' alt="" />
            </Col>
            
          <h2 className='text-2'>True Happiness is When We Enjoy Life With Family, Begins at Home!</h2>
          </Row>
          
        </Container>
        </div>


        <Carousels />
        
        
          <Footer />

         
      </div>

      
      );
  }

  export default Home;