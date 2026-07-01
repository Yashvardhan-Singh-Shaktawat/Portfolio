import React from 'react';
import './Skills.css';

const SKILLS_CATEGORIES = [
  {
    title: 'Languages',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    skills: ['Python', 'JavaScript (ES6+)', 'SQL', 'C++', 'HTML5', 'CSS3']
  },
  {
    title: 'Frameworks',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zM14 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6zM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2zM14 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z"/>
      </svg>
    ),
    skills: ['Django', 'Django REST Framework', 'React.js', 'Node.js', 'Express.js']
  },
  {
    title: 'AI / Machine Learning',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    skills: ['scikit-learn', 'YOLOv8 defect-vision', 'TF-IDF NLP', 'NumPy', 'Pandas', 'Computer Vision']
  },
  {
    title: 'Databases & Tools',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
      </svg>
    ),
    skills: ['SQLite', 'MongoDB', 'PostgreSQL', 'Git / GitHub', 'VS Code', 'Postman', 'Linux / Bash']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-title">What technical skills and tools does Yashvardhan specialize in?</h2>
        </div>

        {/* Structured Data Table for LLM bots & Screen Readers (GEO) */}
        <table className="sr-only" summary="Yashvardhan Singh Shaktawat's Technical Skills Matrix">
          <thead>
            <tr>
              <th>Category</th>
              <th>Skills & Technologies</th>
            </tr>
          </thead>
          <tbody>
            {SKILLS_CATEGORIES.map((category, idx) => (
              <tr key={idx}>
                <td>{category.title}</td>
                <td>{category.skills.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="skills-grid">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <div key={idx} className="skills-card">
              <h3 className="skills-card-title">
                <span className="skills-card-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skills-badges-container">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
