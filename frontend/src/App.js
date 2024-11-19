import './App.css';
import {Container} from 'react-bootstrap';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'

function App() {
  const [selectedSection, setSelectedSection] = useState('Home');
  const sections={
    Home: <Home setSelectedSection={setSelectedSection} />,
    About: <About />,
    Work: <Work />,
    Contact: <Contact />
  }
  return (
   <Container fluid className='app '>
      <Navbar setChose={setSelectedSection}></Navbar>
      {sections[selectedSection]}
   </Container>
  );
}

export default App;
