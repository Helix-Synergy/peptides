import React, { useState } from 'react';
import './AbstractSubmission.css';

const AbstractSubmission = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    track: '',
    abstractTitle: '',
    pdfFile: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) data.append(key, formData[key]);
      });
      data.append('source', 'BuzzWebinar');

      const API_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_URL}/abstract-submission`, {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Abstract submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          track: '',
          abstractTitle: '',
          pdfFile: null
        });
      } else {
        alert('Failed to submit abstract. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting abstract:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="abstract-section">
      <div className="container abstract-container">
        <h2 className="abstract-title">Abstract Submission</h2>
        
        <form className="abstract-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
            </div>
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          </div>
          
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
          </div>
          
          <div className="form-group">
            <label>Company / University</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company / University" />
          </div>
          
          <div className="form-group">
            <label>Your Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5"></textarea>
          </div>
          
          <div className="form-group">
            <select name="track" value={formData.track} onChange={handleChange} required>
              <option value="" disabled>Select Presentation Track</option>
              <option value="Global Trade Policies">Global Trade Policies</option>
              <option value="International Economics">International Economics</option>
              <option value="Emerging Markets">Emerging Markets</option>
              <option value="Supply Chain Management">Supply Chain Management</option>
              <option value="Foreign Direct Investment">Foreign Direct Investment</option>
              <option value="Currency and Exchange Rates">Currency and Exchange Rates</option>
              <option value="Digital Economy and E-commerce">Digital Economy and E-commerce</option>
              <option value="Sustainable Business Practices">Sustainable Business Practices</option>
              <option value="Global Marketing Strategies">Global Marketing Strategies</option>
              <option value="Trade Law and Dispute Resolution">Trade Law and Dispute Resolution</option>
              <option value="Cross-Cultural Management">Cross-Cultural Management</option>
              <option value="Economic Growth and Development">Economic Growth and Development</option>
              <option value="Tariffs and Trade Barriers">Tariffs and Trade Barriers</option>
              <option value="International Financial Markets">International Financial Markets</option>
              <option value="Global Value Chains">Global Value Chains</option>
              <option value="Trade in Services">Trade in Services</option>
            </select>
          </div>
          
          <div className="form-group">
            <input type="text" name="abstractTitle" value={formData.abstractTitle} onChange={handleChange} placeholder="Abstract Title" required />
          </div>
          
          <div className="form-row upload-row">
            <input type="file" name="pdfFile" onChange={handleChange} accept=".pdf" required />
            <div className="action-buttons">
              <a 
                href="/sample_abstract (8).pdf" 
                download="Demo_Abstract.pdf" 
                className="btn-demo-abstract" 
              >
                Download Demo Abstract
              </a>
              <button type="submit" className="btn-submit-abstract" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Abstract'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AbstractSubmission;
