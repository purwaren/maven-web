import { Navbar ,Form, Button } from 'react-bootstrap';
import './Footer.css';
import './ResponsiveFooter.css';


function Footer(){
    return( 
      <div>
      <div className='Footer-bar'>
      <Navbar bg='myBg' expand="lg">
          
            <div className='div-tengah'>
              <div className='responsive'>
              <div  className='barisan'>
                <p className='text-footer'>Kantor Pusat</p>
              </div>
              <div  className='barisan'>
                <div className='text-alamat'>
                <p className='text-footer'>
                Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                Pondok Ranji, 
                Kec. Ciputat Timur, 
                Kota Tangerang Selatan, 
                Banten 15412</p>
                </div>
              </div>
              <div style={{display: 'flex'}} className='barisan-responsive2'>
                  <p className='text-footer-sebelah'>Telephone E-Mail</p>
                  <p className='text-footer' style={{display: 'block', paddingLeft: '50px'}}></p>
              </div>

              <div className='barisan-responsive'>
                <p className='text-footer-sebelah2'>+62 81242421985 info@mavenindonesia.com</p>
              </div>
              
              <div style={{display: 'flex'}} className='barisan-tidak-responsive'>
                <p className='text-footer-sebelah2'>+62 81242421985 info@mavenindonesia.com</p>
                <p className='text-footer' style={{display: 'block', paddingLeft: '50px'}}></p>
              </div>
            
              <div className='barisan-pencarian'>
                <p className='text-footer'>Pencarian</p>
              </div>
              <div  className='barisan-button'>
                <Form.Control
                  style={{backgroundColor: '#EBE4DA'}}
                  type="search"
                  className="me-2 rounded-0"
                  aria-label="Search"
                />

                <Button className='rounded-0'  style={{marginLeft: '-8px ', backgroundColor: '#B8B6B6', color: '#EBE4DA' }} variant="outline-none">Go</Button>
              </div>
              </div>
              </div>
            
          
        </Navbar>
      </div>

      <div className='Footer-bar-responsive'>
      <Navbar className='warna-footer'>
          <div className='elemen-tengah'>
            <p className='text-footer-responsive'>Kantor Pusat</p>
            <p className='text-footer-responsive'>
                Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                Pondok Ranji, 
                Kec. Ciputat Timur, 
                Kota Tangerang Selatan, 
                Banten 15412</p>
            {/* <p className='text-footer-responsive'>Telephone &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; +62 81242421985</p> */}
            {/* <p className='text-footer-responsive'>E-Mail &nbsp; &nbsp; &nbsp; &nbsp; info@mavenindonesia.com</p> */}
            <p className='text-footer-responsive'>Telephone</p>
            <p className='text-footer-responsive' style={{marginTop: '-15px'}}>+62 81242421985</p>
            <p className='text-footer-responsive'>E-Mail</p>
            <p className='text-footer-responsive' style={{marginTop: '-15px'}}>info@mavenindonesia.com</p>
            <div className='bawah-banget'>
              <div className='responsive-button'>
                <Form.Control
                  style={{backgroundColor: '#EBE4DA'}}
                  type="search"
                  className="me-2 rounded-0"
                  aria-label="Search"
                />

                <Button className='rounded-0'  style={{marginLeft: '-8px ', backgroundColor: '#B8B6B6', color: '#EBE4DA' }} variant="outline-none">Go</Button>
                </div>
              </div>
          </div>
      </Navbar>
      </div>

      </div>
    
    );
}

export default Footer;