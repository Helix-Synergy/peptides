import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import bannerImage from '../assets/banners/contact_banner.webp';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          source: 'PharmaMeet'
        }),
      });
      if (response.ok) {
        alert('Thank you for reaching out! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <PageBanner 
        title="PHARMAMEET - Contact Us" 
        imageUrl={bannerImage} 
      />

      {/* Main Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info-block">
              <h2 className="contact-heading">Get In Touch</h2>
              <p className="contact-subheading">
                Have questions about the International conference on Pharmaceutical Sciences congress? Our team is ready to help you with registration, abstract submission, or partnership inquiries.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon"><FaMapMarkerAlt /></div>
                  <div className="detail-text">
                    <strong>Address (A unit of Octacrest Corporate Pvt Ltd)</strong>
                    <p>Mahaveer Radiance, Near Madhapur metro station, CBI Colony, Hyderabad, Telangana 500081</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon"><FaPhoneAlt /></div>
                  <div className="detail-text">
                    <strong>Phone</strong>
                    <p>+91 7997 040 959</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon"><FaEnvelope /></div>
                  <div className="detail-text">
                    <strong>Email</strong>
                    <p>hello@peptides.co.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-block">
              <h3 className="form-heading">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    placeholder="Inquiry regarding..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-submit-contact">Send Message</button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
