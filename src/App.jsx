import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects'; 
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;