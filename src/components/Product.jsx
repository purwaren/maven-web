import {  Row, Col , Container, Button} from "react-bootstrap";
import NavbarTop from './Navbar';
import Gb1 from '../img/Product.png';
import Gb2 from '../img/Product2.png';
import Gb3 from '../img/Product3.png';
import Gb4 from '../img/Product4.png';
import './Product.css';
import Arrow from '../img/Arrow.png';
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
            <Container>
                <div style={{paddingBottom: '50px'}}>
                    <Row style={{ paddingTop: '50px'}}>
                        <Col> <img src={Gb1} style={{width: '100%'}}  alt="" />
                       
                            <Col xs={12} className='text-nama' style={{backgroundColor: '#EBE4DA'}} >
                                <p style={{paddingTop: '25px', paddingBottom: '25px'}}>Nesta House</p>
                                <div style={{ paddingLeft: '250px',paddingTop: '25px'}}>
                                <Button onClick={routeChange} style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: 'smaller' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px'}} alt="" /></p>
                                    </Button>
                                </div>
                            </Col>
                    
                        </Col>

                        <Col> 
                            <img src={Gb2} style={{width: '100%'}}  alt="" /> 
                            <Col xs={12} className='text-nama' style={{backgroundColor: '#EBE4DA'}} >
                                <p style={{paddingTop: '25px', paddingBottom: '25px'}}>Cipayung Project (Coming soon)</p>
                                <div style={{ paddingLeft: '100px',paddingTop: '25px'}}>
                                <Button style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: 'smaller' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px'}} alt="" /></p>
                                    </Button>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '50px', paddingBottom: '0px'}}>
                        <Col> <img src={Gb3} style={{width: '100%'}}  alt="" />
                       
                            <Col xs={12} className='text-nama' style={{backgroundColor: '#EBE4DA'}} >
                                <p style={{paddingTop: '25px', paddingBottom: '25px'}}>Property Development</p>
                                <div style={{ paddingLeft: '170px',paddingTop: '25px'}}>
                                <Button style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: 'smaller' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px'}} alt="" /></p>
                                    </Button>
                                </div>
                            </Col>
                    
                        </Col>

                        <Col> 
                            <img src={Gb4} style={{width: '100%'}}  alt="" /> 
                            <Col xs={12} className='text-nama' style={{backgroundColor: '#EBE4DA'}} >
                                <p style={{paddingTop: '25px', paddingBottom: '25px'}}>Asset Management</p>
                                <div style={{ paddingLeft: '200px',paddingTop: '25px'}}>
                                <Button style={{background: 'none', border:'none'}} >
                                    <p style={{fontSize: 'smaller' , color:'#527A6F'}}>See Property<img src={Arrow} style={{paddingLeft:'10px'}} alt="" /></p>
                                    </Button>
                                </div>
                            </Col>
                        </Col>
                    </Row>
                </div>
                
            </Container>
        </div>
    )
}


export default Product;