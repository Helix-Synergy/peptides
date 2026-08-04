import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import posterImg from '../../assets/images/GLOW CRAFT Poster.jpg';

const WorkshopRegistrationModal = ({ isOpen, onClose, workshopTitle }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
    });
    const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
            // Ensure /api is appended if missing
            const baseUrl = API_URL.endsWith('/api') ? API_URL : `${API_URL}/api`;
            const response = await fetch(`${baseUrl}/workshop-registration`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    workshopName: workshopTitle,
                    source: 'Peptides'
                })
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('');
                    setFormData({ firstName: '', lastName: '', email: '', phone: '', organization: '' });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting registration:', error);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative"
                >
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <X size={24} className="text-gray-800" />
                    </button>

                    {/* Left Side: Poster and Details */}
                    <div className="md:w-1/2 bg-[#0f2920] text-white p-6 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex flex-col items-center">
                        <img 
                            src={posterImg} 
                            alt="Glow Craft Workshop Poster" 
                            className="w-full max-w-sm rounded-xl shadow-lg mb-6 border border-white/20"
                        />
                        <h3 className="text-2xl font-bold text-[#e1b95b] mb-4 text-center">
                            {workshopTitle.replace('Formulation', 'Preparation')}
                        </h3>
                        <div className="space-y-3 text-sm text-gray-200 w-full max-w-sm">
                            {/* Details removed as requested */}
                        </div>
                    </div>

                    {/* Right Side: Registration Form */}
                    <div className="md:w-1/2 p-8">
                        <h2 className="text-3xl font-extrabold text-[#0f2920] mb-6">Register Now</h2>
                        
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
                                <CheckCircle size={64} className="text-green-500" />
                                <h3 className="text-2xl font-bold text-gray-800">Registration Successful!</h3>
                                <p className="text-gray-600">We look forward to seeing you at the workshop.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0f2920] focus:border-transparent outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0f2920] focus:border-transparent outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0f2920] focus:border-transparent outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0f2920] focus:border-transparent outline-none"
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">College / Organization *</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        required
                                        value={formData.organization}
                                        onChange={handleChange}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0f2920] focus:border-transparent outline-none"
                                        placeholder="A.V. College"
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full bg-[#0f2920] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#1a4435] transition-colors disabled:opacity-70 shadow-lg shadow-[#0f2920]/20"
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default WorkshopRegistrationModal;
