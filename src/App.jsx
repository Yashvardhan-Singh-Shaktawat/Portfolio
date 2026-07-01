import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

// Lazy load below-the-fold components
const Projects = lazy(() => import('./components/Projects'));
const ScrollAnimationSection = lazy(() => import('./components/ScrollAnimationSection'));
const Skills = lazy(() => import('./components/Skills'));
const GithubSection = lazy(() => import('./components/GithubSection'));
const Education = lazy(() => import('./components/Education'));
const Faq = lazy(() => import('./components/Faq'));
const Contact = lazy(() => import('./components/Contact'));

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
        <Suspense fallback={<div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>Loading projects...</div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <ScrollAnimationSection />
        </Suspense>
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <GithubSection theme={theme} />
        </Suspense>
        <Suspense fallback={null}>
          <Education />
        </Suspense>
        <Suspense fallback={null}>
          <Faq />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
