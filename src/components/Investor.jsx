import { Card, Row, Col , Container} from "react-bootstrap";
import NavbarTop from './Navbar';
import investor from '../img/Collab.png';
import './Investor.css';
import garis from '../img/Line-miring.png';

const Investor = () => {
    return (
        <div>
            <NavbarTop />
            <Container fluid>
            <Row>
                <Col style={{paddingLeft: '0px'}}><img src={investor} alt="" style={{width: '90%' , height: '100%'}} /></Col>
                <></>
                <Col className='text-nama' style={{paddingTop: '50px', justifyContent: 'center', marginRight: '0px', paddingRight: '25px'}}>
                    <Row style={{justifyContent: 'center', marginRight: '0px' , marginLeft: '0px'}}>
                        <Col>
                            <h6 style={{fontWeight: 'bold', textAlign: 'center'}}>Maven Corporate Strategies</h6>
                            <Row style={{backgroundColor: '#EBE4DA', paddingTop: '15px',marginTop: '50px', }}>
                                <p className='text-inbox' style={{marginLeft: '25px',}} > 1 <img src={garis} alt="" style={{width: '1px', marginRight: '25px', marginLeft: '25px'}} />
                                    Running a dynamic business which focuses on the real estate industry.
                                </p>

                                
                                <Col>
                                </Col>
                            </Row>
                            <Row style={{backgroundColor: '#EBE4DA', paddingTop: '15px',marginTop: '50px',   }}>
                                <p className='text-inbox' style={{marginLeft: '25px', marginBottom: '-5px', marginTop: '-5px'}} > 2 <img src={garis} alt="" style={{width: '1px', marginRight: '25px', marginLeft: '25px', height: '50px'}} />
                                
                                Producing products & services which result 
                                from the response of the contemporary <p style={{marginLeft: '64px', marginTop: '-15px'}}> issue </p>
                                </p>
                                
                                <Col>
                                </Col>
                            </Row>
                            <Row style={{backgroundColor: '#EBE4DA', paddingTop: '15px',marginTop: '50px', }}>
                                <p className='text-inbox' style={{marginLeft: '25px',}} > 3 <img src={garis} alt="" style={{width: '1px', marginRight: '25px', marginLeft: '25px'}} />
                                Collaborating with experts and property owners.
                                </p>
                                
                                <Col>
                                </Col>
                            </Row>
                            <Row style={{backgroundColor: '#EBE4DA', paddingTop: '15px',marginTop: '50px',  }}>
                                <p className='text-inbox' style={{marginLeft: '25px',}} > 4 <img src={garis} alt="" style={{width: '1px', marginRight: '25px', marginLeft: '25px'}} />
                                Avoiding the common price war strategy by preventing
the low-end market.
                                </p>
                                
                                <Col>
                                </Col>
                                
                            </Row>
                            
                        <Row style={{paddingTop: '50px'}}>
                            <h6 style={{fontStyle: 'italic',fontSize: 'large', textAlign: 'center', marginBottom: '50px', fontWeight: '500'}}>We’d like to start helping you realize ideas through our work
                            and perspective. Reach out to us using the following platforms
                            to take the first little step toward collaboration</h6>
                        </Row>
                        </Col>
                    </Row>
                </Col>


            </Row>


            </Container>
            
            
        </div>
    )
}

export default Investor