import { Form, Row, Col , Container, Button} from "react-bootstrap";
import NavbarTop from './Navbar';
import peta from '../img/Maps.webp'
import './Contact.css';
import './ResponsiveContact.css';
import { Helmet } from "react-helmet";


const Contact = () => {

    return (
        <div>
            
            <Helmet>
                <title>Contact Us</title>
                    <meta 
                    name='description'
                    content='Maven Realstate Indonesia Contact'
                    />

                    <meta
                    name='keywords'
                    content='Contact Maven'
                    />
            </Helmet>

            <NavbarTop />
            <div className="contact-tidak-responsive">
                <Container style={{paddingLeft: '0px', paddingRight: '0px', paddingTop: '50px', paddingBottom: '50px'}}>
                    <Row>
                        <Col style={{paddingRight: '90px'}}>
                            <div className="text-atas-contact">
                                <Container>
                                <Row style={{paddingBottom: '10px'}}>
                                    <Col>Kantor Pusat</Col>
                                    <Col>Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                                        Pondok Ranji, 
                                        Kec. Ciputat Timur, 
                                        Kota Tangerang Selatan, 
                                        Banten 15412</Col>
                                </Row>
                                <Row style={{paddingBottom: '10px'}}>
                                    <Col>Telephone</Col>
                                    <Col>+62 81242421985</Col>
                                </Row>
                                <Row style={{paddingBottom: '25px'}}>
                                    <Col>Email</Col>
                                    <Col>info@mavenindonesia.com</Col>
                                </Row>
                                
                                <Row>
                                       <Form>
                                            <Form.Group className="mb-3"  style={{width: '100%'}} controlId="formBasicEmail">
                                                <Form.Control size="sm" style={{backgroundColor: '#D9D9D9'}} type="text" placeholder="First Name*" />
                                            </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" type="text" placeholder="Last Name*" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" type="email" placeholder="Email*" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" type="text" placeholder="Phone*" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" as="textarea" rows="7" cols="50" placeholder="Comment*"/>
                                                    </Form.Group>
                                                    <Button style={{backgroundColor: '#D9D9D9' ,color: '#527A6F', display: 'flex' ,float: 'right' , border: 'none'}} variant="primary" type="submit">
                                                    Send
                                                </Button>
                                        </Form>
                                    </Row>
                                </Container>
                            </div>
                                
                        </Col>
                        <Col className='gambar-peta'   >
                            <iframe width="400" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3607589398594!2d106.73129457522786!3d-6.2160644937719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f72135a18ded%3A0xa660a58a03ea4539!2sNesta%20House!5e0!3m2!1sid!2sid!4v1685861811791!5m2!1sid!2sid">
                            </iframe>
                        </Col>
                        {/* <Col> <img src={peta} style={{width: '105%'}} alt="" /> </Col> */}
                    </Row>  
                </Container>
            </div>


            <div className="contact-responsive" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                <Container>
                    <div className="text-atas-contact">
                        <Container style={{paddingLeft: '0px', paddingRight: '0px', paddingTop: '50px', paddingBottom: '50px'}}>
                            <Row>
                                <div style={{display: 'flex'}}>
                                <Col style={{display: 'flex',justifyContent: 'center', paddingBottom: '25px'}}> <iframe width="250" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=445&amp;hl=en&amp;q=Jl.%20Perkici%2014,%20Blok%20EB%205%20No.%2015-17%20Tangerang%20Selatan+(Maven%20Realstat%20Indonesia)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> </Col>
                                
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="text-atas-contact">
                                        <Container>
                                        <Row style={{paddingBottom: '10px'}}>
                                            <Col>Kantor Pusat</Col>
                                            <Col>Jl. Perkici 14, Blok EB 5 No. 15 -17, 
                                                Pondok Ranji, 
                                                Kec. Ciputat Timur, 
                                                Kota Tangerang Selatan, 
                                                Banten 15412</Col>
                                        </Row>
                                        <Row style={{paddingBottom: '10px'}}>
                                            <Col>Telephone</Col>
                                            <Col>+62 81242421985</Col>
                                        </Row>
                                        <Row style={{paddingBottom: '25px'}}>
                                            <Col>Email</Col>
                                            <Col>info@mavenindonesia.com</Col>
                                        </Row>
                                        </Container>
                                    </div>
                                </Col>

                                <Row>
                                       <Form>
                                            <Form.Group className="mb-3"  style={{width: '100%'}} controlId="formBasicEmail">
                                                <Form.Control size="sm" style={{backgroundColor: '#D9D9D9'}} type="text" placeholder="First Name*" />
                                            </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" type="text" placeholder="Last Name*" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" type="email" placeholder="Email*" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" type="text" placeholder="Phone*" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Control style={{backgroundColor: '#D9D9D9'}} size="sm" as="textarea" rows="7" cols="50" placeholder="Comment*"/>
                                                    </Form.Group>
                                                    <Button style={{backgroundColor: '#D9D9D9' ,color: '#527A6F', display: 'flex' ,float: 'right' , border: 'none'}} variant="primary" type="submit">
                                                    Send
                                                </Button>
                                        </Form>
                                    </Row>
                            
                            </Row>  
                        </Container>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Contact;