import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Mission from './components/Mission';

function App() {
  return ( 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about/mission' element={<Mission />} />
    </Routes>
  )
}

export default App;
