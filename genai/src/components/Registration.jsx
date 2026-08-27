import React, { useState, useEffect } from 'react';
import { generateReceiptPDF } from '../utils/generateReceiptPDF';
import './Registration.css';
import './RegistrationModal.css';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    university: '',
    affiliation: '',
    phone: '',
    email: '',
    email: '',
    country: '',
    category: 'Oral Presenter',
    source: 'GenAIConclave'
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category') {
        if (value === 'Delegate') {
            setFormData({ ...formData, category: 'Delegate', country: 'India' });
        } else {
            setFormData({ ...formData, category: value, country: '' });
        }
    } else if (name === 'country') {
        if (value !== 'India') {
            setFormData({ ...formData, country: value, category: 'Oral Presenter' });
        } else {
            setFormData({ ...formData, country: value });
        }
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const calculatePrice = () => {
    if (formData.category === 'Delegate') {
        return { amount: 99, currency: 'INR' };
    }
    if (formData.country === 'India') {
      return { amount: 499, currency: 'INR' };
    } else {
      return { amount: 99, currency: 'USD' };
    }
  };

  useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentStatus = urlParams.get('payment');
      const recordId = urlParams.get('recordId');
      const paymentId = urlParams.get('paymentId');

      if (paymentStatus === 'success' && recordId) {
          // Fetch record details to show receipt
          fetch(`${API_BASE_URL}/webinar-registration/${recordId}`)
              .then(res => res.json())
              .then(data => {
                  if (data) {
                      setFormData(data);
                      setReceiptData({ formData: data, paymentId, amount: data.amount });
                      setShowSuccessModal(true);
                      
                      // Clean up URL
                      window.history.replaceState({}, document.title, window.location.pathname);

                      // Removed automatic email sending as requested
                  }
              })
              .catch(err => console.error("Error fetching record:", err));
      } else if (paymentStatus === 'failed') {
          setMessage('Payment failed or was cancelled. Please try again.');
          // Clean up URL
          window.history.replaceState({}, document.title, window.location.pathname);
      }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { amount, currency } = calculatePrice();

      // 1. Save Pending Registration
      const pendingRes = await fetch(`${API_BASE_URL}/webinar-registration/pending`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, amount, currency })
      });
      const pendingData = await pendingRes.json();

      if (!pendingData.success) {
        throw new Error(pendingData.message || 'Failed to save registration');
      }

      // 2. Redirect to Octacrest Gateway
      const returnUrl = encodeURIComponent(`${window.location.origin}${window.location.pathname}`);
      const gatewayUrl = import.meta.env.VITE_OCTACREST_PAYMENT_URL || 'http://localhost:3001';
      
      window.location.href = `${gatewayUrl}/gateway?amount=${amount}&name=${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}&email=${encodeURIComponent(formData.email)}&type=webinar&recordId=${pendingData.recordId}&returnUrl=${returnUrl}&apiUrl=${encodeURIComponent(API_BASE_URL.replace(/\/api$/, ''))}`;

    } catch (error) {
      console.error(error);
      setMessage(error.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const { amount, currency } = calculatePrice();

  return (
    <section id="register" className="section registration-section">
      <div className="bg-light">
      {/* Success Modal */}
      {showSuccessModal && receiptData && (
        <div className="modal-overlay">
          <div className="modal-content success-modal">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Your payment has been successfully processed.</p>
            <p>Please download your official PDF receipt below.</p>
            
            <div className="success-actions">
              <button 
                className="btn-primary" 
                onClick={() => generateReceiptPDF(receiptData.formData, receiptData.paymentId, receiptData.amount, false)}
              >
                Download Receipt (PDF)
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => {
                  setShowSuccessModal(false);
                  window.location.reload(); // Reset form state
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container reg-container">
        
        <div className="text-center mb-5">
            <h2 className="section-title">Webinar Registration</h2>
            <p className="reg-subtitle">Secure your spot for the Global Conclave on Artificial Intelligence & Machine Learning. Fill out the details below to complete your registration and unlock exclusive benefits.</p>
        </div>

        <div className="registration-wrapper">
          
          {/* Registration Form */}
          <div className="registration-form-card">
             <div className="card-header border-bottom">
                <span className="card-icon blue-icon">🎫</span>
                <h3 className="card-title-sm">Delegate Details</h3>
             </div>
             
             {message && <div className={`message-alert ${message.includes('successful') ? 'success' : 'error'}`}>{message}</div>}

             <form onSubmit={handleRegister} className="reg-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" />
                    </div>
                    <div className="form-group">
                        <label>Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@university.edu" />
                    </div>
                    <div className="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+1 234 567 8900" />
                    </div>
                </div>

                <div className="form-group">
                  <label>University / Organization *</label>
                  <input type="text" name="university" value={formData.university} onChange={handleChange} required placeholder="Enter your institution name" />
                </div>

                <div className="form-group">
                  <label>Affiliation / Designation</label>
                  <input type="text" name="affiliation" value={formData.affiliation} onChange={handleChange} placeholder="e.g. PhD Candidate, Professor" />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Country *</label>
                        <select name="country" value={formData.country} onChange={handleChange} required disabled={formData.category === 'Delegate'}>
                            {formData.category === 'Delegate' ? (
                                <option value="India">India</option>
                            ) : (
                                <>
                                    <option value="" disabled>Select Country</option>
                                    <option value="India">India</option>
                                    <option value="United States">United States</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="France">France</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Other">Other International</option>
                                </>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Registration Category *</label>
                        {formData.country && formData.country !== 'India' ? (
                            <input 
                                type="text" 
                                value="Oral Presenter" 
                                disabled 
                                style={{ backgroundColor: '#f1f5f9', color: '#64748b', cursor: 'not-allowed' }} 
                            />
                        ) : (
                            <select name="category" value={formData.category} onChange={handleChange} required>
                                <option value="Oral Presenter">Oral Presenter</option>
                                <option value="Delegate">Delegate</option>
                            </select>
                        )}
                    </div>
                </div>

                <div className="form-footer">
                    <div className="price-display">
                        <span className="price-label">Total Payable Amount</span>
                        {formData.country ? (
                            <strong className="price-amount">
                                {currency === 'INR' ? '₹' : '$'}{amount} <span>{currency}</span>
                            </strong>
                        ) : (
                            <span className="price-amount" style={{ fontSize: '1.2rem', color: '#94a3b8' }}>
                                Select a country
                            </span>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary pay-btn" disabled={loading || !formData.country}>
                        {loading ? 'Processing...' : (
                            <>
                                Pay Securely &rarr;
                            </>
                        )}
                    </button>
                </div>
             </form>
          </div>

          {/* Benefits Section */}
          <div className="benefits-card gradient-bg">
            <div className="card-header border-bottom-light">
              <span className="card-icon transparent-icon">⭐</span>
              <h3 className="card-title-sm text-white">Benefits Provided</h3>
            </div>
            <ul className="benefits-list reg-benefits">
              <li>
                <span className="check">✓</span> 
                <div>
                    <strong>Full Webinar Access</strong>
                    <p>Gain complete access to all live sessions, keynotes, and technical presentations.</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                    <strong>Q&A with Experts</strong>
                    <p>Participate in dedicated interactive Q&A sessions with Subject Matter Experts.</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                    <strong>Conference Proceedings</strong>
                    <p>Receive the official digital conference proceedings e-book containing all abstracts.</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                    <strong>Certificate</strong>
                    <p>Receive a verifiable E-Certificate of participation or presentation for your records.</p>
                </div>
              </li>
              <li>
                <span className="check">✓</span> 
                <div>
                    <strong>Pepcon Discount</strong>
                    <p>Get a 20% exclusive discount on future in-person Pepcon events globally!</p>
                </div>
              </li>
            </ul>
            
            <div className="secure-badge">
                <span>Secure Payment Powered by</span>
                <strong>RAZORPAY</strong>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default Registration;
