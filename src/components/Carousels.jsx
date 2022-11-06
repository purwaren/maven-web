import { Carousel} from 'react-bootstrap';
import './HomeStyle.css';
import Gambar1 from '../img/Carousel.webp';
import Gambar2 from '../img/Carousel2.webp';
import Gambar3 from '../img/Carousel3.webp';



const Carousels = () => { 
    return(
        <div>
            <Carousel>
      <Carousel.Item>
        <img
        style={{width: '479px', height: '542px'}}
          className="d-block w-100"
          src={Gambar1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{width: '479px', height: '542px'}}
          className="d-block w-100"
          src={Gambar2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{width: '479px' ,height: '542px'}}
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