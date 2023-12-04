import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Mission from './components/Mission';
import Value from './components/Value';
import Contact from './components/Contact';
import Team from './components/Team';
import Product from './components/Product';
import Product1 from './components/Product1';
import Investor from './components/Investor';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';


function App() {

  return ( 
    
    <Container fluid style={{padding: '0px'}}>
    <Helmet>
        <title>Maven Realstate Indonesia</title>
        <meta 
          name='description'
          content='LUXURY LIMITED UNITS

          IN WEST JAKARTA
          
          Started from Rp. 2 billions
          
          Specially Designed byAtelier Riri'
        />

        <meta
          name='keywords'
          content='House Property, Maven, Atelier Riri'
        />
    </Helmet>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about/vission' element={<About />} />
      <Route path='/about/mission' element={<Mission />} />
      <Route path='/about/value' element={<Value />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='/about/team' element={<Team />} /> */}
      <Route path='/product' element={<Product />} />
      <Route path='/product/1' element={<Product1 />} />
      <Route path='/investor'  element={<Investor />} />
    </Routes>
    </Container>
  )
}

export default App;
