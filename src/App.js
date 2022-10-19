import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Mission from './components/Mission';
import Value from './components/Value';
import Contact from './components/Contact';

function App() {
  return ( 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about/vission' element={<About />} />
      <Route path='/about/mission' element={<Mission />} />
      <Route path='/about/value' element={<Value />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App;
