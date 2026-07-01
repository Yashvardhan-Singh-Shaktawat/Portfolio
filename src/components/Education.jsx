import React from 'react';
import './Education.css';

const CERTS = [
  {
    title: 'Cybersecurity & Data Analytics Job Simulations',
    issuer: 'Deloitte, via Forage',
    date: '2026'
  },
  {
    title: 'Full Stack Web Development in MERN',
    issuer: 'Virtual Internship, Webstack Academy',
    date: 'Mar – Apr 2026'
  },
  {
    title: 'Linux & Bash Shell Scripting',
    issuer: 'Spoken Tutorial, IIT Bombay',
    date: 'Dec 2025'
  },
  {
    title: 'Communication Skills',
    issuer: 'TCS iON, Tata Consultancy Services',
    date: 'Mar 2026'
  }
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Background</span>
          <h2 className="section-title">Education & Credentials</h2>
        </div>

        <div className="education-layout">
          
          {/* Left Column: Education Timeline */}
          <div>
            <h3 className="edu-column-title">Academic Timeline</h3>
            <div className="edu-timeline">
              <div className="edu-card">
                <span className="edu-date">2024 – 2027</span>
                <h4 className="edu-degree">Bachelor of Technology</h4>
                <p className="edu-school">Sangam University</p>
                <p className="edu-desc">
                  Computer Science & Engineering specialization. Building key skills in algorithm design, server architectures, computer vision models, and applied statistical algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <h3 className="edu-column-title">Certifications & Training</h3>
            <div className="certs-grid">
              {CERTS.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-icon-wrapper">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z"/>
                    </svg>
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
