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


            <Container fluid className='investor' >
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Row>
                <Col style={{paddingLeft: '0px'}}><img src={investor} alt="" width={'100%'} height={'100%'} /></Col>
                <Col className='text-nama' style={{paddingTop: '50px', justifyContent: 'center', marginRight: '0px'}}>
                    <Row style={{justifyContent: 'center', marginRight: '50px' , marginLeft: '50px'}}>
                        <Col>
                            <h6 style={{fontWeight: 'bold', textAlign: 'center'}}>Maven Corporate Strategies</h6>
                    


                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '25px' }}>          
                            
                            <p style={{display: 'inline' , fontSize: '15px', paddingTop: '15px', paddingLeft: '20px'}}> 1 
                            <div style={{display: 'inline', paddingLeft: '20px'}}>
                            <img src={garis} style={{width: '2px', height: '50px', paddingTop: '5px', paddingBottom: '5px'}} alt="" />
                            </div>
                            <p style={{display: 'inline', fontSize: '12px', paddingLeft:'25px'}}> Running a dynamic business which focuses on the real estate industry.</p>
                            </p>
                                
                        </Row>


                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '25px' }}>          
                            
                            <p style={{display: 'inline' , fontSize: '15px', paddingTop: '15px', paddingLeft: '20px'}}> 2
                            <div style={{display: 'inline', paddingLeft: '20px'}}>
                            <img src={garis} style={{width: '2px', height: '50px', paddingTop: '5px', paddingBottom: '5px'}} alt="" />
                            </div>
                            <p style={{display: 'inline', fontSize: '12px', paddingLeft:'25px'}}> Producing products & services which result from the response of the contemporary issue </p>
                            
                            </p>
                                
                        </Row>

                        
                        
                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '25px' }}>          
                            
                            <p style={{display: 'inline' , fontSize: '15px', paddingTop: '15px', paddingLeft: '20px'}}> 3 
                            <div style={{display: 'inline', paddingLeft: '20px'}}>
                            <img src={garis} style={{width: '2px', height: '50px', paddingTop: '5px', paddingBottom: '5px'}} alt="" />
                            </div>
                            <p style={{display: 'inline', fontSize: '12px', paddingLeft:'25px'}}> Collaborating with experts and property owners.</p>
                            </p>
                                
                        </Row>

                        <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '25px' }}>          
                            
                            <p style={{display: 'inline' , fontSize: '15px', paddingTop: '15px', paddingLeft: '20px'}}> 4
                            <div style={{display: 'inline', paddingLeft: '20px'}}>
                            <img src={garis} style={{width: '2px', height: '50px', paddingTop: '5px', paddingBottom: '5px'}} alt="" />
                            </div>
                            <p style={{display: 'inline', fontSize: '12px', paddingLeft:'25px'}}> Avoiding the common price war strategy by preventing the low-endmarket. </p>
                            
                            </p>
                                
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
                <div className="test-investor">
                <Col className='text-nama' style={{paddingTop: '50px', justifyContent: 'center', marginRight: '0px'}}>
                    <Row style={{justifyContent: 'center', marginRight: '0px' , marginLeft: '0px'}}>
                        <Col>
                            <h6 style={{fontWeight: 'bold', textAlign: 'center'}}>Maven Corporate Strategies</h6>
                        <Container fluid>
                            <div>
                                <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                                    <Col xs={2} style={{marginRight: '-25px'}} > <p style={{display: 'inline', paddingRight: '5px'}}>1</p> <img src={garis} style={{height: '65px',paddingTop: '15px', paddingBottom: '15px'}} alt="" /> </Col>
                                    <Col style={{paddingTop: '15px', paddingBottom: '15px'}} >Running a dynamic business which focuses on the realestate industry.</Col>
                                </Row>
                                <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                                    <Col xs={2} style={{marginRight: '-25px'}} > <p style={{display: 'inline', paddingRight: '5px'}}>2</p> <img src={garis} style={{height: '65px',paddingTop: '15px', paddingBottom: '15px'}} alt="" /> </Col>
                                    <Col style={{paddingTop: '15px', paddingBottom: '15px'}} >Producing products & services which result from the response of the contemporary issue.</Col>
                                </Row>
                                <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                                    <Col xs={2} style={{marginRight: '-25px'}} > <p style={{display: 'inline', paddingRight: '5px'}}>3</p> <img src={garis} style={{height: '65px',paddingTop: '15px', paddingBottom: '15px'}} alt="" /> </Col>
                                    <Col style={{paddingTop: '15px', paddingBottom: '15px'}} >Collaborating with experts and property owners.</Col>
                                </Row>
                                <Row className='text-inbox' style={{backgroundColor: '#EBE4DA',marginTop: '20px' }}>
                                    <Col xs={2} style={{marginRight: '-25px'}} > <p style={{display: 'inline', paddingRight: '5px'}}>4</p> <img src={garis} style={{height: '65px',paddingTop: '15px', paddingBottom: '15px'}} alt="" /> </Col>
                                    <Col style={{paddingTop: '15px', paddingBottom: '15px'}} >Avoiding the common price war strategy by preventing the low-end market.</Col>
                                </Row>
                            </div>
                        </Container>


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