import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Video from './components/Video';
import Achievements from './components/Achievements';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{overflowX:"hidden"}}>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Video/>
      <Element name="achievements">
        <Achievements />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="sponsors">
        <Sponsors />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      </div>
    </div>
  );
}

export default App;