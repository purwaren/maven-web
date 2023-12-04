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
  import './ResponsiveHome.css';
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

          <Container style={{marginTop: '100px'}}> {/* Main Menu */}
            <Row className='holder-mid'>
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
                  <Col className='text row-for-txt-top'>
                    <h6>
                    A masterpiece by Maven Realestat Indonesia which teamed up with Atelier Riri as an exclusive partner.
                    <br />
                    <br />
                    <br />
                    We present 12 exclusive residential units which focus on life balance - in a premium location in West Jakarta. 
                    <br />
                    <br />
                    <br />
                    These units are surrounded by various essentials facilities such as malls,  famous schools and reputable hospitals . This makes Nesta House a right choice for families who crave sustainability, comfort, and above all life balance.
                    </h6>
                    <br />
                    <br />
                    
                  </Col>
                </Row>
                <Col className= 'row-for-txt-top'>
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
                <Col className= 'row-for-txt-top'>
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

          
          <Container style={{marginTop: '150px'}} className='menu-mid'> {/*Location , Maps, Sign*/}
            <Row className='holder-mid'>
              <Col>
                <Col style={{paddingLeft: '0px'}}>
                <h1 className='judul-nesta row-for-txt-top'>Nesta House Location</h1>
                <p className='text-content-4 row-for-txt-top' >JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
                <Row >
                  <Col className='photo-text-set' >
                    <img src={Jalan} className='gambar-kecil' alt="" />
                    <p className='text-kecil'>7 minutes to Joglo and Meruya Toll Gate</p>
                  </Col>
                </Row>
                <Row>
                  <Col className='photo-text-set'>
                    <img src={Rumahsakit} className='gambar-kecil' alt="" />
                    <p className='text-kecil'>Nearby from 2 reputable hospitals</p>
                  </Col>
                </Row>
                <Row>
                  <Col className='photo-text-set'>
                    <img src={Mall} className='gambar-kecil' alt="" />
                    <p className='text-kecil'>Nearby from 3 supermarket</p>
                  </Col>
                </Row>
                <Row>
                  <Col className='photo-text-set'>
                    <img src={Lippo} className='gambar-kecil' alt="" />
                    <p className='text-kecil'>15 minutes from Lippo Mall Puri</p>
                  </Col>
                </Row>
                <Row>
                  <Col className='photo-text-set'>
                    <img src={Sekolah} className='gambar-kecil' alt="" />
                    <p className='text-kecil'>Surrounded by Grade A and International Schools</p>
                  </Col>
                </Row>
                <Row>
                  <Col className='photo-text-set'>
                    <img src={Bandara} className='gambar-kecil' alt="" />
                    <p className='text-kecil'>26 minutes to Soekarno Hatta International Airport</p>
                  </Col>
                </Row>
                </Col>
              </Col>

              <Col style={{paddingRight: '0px'}}>
                <Col className='peta-biasa' >
                  <iframe width="500" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                  </iframe>
                </Col>
              </Col>
              {/* <Col className='peta-resp' >
                <iframe width="600" height="750" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                </iframe>
              </Col> */}
              
            </Row>
          </Container>

          {/* <Container style={{marginTop: '100px'}} className='responsive-menu-mid'> Location , Maps, Sign
            <Row>
              <Col>
              <h1 className='judul-nesta row-for-txt-top'>Nesta House Location</h1>
              <p className='text-content-4 row-for-txt-top' >JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
              <Row>
                <Col>
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
              <Col className='gambar-peta'>
                <iframe width="250" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                </iframe>
              </Col>
            </Row>
            </Container> */}


          {/*<Container style={{marginTop: '100px'}} className='responsive-tablet-mid'> Location , Maps, Sign
            <Row>
              <Col>
              <h1 className='judul-nesta row-for-txt-top'>Nesta House Location</h1>
              <p className='text-content-4 row-for-txt-top' >JL. Haji Sa'aba Joglo, Kembangan, Jakarta Barat, DKI Jakarta</p>
              <Row>
                <Col>
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
              <Col className='gambar-peta'   >
                <iframe width="250" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                </iframe>
              </Col>
              </Col>
            </Row>
          </Container>
          */}

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
