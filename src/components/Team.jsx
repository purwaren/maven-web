import {Row, Col , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import './Team.css';
import Aziz from '../img/Team.webp';
import Yakub from '../img/Team2.webp';
import Tri from '../img/Team3.webp';
import {Link} from 'react-router-dom';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';


const Team = () => {
    return (
        <div style={{paddingBottom: '50px'}}>
            <div style={{backgroundColor: '#EBE4DA' }}>
                <NavbarTop />

                <Container fluid style={{paddingTop: '25px'}}>
                    <Row style={{paddingBottom: '10px' ,paddingTop: '10px', fontSize: 'medium', alignContent: 'space-between', display: 'flex', justifyContent: 'space-around'}}>
                        <Col>
                        <div>
                        <Col className="text-nama" style={{fontWeight: '400'}}>Aziz Cahya Perdana</Col>
                        <Col className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>CEO</Col>
                        <Col className="text-nama">
                        <img src={Aziz} alt="" style={{width: '80%' , alignContent: 'flex-start', }} />
                        </Col>
                        <Col xs={10} className="text-nama" style={{fontSize: '12px', textAlign: 'justify' ,paddingTop: '15px', fontWeight: '400'}}>
                        A passionate and experienced figure who has spent the previous
                        seven years working in the real estate industry and completed more than 250 landed houses as well as 200 apartment units. 
                        He has completed numerous significant projects - from planning, construction, and marketing, in landed houses, condos, as well
                        as apartments.

                        </Col>
                        </div>
                        </Col>
                        <Col>
                        <div>
                        <Col className="text-nama" style={{fontWeight: '400'}}>Novriansyah Yakub</Col>
                        <Col className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>Architect Partner</Col>
                        <Col className="text-nama">
                        <img src={Yakub} alt="" style={{width: '80%' , alignContent: 'flex-start' ,fontWeight: '400'}} />
                        </Col>
                        <Col xs={10} className="text-nama" style={{fontSize: '12px', textAlign: 'justify', paddingTop: '15px', fontWeight: '400'}}>
                        After earning his master's degree from Trisakti University,
                        Riri established his design and architecture firm, Atelier Riri. A man with a long list of honors, including Bintaro Design District 2018, Arch ID 2020, Daikin Designer Awards 2020. He also spent his 
                        days giving lectures at prestigious universities.

                        </Col>
                        </div>
                        </Col>
                        <Col>
                        <div>
                        <Col className="text-nama" style={{fontWeight: '400'}}>Tri Mukhlison Anugrah</Col>
                        <Col className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>Founding Partner</Col>
                        <Col className="text-nama">
                        <img src={Tri} alt="" style={{width: '80%' , alignContent: 'flex-start'}} />
                        </Col>
                        <Col xs={10} className="text-nama" style={{fontSize: '12px', textAlign: 'justify', paddingTop: '15px', fontWeight: '400'}}>
                        A trustworthy banker with seven years of promising experience in syariah banking. He was successful in creating Fundex.id, a platform that enables small enterprises to receive funding through equity-and loan-based schemes and is formally supported by OJK.

                        </Col>
                        </div>
                        </Col>
                    </Row>
                    

                </Container>
            </div>
                <Container fluid style={{paddingLeft: '50px', paddingRight: '50px'}}>
                <Row style={{ textAlign: 'center', paddingTop: '50px', height: '50%' }}>
                        <Col xs lg='2'>
                            <Stack gap={4}>
                            <img src={Line} alt="" style={{opacity: '0.5'}}/>
                            <Link to='/about/vission' style={{textDecoration: 'none',opacity: '0.5'}}>
                                <h6 className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '75px'}} /></h6>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                           <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}} >
                                <h6 className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" /></h6>
                            </Link>                       
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                            <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <h6 className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></h6>
                            </Link>
                            <img src={Line} alt="" />
                            <Link to='/about/team' style={{textDecoration: 'none'}}>
                                <h6 className="text-tengah" >Team<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}}/></h6>
                            </Link>
                            <img src={Line} alt=""/>

                            </Stack>
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>Our team consists of passionate and skillful people. We connect the dots to provide more livable space for society. There is no doubt that every work will be completed by experts and produce outstanding results. Every project receives the same amount of care, attention, and expertise from us. 
                        </Col>

                        <Col className="text-tengah" style={{ textAlign: 'justify' }}>
                        Because it also matters the most, we cherish the process and pay attention to every detail. We are coming closer as a strong teambecause of our desire to continuously discover and develop
                        new things.
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Team;