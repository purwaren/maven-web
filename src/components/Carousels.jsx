import { Carousel, Container} from 'react-bootstrap';
import './HomeStyle.css';
import Gambar1 from '../img/Carousel.webp';
import Gambar2 from '../img/Carousels2.webp';
import Gambar3 from '../img/Carousels3.webp';



const Carousels = () => { 
    return(
        <div>
          <Container fluid style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px'}}>
        <Carousel>
          <Carousel.Item>
          <img 
            src={Gambar3}
            style={{display: 'inline', width: '27%', paddingRight: '25px'}}
            alt=""
             />

            <img
              style={{margin: 'auto', width: '46%'}}
              src={Gambar1}
              alt="Third slide"
            />
            <img 
            src={Gambar2}
            style={{display: 'inline', width: '27%', paddingLeft: '25px'}}
            alt=""
             />
          </Carousel.Item>
          <Carousel.Item>
          <img 
            src={Gambar3}
            style={{display: 'inline', width: '27%', paddingRight: '25px'}}
            alt=""
             />

            <img
              style={{margin: 'auto', width: '46%'}}
              src={Gambar1}
              alt="Third slide"
            />
            <img 
            src={Gambar2}
            style={{display: 'inline', width: '27%', paddingLeft: '25px'}}
            alt=""
             />

          </Carousel.Item>
          <Carousel.Item>
          <img 
            src={Gambar3}
            style={{display: 'inline', width: '27%', paddingRight: '25px'}}
            alt=""
             />

            <img
              style={{margin: 'auto', width: '46%'}}
              src={Gambar1}
              alt="Third slide"
            />
            <img 
            src={Gambar2}
            style={{display: 'inline', width: '27%', paddingLeft: '25px'}}
            alt=""
             />
          </Carousel.Item>
    </Carousel>
    </Container>
        </div>
    )
}


export default Carousels;