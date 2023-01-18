import React from 'react';
import {Button, Modal, Alert, Container} from 'react-bootstrap';
import Logo from '../img/Logo.webp';


const Thankyou = () => {
    return (
        <div style={{paddingTop: '100px'}}>
        <Container Fluid>
        <Alert style={{backgroundColor: '#EBE4DA', color: '#527A6F'}}>
        <Alert.Heading>ThankYou!</Alert.Heading>
        <p>
         Thankyou! Your submission has been sent!
        </p>
        <hr />
        <Button href='/contact'>Return</Button>
      </Alert>
      </Container>  
      </div>
    )
}

export default Thankyou;