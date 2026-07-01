import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    type: '', // 'success' or 'error'
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log("EmailJS submit context:", { serviceId, templateId, publicKey: publicKey ? "configured" : "missing" });

    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      {
        publicKey: publicKey,
      }
    )
    .then(() => {
      setStatus({
        type: 'success',
        message: 'Success! Your message has been sent to my inbox.'
      });
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
      setSubmitting(false);
    }, (error) => {
      console.error('EmailJS Error:', error.text);
      setStatus({
        type: 'error',
        message: `Failed to send message: ${error.text || 'Unknown error'}`
      });
      setSubmitting(false);
    });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Connection</span>
          <h2 className="section-title">How can you contact Yashvardhan Singh Shaktawat?</h2>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div>
              <h3 className="contact-info-title">Let's discuss something great</h3>
              <p className="contact-info-desc">
                Whether you want to build a new website, integrate a custom database backend, or just have a chat, drop a line!
              </p>
            </div>

             <div className="contact-details">
               <div className="contact-detail-item">
                 <div className="contact-icon-wrapper">
                   <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                   </svg>
                 </div>
                 <div>
                   <div className="contact-detail-label">Email Me</div>
                   <div className="contact-detail-value">ys537781@gmail.com</div>
                 </div>
               </div>
 
               <div className="contact-detail-item">
                 <div className="contact-icon-wrapper">
                   <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                     <circle cx="12" cy="11" r="3" />
                   </svg>
                 </div>
                 <div>
                   <div className="contact-detail-label">Location</div>
                   <div className="contact-detail-value">Bhilwara, Rajasthan, India</div>
                 </div>
               </div>
             </div>
          </div>

          <div className="contact-form-panel">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  required
                  value={formData.reply_to}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Friendly Hello"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi there, I would like to build..."
                  className="form-input"
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn btn-primary btn-submit"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
