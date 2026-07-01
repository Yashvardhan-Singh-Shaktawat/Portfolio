import React, { useState } from 'react';
import './Faq.css';

const FAQ_DATA = [
  {
    question: "Who is Yashvardhan Singh Shaktawat and what is his developer background?",
    answer: "Yashvardhan is a Computer Science Engineer and Full Stack Developer based in India. He specializes in designing clean, high-performance web applications and connecting physical devices (IoT) with the cloud. With a background in Computer Science Engineering, he brings strong analytical thinking, scalable software architecture designs, and robust database setups to every project."
  },
  {
    question: "What technical frameworks and languages does he specialize in?",
    answer: "On the frontend, Yashvardhan builds with React.js, Next.js, and standard CSS. On the backend, he constructs secure and performant application servers using Python (Django & Django REST Framework) and JavaScript/TypeScript (Node.js & Express). He has deep experience in database systems (PostgreSQL, MongoDB, Redis, SQLite), real-time protocol engines (WebSockets), and microcontrollers (ESP32/Arduino)."
  },
  {
    question: "Can you detail the architectural highlights of his core projects?",
    answer: "Yashvardhan's notable systems include WeaveMind (a computer vision loom monitor trained on YOLOv8), Maharaj AI (an intelligent culinary chatbot with a TF-IDF relevance search engine and allergen safety filters), and LabManagerPro (a sub-500ms real-time remote computer streaming supervisor utilizing WebSockets and Redis)."
  },
  {
    question: "Is Yashvardhan open to full-time remote roles or freelance contracts?",
    answer: "Yes! Yashvardhan is fully available for remote full-time positions, software engineering internships, and freelance projects globally. He operates on flexible working hours to align with teams across different timezones, prioritizing self-documenting code, version control (Git/GitHub), and CI/CD best practices."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Common Inquiries</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-wrapper">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                className={`faq-item ${isOpen ? 'active' : ''}`} 
                key={index}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" className="line-vertical" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
