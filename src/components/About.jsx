import React from 'react';
import './About.css';
import aboutMeImg from '../assets/about-me.png';

export default function About() {
  return (
    <section className="about-section-container" id="about">
      <div className="about-grid-wrapper">
          
          <div className="about-photo-panel">
              <div className="photo-bg-glow"></div>
              <img src={aboutMeImg} alt="Yashvardhan Singh Shaktawat" className="about-avatar" width="350" height="480" />
          </div>
          
          <div className="about-text-panel">
              <span className="section-tag">GET TO KNOW ME</span>
              <h2 className="section-title">Who is Yashvardhan Singh Shaktawat?</h2>
              
              <div className="about-bio">
                  <p className="bio-lead">
                      Hi there! I'm <strong>Yashvardhan Singh Shaktawat</strong>, a Computer Science Engineer who sits at the intersection of robust software architectures and intelligent hardware.
                  </p>
                  <p className="bio-body">
                      Whether I am architecting full-stack web applications with Django or linking microcontrollers to the cloud, I love building reliable systems from scratch. I focus on translating intricate backend logic into performant, clean, and highly visual user experiences.
                  </p>
              </div>
              
              <div className="about-highlights">
                  <div className="highlight-item">
                      <div className="icon-box">🎓</div>
                      <div className="highlight-content">
                          <h4>Education & Focus</h4>
                          <p>B.Tech CSE student specializing in production-grade software craftsmanship.</p>
                      </div>
                  </div>
                  <div className="highlight-item">
                      <div className="icon-box">🛠️</div>
                      <div className="highlight-content">
                          <h4>Pillars of Work</h4>
                          <p>Full-stack Django architectures, real-time data relays, and cloud-connected IoT systems.</p>
                      </div>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
}
