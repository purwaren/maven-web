import {Row, Col,Card , Container, Stack} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb5 from '../img/Mission.webp'
import './Team.css';
import './ResponsiveTeam.css';
import Aziz from '../img/Team.webp';
import Yakub from '../img/Team2.webp';
import Tri from '../img/Team3.webp';
import {Link} from 'react-router-dom';
import Arrow from '../img/Arrow.webp';
import Line from '../img/Line.webp';
import { Helmet } from "react-helmet";


const Team = () => {
    return (
        <div style={{paddingBottom: '50px'}}>
            <Helmet>
                <title>About Maven</title>
                    <meta 
                    name='description'
                    content='Our Team'
                    />

                    <meta
                    name='keywords'
                    content='Maven Realstate Indonesia Team'
                    />
            </Helmet>
            
            <div style={{backgroundColor: '#EBE4DA'}}>
                <NavbarTop />
                <div className="atas">
                    <Container fluid style={{paddingLeft: '0px', paddingRight: '0px', display: 'flex', border: 'none'}}>
                        <Card.Img  variant='top' src={Gb5} className='darken-image' />   
                    </Container>
                </div>
                <div className='atas-team' style={{backgroundColor: '#EBE4DA'}}>
                
                <Container fluid style={{paddingTop: '25px'}}>
                    <Row style={{paddingBottom: '10px' ,paddingTop: '10px', fontSize: 'medium'}}>
                        <Col style={{paddingLeft: '75px'}}>
                        <div>
                        <Col  className="text-nama" style={{fontWeight: '400'}}>Aziz Cahya Perdana</Col>
                        <Col  className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>CEO</Col>
                        
                        <Col className="text-nama">
                        <img src={Aziz} alt="" style={{width: '80%' }} />
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
            </div>

            
            <div className='atas-team-responsive' style={{backgroundColor: '#EBE4DA'}}>
                <Container fluid style={{paddingTop: '15px'}}>
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
                        <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                            <p className="text-bawah-res">Value</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                        <Col> 
                        <img src={Line} alt="" style={{marginBottom: '-25px'}} className="garis-stack" />
                        <Link to='' style={{textDecoration: 'none' }}>
                            <p className="text-bawah-res">Team</p> </Link>
                        <img src={Line} alt="" className="garis-stack" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Col className="text-nama" style={{fontWeight: '400'}}>Aziz Cahya Perdana</Col>
                        <Col className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>CEO</Col>
                        <Col className="text-nama">
                        <img src={Aziz} alt="" style={{width: '100%' , alignContent: 'flex-start', }} />
                        </Col>
                        <Col className="text-nama" style={{fontSize: '12px', textAlign: 'justify' ,paddingTop: '15px', fontWeight: '400'}}>
                        A passionate and experienced figure who has spent the previous
                        seven years working in the real estate industry and completed more than 250 landed houses as well as 200 apartment units. 
                        He has completed numerous significant projects - from planning, construction, and marketing, in landed houses, condos, as well
                        as apartments.
                        </Col>
                        </Col>
                    </Row>

                    <Row style={{paddingTop: '25px'}}>
                        <Col>
                        <Col className="text-nama" style={{fontWeight: '400'}}>Novriansyah Yakub</Col>
                        <Col className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>Architect Partner</Col>
                        <Col className="text-nama">
                        <img src={Yakub} alt="" style={{width: '100%' , alignContent: 'flex-start' ,fontWeight: '400'}} />
                        </Col>
                        <Col className="text-nama" style={{fontSize: '12px', textAlign: 'justify', paddingTop: '15px', fontWeight: '400'}}>
                        After earning his master's degree from Trisakti University,
                        Riri established his design and architecture firm, Atelier Riri. A man with a long list of honors, including Bintaro Design District 2018, Arch ID 2020, Daikin Designer Awards 2020. He also spent his 
                        days giving lectures at prestigious universities.
                        </Col>
                        </Col>
                    </Row>

                    <Row style={{paddingTop: '25px', paddingBottom: '15px'}}>
                        <Col>
                        <Col className="text-nama" style={{fontWeight: '400'}}>Tri Mukhlison Anugrah</Col>
                        <Col className="text-nama" style={{fontSize: 'smaller', fontWeight: '400'}}>Founding Partner</Col>
                        <Col className="text-nama">
                        <img src={Tri} alt="" style={{width: '100%' , alignContent: 'flex-start'}} />
                        </Col>
                        <Col className="text-nama" style={{fontSize: '12px', textAlign: 'justify', paddingTop: '15px', fontWeight: '400'}}>
                        A trustworthy banker with seven years of promising experience in syariah banking. He was successful in creating Fundex.id, a platform that enables small enterprises to receive funding through equity-and loan-based schemes and is formally supported by OJK.

                        </Col>
                        </Col>
                    </Row>
                    

                </Container>
                </div>
       

            <div className="tengah-team" >
                    <Container className="elemen-tengah-team">
                        <Row style={{marginBottom: '-100px'}}>
                        <div className="col-stack">
                        <Col>
                        <Stack className='responsive' gap={0}>
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <Link to='/about/vission' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <p className="text-tengah" >Vission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                           <Link to='/about/mission' style={{textDecoration: 'none' , opacity: '0.5'}} >
                                <p className="text-tengah" >Mission<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                            </Link>                       
                            <img src={Line} alt="" className="garis-stack" style={{opacity: '0.5'}} />
                            <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5' }}>
                                <p className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack"  />
                            <Link to='' style={{textDecoration: 'none' }}>
                                <p className="text-tengah" >Team<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}}/></p>
                            </Link>
                            <img src={Line} alt="" className="garis-stack"  />
                            <div style={{visibility: 'hidden'}}>
                            <Link to='/about/value' style={{textDecoration: 'none' , opacity: '0.5'}}>
                                <p className="text-tengah" >Value<img src={Arrow} className='arrow' alt="" style={{marginLeft: '85px'}} /></p>
                            </Link>
                            <img src={Line} alt="" style={{opacity: '0.5'}} />
                            </div>
                            </Stack>
                            
                        </Col>
                        </div>
                        <Col className="text-tengah">Our team consists of passionate and skillful people. We connect the dots to provide more livable space for society. There is no doubt that every work will be completed by experts and produce outstanding results. Every project receives the same amount of care, attention, and expertise from us. </Col>
                        <Col className="text-tengah" >Because it also matters the most, we cherish the process and pay attention to every detail. We are coming closer as a strong teambecause of our desire to continuously discover and develop
                            new things.</Col>
                    </Row>
                </Container>
                </div>

                <div className="responsive-kolom-team">
                    <Container fluid style={{paddingTop: '25px'}}>
                    <Row>
                    <Col className="text-tengah">Our team consists of passionate and skillful people. We connect the dots to provide more livable space for society. There is no doubt that every work will be completed by experts and produce outstanding results. Every project receives the same amount of care, attention, and expertise from us. </Col>
                    </Row>
                    <Row className="row-2-tengah" >
                        <Col className="text-tengah" style={{paddingTop: '25px'}}>Because it also matters the most, we cherish the process and pay attention to every detail. We are coming closer as a strong teambecause of our desire to continuously discover and develop
                        new things.</Col>
                    </Row>
                    </Container>
                </div>
        </div>
    )
}

export default Team;