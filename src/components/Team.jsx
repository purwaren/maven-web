import { Card, Row, Col , Container, Stack} from "react-bootstrap";
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

                <Container className="text-nama">
                    {/* <Row style={{paddingTop: '50px', fontSize: 'larger', alignContent: 'space-between', display: 'flex', justifyContent: 'space-around'}}>
                        <Col>Aziz Cahya Perdana</Col>
                        <Col style={{paddingLeft: '120px'}}>Novriansyah Yakub</Col>
                        <Col xs lg='5' style={{paddingLeft: '120px'}}>Tri Mukhlison Anugrah</Col>
                    </Row> */}

                    {/* <Row style={{fontSize: 'smaller'}} className= ''>
                        <Col>CEO instead of (CEO)</Col>
                        <Col style={{paddingLeft: '120px'}}>Architect Partner</Col>
                        <Col style={{paddingLeft: '120px'}}>Founding Partner</Col>
                    </Row> */}
                </Container>

                <Container style={{paddingTop: '30px'}}>
                {/* <Card style={{ width: '18rem' , border: '0'}}>
                    <Card.Img variant="top" src={Aziz} />
                    </Card> */}
                    <Row style={{paddingTop: '10px', fontSize: 'larger', alignContent: 'space-between', display: 'flex', justifyContent: 'space-around'}}>
                        <Col className="text-nama">Aziz Cahya Perdana</Col>
                        <Col className="text-nama" style={{paddingLeft: '185px'}}>Novriansyah Yakub</Col>
                        <Col className="text-nama" xs lg='5' style={{paddingLeft: '180px'}}>Tri Mukhlison Anugrah</Col>
                    </Row>
                    <Row style={{paddingLeft: '0px', paddingTop: '0px', fontSize: 'smaller', alignContent: 'space-between', display: 'flex', justifyContent: 'space-around'}} className= 'text-nama'>
                        <Col style={{}}>CEO</Col>
                        <Col style={{paddingLeft: '123px'}}>Architect Partner</Col>
                        <Col style={{paddingLeft: '124px'}}>Founding Partner</Col>
                    </Row>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <img src={Aziz} alt="" style={{width: '25%' , alignContent: 'flex-start'}} />
                        <img src={Yakub} alt="" style={{width: '25%'}} />
                        <img src={Tri} alt="" style={{width: '25%'}} />
                    </div>
                    <Row style={{ fontSize: 'larger', alignContent: 'space-between', display: 'flex', justifyContent: 'space-around'}}>
                        <Col className= 'text'><p>A passionate and experienced figure who has spent the previous
                        seven years working in the real estate industry and completed more than 250 landed houses as well as 200 apartment units. 
                        He has completed numerous significant projects - from planning, construction, and marketing, in landed houses, condos, as well
                        as apartments.
                        </p></Col>
                        <Col className= 'text' style={{paddingLeft: '120px'}}><p>After earning his master's degree from Trisakti University,
                        Riri established his design and architecture firm, Atelier Riri. A man with a long list of honors, including Bintaro Design District 2018, Arch ID 2020, Daikin Designer Awards 2020. He also spent his 
                        days giving lectures at prestigious universities.</p></Col>
                        <Col className= 'text' style={{paddingLeft: '120px'}}>A trustworthy banker with seven years of promising experience in syariah banking. He was successful in creating Fundex.id, a platform that enables small enterprises to receive funding through equity-and loan-based schemes and is formally supported by OJK.</Col>
                    </Row>
                </Container>
            </div>
                <Container>
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