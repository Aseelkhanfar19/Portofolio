import { useState } from 'react';
import Navbar from './components/navbar';
import IntroBox from './components/introBox';
import './App.css';
import Lists from './components/lists';
import Hero from './components/hero';




function App() {
  

  return (
  <>
    <IntroBox>
          <Navbar />
          <Hero />
    </IntroBox>
  </>

);
}


export default App
