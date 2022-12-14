import {  Row, Col , Container, Button} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb1 from '../img/Product.webp';
import Gb2 from '../img/Product2.webp';
import Gb3 from '../img/Product3.webp';
import Gb4 from '../img/Product4.webp';
import './Product.css';
import './ResponsiveProduct.css';
import Arrow from '../img/Arrow.webp';
import { useNavigate } from "react-router-dom";


const Product = () => { 

    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/product/1';
        navigate(path)
    }

    return (
        <div>
            <NavbarTop />
                <div className="produk-biasa">
                <Container style={{width: '100%', display: 'flex'}}>
                <Row style={{ paddingTop: '50px'}}>
                        <Col style={{paddingTop: '20px'}}> 
                        <img src={Gb1} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Nesta House</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                    
                        </Col>

                        <Col style={{paddingTop: '20px'}}> 
                        <img src={Gb2} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Cipayung Project (Coming Soon)</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                    
                        </Col>
                    </Row>
                </Container>
                </div>

                <div className='produk-biasa'>
                <div style={{paddingBottom: '50px'}}>
                <Container style={{width: '100%', display: 'flex'}}>
                <Row style={{ paddingTop: '50px'}}>
                        <Col style={{paddingTop: '20px'}}> 
                        <img src={Gb3} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA' }} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Property Development</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                    
                        </Col>

                        <Col style={{paddingTop: '20px'}}> 
                        <img src={Gb4} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Asset Management</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                    
                        </Col>
                    </Row>
                </Container>
                </div>
                </div>

                <div className="responsive-produk">
                <div className='produk-1'>
                <Container>
                <Row style={{ paddingTop: '50px'}}>
                        <Col style={{paddingTop: '20px'}}> 
                            <img src={Gb1} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Nesta House</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                        </Col>
                </Row>
                <Row style={{ paddingTop: '20px'}}>
                        <Col style={{paddingTop: '20px'}}> 
                        <img src={Gb2} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Cipayung Project (Coming Soon)</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                        </Col>
                        </Row>
                </Container>
                </div>

                <div className='produk-2'>
                <Container>
                <Row style={{ paddingTop: '50px'}}>
                        <Col style={{paddingTop: '20px'}}> 
                            <img src={Gb3} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Property Development</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                        </Col>
                </Row>
                <Row style={{ paddingTop: '20px', paddingBottom: '25px'}}>
                        <Col style={{paddingTop: '20px'}}> 
                        <img src={Gb4} style={{width: '100%'}}  alt="" />
                            <Col className='text-nama-pr' style={{backgroundColor: '#EBE4DA'}} >
                                <Col>
                                <Row>
                                    <Col><div className='text-button'><p>Asset Management</p> </div></Col>
                                    <Col><div className='button-property'><Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: '10px' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px', width: '20%'}} alt="" /></p>
                                    </Button></div></Col>
                                    </Row>
                                </Col>
                                <div>
                                </div>
                            </Col>
                        </Col>
                        </Row>
                </Container>
                </div>
                </div>

            
        </div>



    )
}


export default Product;