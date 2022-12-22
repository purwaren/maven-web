import { Card, Row, Col , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb5 from '../img/Mission.webp';
import './Mission.css';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';
import {Link} from 'react-router-dom';
import './ResponsiveMission.css';
import { Helmet } from "react-helmet";


const Mission = () => {


    return (
        <div style={{paddingBottom: '50px'}}>

            <Helmet>
            <title>About Maven</title>
                <meta 
                name='description'
                content='Maven Realstate Indonesia Mission'
                />

                <meta
                name='keywords'
                content='Maven Realstate Mission'
                />
            </Helmet>
            <NavbarTop />
                <div className="atas">
                    <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        <Card.Img  variant='top' src={Gb5} className='darken-image' />
                    </Container>
                </div>

            <div className="tengah-misi">
                <Container className="elemen-tengah">
                    <Row style={{marginBottom: '-100px'}}>
                        <div className="col-stack">
                        <Col>
                        <Stack className='responsive' gap={0}>
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <Link to='/about/vission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <p className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack" />
                           <Link to='' style={{textDecoration: 'none' }} >
                                <p className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></p>
                            </Link>                       
                            <img src={Line} alt="" className="garis-stack" />
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
                        <Col className="text-tengah">Mission is what makes us keep insisting in moving forward. The main point 
                        of our missions is:
                        <br/>
                        <br/>
                        To be at the forefront of the real estate industry 
                        by continuously producing innovative and problem
                        -solving projects for customers, and also providing 
                        a good investment for stakeholders and the people. 
                        We strive to keep growing together as a big family 
                        of the company.</Col>
                        <Col className="text-tengah">By being responsive, creative, and problem-solving, our objective serves to 
                        keep us evolving and focused on delivering top-notch products and services 
                        in the real estate business. In addition to providing high-quality goods, we 
                        work hard to be a wise investment for community members and stakeholders. 
                        Throughout the process, we always related to one another as a whole solid 
                        family. We will also work with trustworthy sources, notably professionals, 
                        to uphold our standards of excellence and contribute to creating a stronger 
                        real estate industry environment.</Col>
            
                    </Row>
                </Container>
                </div>
                
                <div className="responsive-kolom-mission">
                    <Container fluid>
                    <Row>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='/about/vission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                            <p className="text-bawah-res">Vission</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='' style={{textDecoration: 'none'}}>
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
                    <Col className="text-tengah">Mission is what makes us keep insisting in moving forward. The main point 
                        of our missions is:
                        <br/>
                        <br/>
                        To be at the forefront of the real estate industry 
                        by continuously producing innovative and problem
                        -solving projects for customers, and also providing 
                        a good investment for stakeholders and the people. 
                        We strive to keep growing together as a big family 
                        of the company.</Col>
                    </Row>
                    <Row className="row-2-tengah">
                        <Col className="text-tengah">By being responsive, creative, and problem-solving, our objective serves to 
                        keep us evolving and focused on delivering top-notch products and services 
                        in the real estate business. In addition to providing high-quality goods, we 
                        work hard to be a wise investment for community members and stakeholders. 
                        Throughout the process, we always related to one another as a whole solid 
                        family. We will also work with trustworthy sources, notably professionals, 
                        to uphold our standards of excellence and contribute to creating a stronger 
                        real estate industry environment.</Col>
                    </Row>
                    </Container>
                </div>
                
                </div>

                
       
    )
}

export default Mission;