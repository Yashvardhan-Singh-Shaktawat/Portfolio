import React from 'react';
import './About.css';
import aboutMeImg from '../assets/about-me.webp';

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
              <h2 className="section-title">About Yashvardhan Singh Shaktawat | Full Stack Developer</h2>
              
              <div className="about-bio">
                  <p className="bio-lead">
                      Hi there! I'm <strong>Yashvardhan Singh Shaktawat</strong>, a Full Stack Developer and Software Engineer who sits at the intersection of robust software architectures and intelligent AI-driven applications.
                  </p>
                  <p className="bio-body">
                      I specialize in crafting high-performance user interfaces with <strong>React.js</strong> and <strong>Next.js</strong>, coupled with scalable server infrastructures built on <strong>Django</strong>, <strong>Node.js</strong>, and <strong>Express</strong>. My background in Computer Science Engineering drives me to build robust systems from the ground up, ensuring clean code, optimal data structures, and intuitive user experiences.
                  </p>
                  <p className="bio-body">
                      Beyond core web engineering, I work with Applied Machine Learning, Computer Vision, and real-time streaming protocols. I have engineered real-time dashboard applications using <strong>WebSockets</strong> and <strong>Redis</strong>, trained custom object-detection models (using <strong>YOLOv8</strong>) for industrial visual audits, and integrated <strong>ESP32 microcontrollers</strong> for smart IoT networks.
                  </p>
                  <p className="bio-body">
                      I am passionate about translating complex backend architectures into responsive, visually striking web experiences. My work is optimized for performance, security, and usability, ensuring that every project is production-ready. Whether architecting database schemas in <strong>PostgreSQL</strong> or configuring real-time telemetry relays, I strive to write self-documenting code and deploy robust, high-availability solutions.
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
