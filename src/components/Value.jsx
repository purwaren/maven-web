import { Card, Row, Col , Container, Stack} from "react-bootstrap";
import Footer from "./Footer";
import NavbarTop from './Navbar';
import Gb6 from '../img/Value.png';
import './About.css';
import Arrow from '../img/Arrow.png';
import Line from '../img/Line.png';
import {Link} from 'react-router-dom';

const Value = () => {

    return (
        <div style={{paddingBottom: '50px'}}>
            <NavbarTop />
                <div className='gambar'>
                    <Card border="0">
                        <Card.Img  variant='top' src={Gb6} />
                    </Card> 

                    {/* <img src={Gb4} alt="" /> */}
                <Container>
                    <Row style={{ textAlign: 'center', paddingTop: '50px', height: '50%' }}>
                        <Col xs lg='2'>
                            <Stack gap={4}>
                            <img src={Line} alt="" style={{opacity: '0.5'}}/>
                            <Link to='/about/vission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <h6 className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></h6>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                            <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}}  >
                            <h6 className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></h6>
                            </Link>
                            <img src={Line} alt=""  />
                            <Link to='' style={{textDecoration: 'none'}}>
                                <h6 className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></h6>
                            </Link>
                            <img src={Line} alt="" />
                            <Link to='/about/team' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <h6 className="text-tengah" >Team<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}}/></h6>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}}/>
                            </Stack>
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>The products and services we provide 
                        exhibit our core principles. Innovative, artistic, and problem-solving are the three core values that 
                        we implement in every decision and process. 
                        Maven attempts to be present with our values through high-quality artistic products that improve the quality 
                        of life in an effort to be present with our ideals.
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>
                        Being a high-quality product implies continuing to research and develop usefully novel ideas. However, we’re not residing the touch of art in creating every piece of product. Not to mention that the product that we crafted must be a problem solver for issues in the community.
                        </Col>
                    </Row>
                </Container>
                </div>
        </div>
    )
}

export default Value;