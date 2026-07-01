import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">

          <div className="hero-text animate-fade-in-up">
            <span className="hero-tagline">Welcome to my lab</span>

            <h1 className="hero-title">
              Full Stack<br />
              <span className="gradient-text">React & AI</span><br />
              Developer
            </h1>

            <p className="hero-subtitle">
              Hi, I'm <strong>Yashvardhan Singh Shaktawat</strong>. I am a Full Stack Developer specializing in React, Next.js, Node.js, AI, and Machine Learning. I build scalable web applications, real-time IoT networks, and modern user experiences.
            </p>

            <div className="hero-actions">
              <a 
                href="https://docs.google.com/document/d/1ljfpW5bmO3hLKCiRATboFy6b0CfRslf7/edit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Resume
              </a>
              <a 
                href="https://docs.google.com/document/d/1ljfpW5bmO3hLKCiRATboFy6b0CfRslf7/export?format=pdf" 
                className="btn btn-secondary"
              >
                Download PDF
              </a>
            </div>
          </div>

          <div className="hero-visual-container">
            {/* Ambient visual annotations matching the mockup */}
            {/* <span className="micro-label micro-label-top">Floating micro-animations</span>
            <span className="micro-label micro-label-bottom">AI, Full-Stack & IoT Integrations</span> */}

            <div className="hero-image-wrapper">
              <div className="hero-image-glow"></div>
              <img
                src="/hero-character.webp"
                alt="3D developer character"
                className="hero-character-image animate-float"
                width="360"
                height="360"
              />
            </div>

            {/* Orbiting nodes representing tech pillars */}
            <div className="orbit-node node-1">
              <span className="node-dot" style={{ backgroundColor: '#61dafb' }}></span>
              React.js
            </div>

            <div className="orbit-node node-2">
              <span className="node-dot" style={{ backgroundColor: '#092e20' }}></span>
              Django
            </div>

            <div className="orbit-node node-3">
              <span className="node-dot" style={{ backgroundColor: '#4caf50' }}></span>
              Computer Vision
            </div>

            <div className="orbit-node node-4">
              <span className="node-dot" style={{ backgroundColor: '#e67e22' }}></span>
              ESP32 IoT
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
