import { Card, Row, Col , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb4 from '../img/Vission.webp';
import './About.css';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';
import {Link , Route} from 'react-router-dom';

const About = () => {

    let inputStyle = {
        border: '1px solid black'
    }

    return (
        <div style={{paddingBottom: '50px'}}>
            <NavbarTop />
                <div className='gambar'>
                    <Card border="0">
                        <Card.Img  variant='top' src={Gb4} />
                    </Card> 

                    {/* <img src={Gb4} alt="" /> */}
                <Container fluid style={{paddingLeft: '50px', paddingRight: '50px'}}>
                    <Row style={{ textAlign: 'center', paddingTop: '50px', height: '50%' }}>
                        <Col xs lg='2'>
                            <Stack gap={4}>
                            <img src={Line} alt="" />
                            <Link to='' style={{textDecoration: 'none'}}>
                                <h6 className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></h6>
                            </Link>
                            <img src={Line} alt="" />
                           <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}} >
                                <h6 className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></h6>
                            </Link>                       
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                            <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <h6 className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></h6>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                            <Link to='/about/team' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <h6 className="text-tengah" >Team<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}}/></h6>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}}/>

                            </Stack>
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>Our main vision is to be a world class artisan real estate company. Starting 
                            from the smallest step, we believe that courage, consistency, and passion 
                            can lead us to a bigger path. This means to keep evolving in many elements 
                            in order to pursue a better version of us.'
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>
                        The bigger the path the easier it 
                        gets to introduce our work to the community. We also hope to create a wide 
                        range of possibilities with this vision. As a result, our business won't follow 
                        the same path; instead, we insist on developing new products.
                        </Col>
                    </Row>
                </Container>
                </div>
        </div>
    )
}

export default About;