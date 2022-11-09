import { Card, Row, Col , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb5 from '../img/Mission.webp';
import './About.css';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';
import {Link} from 'react-router-dom';

const Mission = () => {


    return (
        <div style={{paddingBottom: '50px'}}>
            <NavbarTop />
                <div className='gambar'>
                    <Card border="0">
                        <Card.Img  variant='top' src={Gb5} />
                    </Card> 

                    {/* <img src={Gb4} alt="" /> */}
                <Container fluid style={{paddingLeft: '50px', paddingRight: '50px'}}>
                    <Row style={{ textAlign: 'center', paddingTop: '50px', height: '50%' }}>
                        <Col xs lg='2'>
                            <Stack gap={4}>
                            <img src={Line} alt="" style={{opacity: '0.5'}}/>
                            <Link to='/about/vission' style={{textDecoration: 'none', opacity: '0.5'}}>
                                <h6 className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></h6>
                            </Link>
                            
                            <img src={Line} alt="" />
                            <Link to='' style={{textDecoration: 'none'}}  >
                            <h6 className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></h6>
                            </Link>
                            <img src={Line} alt="" />
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

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>Mission is what makes us keep insisting in moving forward. 
                            The main point 
                            of our missions is:

                            To be at the forefront of the real estate industry 
                            by continuously producing innovative and problem
                            -solving projects for customers, and also providing 
                            a good investment for stakeholders and the people. 
                            We strive to keep growing together as a big family 
                            of the company.
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>
                        By being responsive, creative, and problem-solving, our objective serves to 
                        keep us evolving and focused on delivering top-notch products and services 
                        in the real estate business. In addition to providing high-quality goods, we 
                        work hard to be a wise investment for community members and stakeholders. 
                        Throughout the process, we always related to one another as a whole solid 
                        family. We will also work with trustworthy sources, notably professionals, 
                        to uphold our standards of excellence and contribute to creating a stronger 
                        real estate industry environment.
                        </Col>
                    </Row>
                </Container>
                </div>
        </div>
    )
}

export default Mission;