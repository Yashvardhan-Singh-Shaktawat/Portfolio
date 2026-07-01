import React, { useEffect, useRef } from "react";
import { projects } from "../data/projects";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth + 120),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${slider.scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="slider" ref={sliderRef}>

        {/* Intro Card */}
        <div className="intro-card">
          <div>
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">What technical projects has Yashvardhan built?</h2>
            <p className="intro-text">
              A curated collection of my work spanning Full-Stack Engineering, Applied Machine Learning, IoT systems, and Computer Vision.
            </p>
          </div>
          <div className="scroll-hint">
            <span>Scroll to slide</span>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Project Cards */}
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} />
              <span className="project-card-label">{project.label}</span>
              <span className="project-card-status">{project.status}</span>
            </div>

            <div className="content">
              <div className="project-meta-tags">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="project-meta-tag">{tag}</span>
                ))}
              </div>

              <h2>{project.title}</h2>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-link"
                >
                  GitHub Code
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link"
                  >
                    Live Demo
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
