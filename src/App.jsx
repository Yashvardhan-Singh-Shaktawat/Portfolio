import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ScrollAnimationSection from './components/ScrollAnimationSection';
import Skills from './components/Skills';
import GithubSection from './components/GithubSection';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize theme from localStorage, default to light theme for mockup feel
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ marginTop: '70px' }}>
        <Hero />
        <About />
        <Projects />
        <ScrollAnimationSection />
        <Skills />
        <GithubSection theme={theme} />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
