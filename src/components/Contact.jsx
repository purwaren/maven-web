import { Form, Row, Col , Container, Button} from "react-bootstrap";
import NavbarTop from './Navbar';
import peta from '../img/Maps.webp'
import './About.css';


const Contact = () => {

    return (
        <div>
            <NavbarTop />
            <Container Fluid>
                <Row>
                    <Col xs={8}>
                <Row>
                    <Col xs={4} className='text-contact'> <p>Kantor Pusat</p></Col>
                    <Col  xs={6} className='text-contact'>
                    <p>Jl. Perkici 14, Blok EB 5 No. 15 -17,Pondok Ranji,Kec. Ciputat Timur,Kota Tangerang Selatan,Banten 15412</p>
                    </Col>
                </Row>

                <Row style={{marginTop: '-90px'}}>
                    <Col xs={4} className='text-contact'> <p>Telephone</p>  </Col>

                    <Col  xs={3} className='text-contact'>
                    <p>+62 81242421985</p>
                    </Col>
                </Row>
                <Row style={{marginTop: '-80px'}}>
                    <Col xs={4} className='text-contact'> <p>Email</p>  </Col>

                    <Col  xs={4} className='text-contact'>
                    <p>info@mavenindonesia.com</p>
                    </Col>

                <Row>
                <Col xs={9} style={{paddingBottom: '50px'}}>
                    <Form>
                            <Form.Group  className="mb-3" controlId="formBasicEmail">
                                <Form.Control style={{backgroundColor: '#D9D9D9'}} type="text" placeholder="First name*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control style={{backgroundColor: '#D9D9D9'}} type="text" placeholder="Last name*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control style={{backgroundColor: '#D9D9D9'}} type="email" placeholder="Email*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control style={{backgroundColor: '#D9D9D9'}} type="text" placeholder="Phone*" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control style={{backgroundColor: '#D9D9D9'}} as="textarea" placeholder="Comment*" />
                            </Form.Group>
                            
                            <Button style={{backgroundColor: '#D9D9D9' ,color: '#527A6F', display: 'flex' ,float: 'right' , border: 'none'}} variant="primary" type="submit">
                                Send
                            </Button>
                        </Form>
                        
                    </Col>
                    </Row>
                    
                
                    </Row>
                    </Col>
                    <Col xs={0} style={{paddingLeft: '100px'}}>
                    <div style={{paddingTop: '25px'}}>
                    <img src={peta} className='peta' alt=""/>
                    </div>
                    </Col>
                    </Row>
                </Container>        
        </div>
    )
}

export default Contact;