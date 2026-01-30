import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Experience from './components/Experience';
import Contact from './components/Contact';
import { initScrollReveal } from './utils/scrollReveal';
import FeaturesServices from './components/FeaturesServices';

function App() {
  useEffect(() => {
    // Initialize scroll reveal animations
    initScrollReveal();
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <Welcome/>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <FeaturesServices/>
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;