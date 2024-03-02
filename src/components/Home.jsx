  import { Container, Col, Row, Button} from 'react-bootstrap';
  import './HomeStyle.css';
  import Gb1 from '../img/gambar-depan-new.webp';
  import Footer from './Footer';
  import NavbarTop from './NavigationBar/Navbar';
  import Carousels from './Carousels/CarouselHome';
  import Jalan from '../img/Jalan.webp';
  import Rumahsakit from '../img/Rumah-sakit.webp';
  import Mall from '../img/supermarket.webp';
  import Lippo from '../img/Lippo.webp';
  import Sekolah from '../img/sekolah.webp';
  import Bandara from '../img/bandara.webp';
  import CarouselHome from './Carousels/CarouselHome';
  // import './ResponsiveHome.css';
import CarouselFooter from './Carousels/CarouselFooter';



  function Home(){

    const handleClick = () => {
      const phoneNumber = '6281317920106';

      const url = `https://wa.me/${phoneNumber}`;
      window.open(url, '_blank');
    }

      return(       
        <div>
          <NavbarTop /> {/* Navbar */}
          <button
              className="whatsapp-button"
              onClick={handleClick}
            >
              WhatsApp
          </button>

        <div>
          <CarouselHome />    {/* Carousel Top */}
          <Container className='main-menu-desktop' style={{marginTop: '100px'}}> {/* Main Menu */}
            <Row>
              <Col>
                <img src={Gb1} className='gambar-row-1' alt="" />
              </Col>
              <Col>   
                <Row>
                  <Col>
                    <h1 className='judul-nesta'>Nesta House</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className='text-main'>
                    <p>
                    A masterpiece by Maven Realestat Indonesia which teamed up with Atelier Riri as an exclusive partner.
                    <br />
                    <br />
                    <br />
                    We present 12 exclusive residential units which focus on life balance - in a premium location in West Jakarta. 
                    <br />
                    <br />
                    <br />
                    These units are surrounded by various essentials facilities such as malls,  famous schools and reputable hospitals . This makes Nesta House a right choice for families who crave sustainability, comfort, and above all life balance.
                    </p>
                    <br />
                    <br />
                    
                  </Col>
                </Row>

                <Col>
                  <Row className='text-content-2'>
                    <Col><p>Type</p></Col>
                    <Col><p>Unit Land Size</p></Col>
                    <Col><p>Certificate</p></Col>
                  </Row>
                  <Row className='text-content-3'>
                    <Col><p>Townhouse</p></Col>
                    <Col><p>91 - 130 m2</p></Col>
                    <Col><p>Sertifikat Hak Milik (SHM)</p></Col>
                  </Row>
                </Col>
                <br />
                <Col >
                  <Row className='text-content-2'>
                    <Col><p>Building Size</p></Col>
                    <Col><p>Interior</p></Col>
                    <Col><p style={{display: 'inline'}}></p></Col>
                  </Row>
                  <Row className='text-content-3'>
                    <Col><p>179 m2</p></Col>
                    <Col><p style={{display: 'inline'}}>Semi Furnished (Optional)</p></Col>
                    <Col><p style={{display: 'inline'}}></p></Col>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Container>

          <Container className='main-menu-mobile'> {/* Main Menu */}
            <div>
              <img src={Gb1} className='gb-resp' alt="" />
              <h1 className='nesta-resp'>Nesta House</h1>
              <br/>
              <p className='nesta-content'>
              A masterpiece by Maven Realestat Indonesia which teamed up with Atelier Riri as an exclusive partner.
              <br/>
              <br/>
              We present 12 exclusive residential units which focus on life balance - in a premium location in West Jakarta.
              <br/>
              <br/>
              These units are surrounded by various essentials facilities such as malls, famous schools and reputable hospitals . This makes Nesta House a right choice for families who crave sustainability, comfort, and above all life balance.
              </p>
            </div>
          </Container>

          
          <Container style={{marginTop: '150px'}} className='menu-mid-desktop'> {/*Location , Maps, Sign*/}
            <Row>
              <Col>
                <Col style={{paddingLeft: '0px'}}>
                  <h1 className='nesta-loc'>Nesta House Location</h1>
                  <p className='text-content-4' >JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
                  <Row >
                    <Col >
                      <img src={Jalan} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>7 minutes to Joglo and Meruya Toll Gate</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Rumahsakit} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>Nearby from 2 reputable hospitals</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Mall} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>Nearby from 3 supermarket</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Lippo} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>15 minutes from Lippo Mall Puri</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Sekolah} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>Surrounded by Grade A and International Schools</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Bandara} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>26 minutes to Soekarno Hatta International Airport</p>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col>
                <iframe width="100%" className='gmaps' height="90%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                  </iframe>
              </Col>
            </Row>
          </Container>

          <Container style={{marginTop: '100px', marginBottom: '200px'}} className='menu-mid-mobile'> {/*Location , Maps, Sign*/}
            <Row>
              <Col>
                <Col style={{paddingLeft: '0px'}}>
                  <h1 className='nesta-loc'>Nesta House Location</h1>
                  <p className='text-content-4' >JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
                  <Row >
                    <Col >
                      <img src={Jalan} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>7 minutes to Joglo and Meruya Toll Gate</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Rumahsakit} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>Nearby from 2 reputable hospitals</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Mall} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>Nearby from 3 supermarket</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Lippo} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>15 minutes from Lippo Mall Puri</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Sekolah} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>Surrounded by Grade A and International Schools</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img src={Bandara} className='gambar-kecil' alt="" />
                      <p className='text-kecil'>26 minutes to Soekarno Hatta International Airport</p>
                    </Col>
                  </Row>
                  
                </Col>
                <iframe style={{paddingTop: '50px'}} width="100%" className='gmaps' height="50%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                  </iframe>
              </Col>
            </Row>
          </Container>

          <Container className='txt-upper-carousel'>
            <p>True Happiness is When We Enjoy Life With Family, Begins at Home!</p>
          </Container>
           
           {/* <Carousels /> */}
          <CarouselFooter />

           <Footer />
        </div>
      </div>

      
      );
  }

  export default Home;
