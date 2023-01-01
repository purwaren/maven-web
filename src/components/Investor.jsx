import { Card, Row, Col , Container} from "react-bootstrap";
import NavbarTop from './Navbar';
import investor from '../img/Collab.webp';
import './Investor.css';
import './ResponsiveInvestor.css';
import garis from '../img/Line-miring.webp';
import { Helmet } from "react-helmet";

const Investor = () => {
    return (
        <div>
            <Helmet>
                <title>Collaboration with Us</title>
                    <meta 
                    name='description'
                    content='Maven Corporate Strategies'
                    />

                    <meta
                    name='keywords'
                    content='Collaboration, Maven Realstate Indonesi'
                    />
            </Helmet>

            <NavbarTop />
            <Container fluid className='investor'>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Row>
                <Col style={{paddingLeft: '0px'}}><img src={investor} alt="" width={'100%'} height={'100%'} /></Col>
                <Col className='text-nama' style={{paddingTop: '50px', justifyContent: 'center', marginRight: '0px'}}>
                    <Row style={{justifyContent: 'center', marginRight: '0px' , marginLeft: '0px'}}>
                        <Col>
                            <h6 style={{fontWeight: 'bold', textAlign: 'center'}}>Maven Corporate Strategies</h6>
                    
                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '50px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>1</h6>
                                <Col style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col>
                                <p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}> Running a dynamic business which focuses on the real estate industry.</p>
                            </Col>  
                        </Row>

                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>2</h6>
                                <Col xs={1} style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col><p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}> 
                                Producing products & services which result from the 
                                response of the contemporary issue.
                                </p>
                            </Col>
                        </Row>
                        
                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>3</h6>
                                <Col style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col>
                                <p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}>Collaborating with experts and property owners.</p>
                            </Col>  
                        </Row>

                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>4</h6>
                                <Col xs={1} style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col><p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}> 
                                Producing products & services which result from the 
                                response of the contemporary issue.
                                </p>
                            </Col>
                        </Row>


                        <h6 style={{textAlign: 'center', paddingTop: '50px'}} className='text-bawah'>
                        We’d like to start helping you realize ideas through our work
                        and perspective. Reach out to us using the following platforms
                        to take the first little step toward collaboration
                        </h6>
                        </Col>
                    </Row>
                </Col>

            </Row>

            </div>
            </Container>

            <div className="investor-responsive">
            <Container fluid>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Row>
                <Col style={{paddingLeft: '0px'}}><img src={investor} alt="" width={'103%'} height={'100%'} /></Col>
                <div>
                <Col className='text-nama' style={{paddingTop: '50px', justifyContent: 'center', marginRight: '0px'}}>
                    <Row style={{justifyContent: 'center', marginRight: '0px' , marginLeft: '0px'}}>
                        <Col>
                            <h6 style={{fontWeight: 'bold', textAlign: 'center'}}>Maven Corporate Strategies</h6>
                    
                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '50px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>1</h6>
                                <Col style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col>
                                <p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}> Running a dynamic business which focuses on the real estate industry.</p>
                            </Col>  
                        </Row>

                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>2</h6>
                                <Col xs={1} style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col><p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}> 
                                Producing products & services which result from the 
                                response of the contemporary issue.
                                </p>
                            </Col>
                        </Row>
                        
                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>3</h6>
                                <Col style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col>
                                <p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}>Collaborating with experts and property owners.</p>
                            </Col>  
                        </Row>

                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                            <Col className="center-block" style={{justifyContent: 'center', paddingTop: '10px' , paddingBottom: '10px'}} >
                                <h6 style={{display: 'inline', paddingRight: '20px'}}>4</h6>
                                <Col xs={1} style={{display: 'inline'}}>
                                <img src={garis} alt="" style={{width: '2px', height: '50px', display: 'inline'}} />
                                </Col><p style={{display: 'inline', textAlign: 'justify', paddingLeft: '20px'}}> 
                                Producing products & services which result from the 
                                response of the contemporary issue.
                                </p>
                            </Col>
                        </Row>


                        <h6 style={{textAlign: 'center', paddingTop: '50px'}} className='text-bawah'>
                        We’d like to start helping you realize ideas through our work
                        and perspective. Reach out to us using the following platforms
                        to take the first little step toward collaboration
                        </h6>
                        </Col>
                    </Row>
                   
                </Col>

                </div>
            </Row>
            </div>
            </Container>
            </div>
            
            
        </div>
    )
}

export default Investor