import { Card, Row, Col , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb6 from '../img/Value.webp';
import './About.css';
import './ResponsiveValue.css';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';
import {Link} from 'react-router-dom';

const Value = () => {

    return (
        <div style={{paddingBottom: '50px'}}>
            <NavbarTop />
            <div className="atas">
                    <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}}>
                        <Card.Img  variant='top' src={Gb6} className='darken-image' />
                    </Container>
                </div>


                    <div className="tengah" style={{display: 'flex'}}>
                    <Container className="elemen-tengah">
                        <Row style={{marginBottom: '-100px'}}>
                            <div className="col-stack">
                            <Col>
                            <Stack className='responsive' gap={0}>
                                <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                                <Link to='/about/vission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                    <p className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></p>
                                </Link>
                                <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}} >
                                    <p className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></p>
                                </Link>                       
                                <img src={Line} alt="" className="garis-stack" />
                                <Link to='' style={{textDecoration: 'none' }}>
                                    <p className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                                </Link>
                                <img src={Line} alt="" className="garis-stack" />
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
                        <Col className="text-tengah">The products and services we provide exhibit our core principles. Innovative, artistic, and problem-solving are the three core values that we implement in every decision and process. Maven attempts to be present with our values through high-quality artistic products that improve the quality of life in an effort to be present with our ideals.</Col>
                        <Col className="text-tengah">Being a high-quality product implies continuing to research and develop usefully novel ideas. However, we’re not residing the touch of art in creating every piece of product. Not to mention that the product that we crafted must be a problem solver for issues in the community.</Col>

                    </Row>
                </Container>
                </div>

                <div className="responsive-kolom-value">
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
                        <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                            <p className="text-bawah-res">Mission</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='' style={{textDecoration: 'none' }}>
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
                    <Col className="text-tengah">The products and services we provide exhibit our core principles. Innovative, artistic, and problem-solving are the three core values that we implement in every decision and process. Maven attempts to be present with our values through high-quality artistic products that improve the quality of life in an effort to be present with our ideals.</Col>
                    </Row>
                    <Row className="row-2-tengah">
                        <Col className="text-tengah">Being a high-quality product implies continuing to research and develop usefully novel ideas. However, we’re not residing the touch of art in creating every piece of product. Not to mention that the product that we crafted must be a problem solver for issues in the community.</Col>
                    </Row>
                    </Container>
                </div>

                </div>
        
    )
}

export default Value;