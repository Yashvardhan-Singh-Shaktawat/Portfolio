import React, { useEffect, useRef } from 'react';
import './ScrollAnimationSection.css';

import ComputerImg from '../assets/computer_fixed.png';
import StickyNoteImg from '../assets/sticky_note_wink.png';
import EmailEnvelopeImg from '../assets/envelope_orange.png';

const ScrollAnimationSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Only update if the section is currently visible in the viewport
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollProgress = viewportHeight - rect.top;
          containerRef.current.style.setProperty('--scroll-y', scrollProgress);
        }
      }
    };

    // Add scroll listener with passive option for scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial run
    handleScroll();
    
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-scroll-container" ref={containerRef}>
      
      {/* LEFT SIDE: Project Descriptions & Pixel Text */}
      <div className="left-content-panel">
        <div className="project-solutions-box pixel-font">
          <h3>--- PROJECT SOLUTIONS ---</h3>
          <div className="solution-item">
            <p className="problem">&gt;&gt; PROBLEM 1: Resource Allocation</p>
            <p className="solved">[ SOLVED: Dynamic Balancing ]</p>
          </div>
          <div className="solution-item">
            <p className="problem">&gt;&gt; PROBLEM 2: Sync Lag</p>
            <p className="solved">[ SOLVED: Real-time Pub/Sub Pipeline ]</p>
          </div>
        </div>

        <div className="status-terminal pixel-font">
          <p>[SYSTEM_STATUS: LIVE]</p>
          <p>[RESUME_ENGINE: ACTIVE]</p>
          <hr className="terminal-divider" />
          <p>&gt;&gt; A.I. INTERFACE</p>
          <p>&gt;&gt; FULL STACK DEV</p>
          <p>&gt;&gt;</p>
        </div>
      </div>

      {/* RIGHT SIDE: Fixed Computer & Scroll-Driven Floating Elements */}
      <div className="right-visual-panel">
        <div className="fixed-computer">
          <img src={ComputerImg} alt="Central Workstation" />
          
          {/* Floating Sticky Note */}
          <div className="scroll-floating sticky-note">
            <img src={StickyNoteImg} alt="Floating Note" />
          </div>

          {/* Floating Envelope */}
          <div className="scroll-floating email-envelope">
            <img src={EmailEnvelopeImg} alt="Floating Envelope" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ScrollAnimationSection;
