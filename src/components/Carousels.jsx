import { Carousel} from 'react-bootstrap';
import './HomeStyle.css';
import Gambar1 from '../img/Carousel.png';
import Gambar2 from '../img/Carousel2.png';
import Gambar3 from '../img/Carousel3.png';



const Carousels = () => { 
    return(
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Gambar1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: '777px'}}
          className="d-block w-100"
          src={Gambar2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '777px'}}
          className="d-block w-100"
          src={Gambar3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
        </div>
    )
}


export default Carousels;