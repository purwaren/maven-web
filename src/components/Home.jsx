import { Container, Card , Button} from 'react-bootstrap';
import './HomeStyle.css';
import Depan from '../img/Hal-depan.png';
import Gb1 from '../img/Gambar.png';
import Gb2 from '../img/Gambar2.png';
import Gb3 from '../img/Gambar3.png';
import Footer from './Footer';
import NavbarTop from './Navbar';



function Home(){
    return( 
    <div>
  
      <NavbarTop />
      
      <div className='gambar'>
        <Card border='0'>
          <Card.Img  variant='top' src={Depan} />
        </Card>
      </div>

      <div className='text'>
        <h3>Maven Project</h3>
      </div>

      
      <Container fluid className='card-gambar' >
          <Card style={{ width: '25rem' , paddingRight: '20px' }} className='border-0'>
            <Card.Img variant="top" src={Gb1} />
            <Card.Body style={{ backgroundColor: '#EBE4DA' }}>
              <div>

                <Button className='btn-sm' style={{float: 'right', backgroundColor:'#527A6F' , border:'none'}} 
                variant="primary">See Property</Button>

                <Card.Title><h6 className='text-card-judul'>Joglo Maven Townhouse</h6></Card.Title>
                <Card.Text>
                  <p className='text-card'>Jakarta, Indonesia</p>
                </Card.Text>
              </div>
              
              <Card.Text>
                <p className='text-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus ut orci justo. Curabitur consectetur mattis leo ac scelerisque. 
                Maecenas massa erat, hendrerit nec accumsan in, hendrerit at quam. 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        
          <Card style={{ width: '25rem' , paddingLeft: '10px', paddingRight: '10px' }} className='border-0'>
            <Card.Img variant="top" src={Gb2} />
            <Card.Body style={{ backgroundColor: '#EBE4DA' }}>
              <div>

                <Button className='btn-sm' style={{float: 'right', backgroundColor:'#527A6F' , border:'none'}} 
                variant="primary">See Property</Button>

                <Card.Title><h6 className='text-card-judul'>Ansana Project</h6></Card.Title>
                <Card.Text>
                  <p className='text-card'>Bandung, Indonesia</p>
                </Card.Text>
              </div>
              
              <Card.Text>
                <p className='text-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus ut orci justo. Curabitur consectetur mattis leo ac scelerisque. 
                Maecenas massa erat, hendrerit nec accumsan in, hendrerit at quam. 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        
          <Card style={{ width: '25rem' , paddingLeft: '20px' }} className='border-0'>
            <Card.Img variant="top" src={Gb3} />
            <Card.Body style={{ backgroundColor: '#EBE4DA' }}>
              <div>

                <Button className='btn-sm' style={{float: 'right', backgroundColor:'#527A6F' , border:'none'}} 
                variant="primary">See Property</Button>

                <Card.Title><h6 className='text-card-judul'>Maven Townhouse</h6></Card.Title>
                <Card.Text>
                  <p className='text-card'>Jakarta, Indonesia</p>
                </Card.Text>
              </div>
              
              <Card.Text>
                <p className='text-card'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vivamus ut orci justo. Curabitur consectetur mattis leo ac scelerisque. 
                Maecenas massa erat, hendrerit nec accumsan in, hendrerit at quam. 
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        
        <Footer />
     </div>

     
    );
}

export default Home;