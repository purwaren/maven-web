import { Card, Row, Col , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb4 from '../img/Vission.webp';
import './About.css';
import './ResponsiveAbout.css';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';
import {Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const About = () => {

    return (
        <div>

            <Helmet>
            <title>About Maven</title>
                <meta 
                name='description'
                content='Anything About Maven Realstate Indonesia'
                />

                <meta
                name='keywords'
                content='About Maven, Maven Vission'
                />
            </Helmet>

            <NavbarTop />
                
                <div className="atas">
                    <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        <Card.Img  variant='top' src={Gb4} className='darken-image' />
                    </Container>
                </div>
                
                <div className="tengah">
                <Container className="elemen-tengah">
                    <Row style={{marginBottom: '-100px'}}>
                        <div className="col-stack">
                        <Col>
                        <Stack className='responsive' gap={0}>
                            <img src={Line} alt="" className="garis-stack" />
                            <Link to='' style={{textDecoration: 'none'}}>
                                <p className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack" />
                           <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}} >
                                <p className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></p>
                            </Link>                       
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <p className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <Link to='/about/team' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <p className="text-tengah" >Team<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}}/></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <div style={{visibility: 'hidden'}}>
                            <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <p className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                            </div>
                            </Stack>
                            
                        </Col>
                        </div>
                        
                        <Col className="text-tengah">Our main vision is to be a world class artisan real estate company. Starting 
                        from the smallest step, we believe that courage, consistency, and passion 
                        can lead us to a bigger path. This means to keep evolving in many elements 
                        in order to pursue a better version of us.</Col>
                        <Col className="text-tengah">The bigger the path the easier it 
                        gets to introduce our work to the community. We also hope to create a wide 
                        range of possibilities with this vision. As a result, our business won't follow 
                        the same path; instead, we insist on developing new products.</Col>
            
                    </Row>                
                </Container>
                </div>

                <div className="responsive-kolom-bawah">
                    <Container fluid >
                    <Row style={{paddingTop: '10px'}}>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='' style={{textDecoration: 'none'}}>
                            <p className="text-bawah-res">Vission</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                            <p className="text-bawah-res">Mission</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                            <p className="text-bawah-res">Value</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='/about/team' style={{textDecoration: 'none' , opacity: '0.5'}}>
                            <p className="text-bawah-res">Team</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                    </Row>
                    <Row>
                    <Col className="text-tengah">Our main vision is to be a world class artisan real estate company. Starting 
                        from the smallest step, we believe that courage, consistency, and passion 
                        can lead us to a bigger path. This means to keep evolving in many elements 
                        in order to pursue a better version of us. </Col>
                    </Row>
                    <Row className="row-2-tengah">
                        <Col className="text-tengah">The bigger the path the easier it 
                        gets to introduce our work to the community. We also hope to create a wide 
                        range of possibilities with this vision. As a result, our business won't follow 
                        the same path; instead, we insist on developing new products.</Col>
                    </Row>
                    
                    
                    </Container>
                </div>
                
                
        </div>
    )
}

export default About;