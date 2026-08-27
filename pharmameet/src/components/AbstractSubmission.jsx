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
      data.append('source', 'PharmaMeet');

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
              <option value="Pharmaceutics">Pharmaceutics</option>
              <option value="Pharmacology">Pharmacology</option>
              <option value="Pharmaceutical Chemistry">Pharmaceutical Chemistry</option>
              <option value="Medicinal Chemistry">Medicinal Chemistry</option>
              <option value="Pharmacognosy">Pharmacognosy</option>
              <option value="Drug Discovery & Development">Drug Discovery & Development</option>
              <option value="Drug Delivery">Drug Delivery</option>
              <option value="Pharmaceutical Biotechnology">Pharmaceutical Biotechnology</option>
              <option value="Clinical Pharmacy">Clinical Pharmacy</option>
              <option value="Pharmaceutical Analysis">Pharmaceutical Analysis</option>
              <option value="Pharmacovigilance">Pharmacovigilance</option>
              <option value="Nanopharmaceutics">Nanopharmaceutics</option>
              <option value="Pharmacokinetics">Pharmacokinetics</option>
              <option value="Toxicology">Toxicology</option>
              <option value="Regulatory Affairs">Regulatory Affairs</option>
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
