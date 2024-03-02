import { Navbar } from 'react-bootstrap';
import './Footer.css';


function Footer(){
    return( 
      <div>
        <div className='adjustment'>
          <Navbar bg='myBg' expand="lg">
              <div className='footer-content'>
                <p> Kantor pusat </p>
                <p> Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                  Pondok Ranji, <br />
                  Kec. Ciputat Timur, 
                  Kota Tangerang Selatan, 
                  Banten 15412 <br /> <br /> </p>
                  <p>Telephone <br />
                  +62 81242421985</p>
                  <p>E - Mail <br />
                  info@mavenindonesia.com
                  </p>
                  <p></p>
              </div>
            </Navbar>
          </div>

          <div className='mobile'>
          <Navbar bg='myBg' expand="lg">
              <div className='footer-content'>
                <p>Kantor Pusat</p>
                <p> Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                  Pondok Ranji, <br />
                  Kec. Ciputat Timur, 
                  Kota Tangerang Selatan, 
                  Banten 15412 <br /> <br /> </p>
                <p>Telephone <br />
                +62 81242421985
                </p>
                <p>E - Mail <br />
                info@mavenindonesia.com
                 </p>

              </div>
            </Navbar>
          </div>
      </div>
    
    );
}

export default Footer;