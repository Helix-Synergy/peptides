import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useRazorpay } from 'react-razorpay';
import Banner from '../../assets/images/PageBanners/9.jpg';
// Removed QR Code import since we are using Razorpay
// import QRCode from '../../assets/images/payments/QRCODE.png';

/* ✅ USE .env ONLY */
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error('REACT_APP_API_URL is not defined in .env');
}

const Required = () => <span className="ml-1 text-red-600">*</span>;

const ToggleButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-bold transition shadow ${active ? 'ring-2 ring-[#b89c6b]' : ''
      }`}
    style={{ backgroundColor: active ? '#b89c6b' : '#e6ebf3', color: '#714819' }}
    type="button"
  >
    {children}
  </button>
);

const ContactSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialTab = useMemo(() => {
    if (location.pathname.includes('register-student')) return 'student';
    if (location.pathname.includes('register-faculty')) return 'faculty';
    return 'contact';
  }, [location.pathname]);

  const [tab, setTab] = useState(initialTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { Razorpay } = useRazorpay();

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  const goTab = (next) => {
    setTab(next);
    if (next === 'contact') navigate('/contact', { replace: false });
    if (next === 'student') navigate('/contact/register-student', { replace: false });
    if (next === 'faculty') navigate('/contact/register-faculty', { replace: false });
  };

  const handleFormSubmit = async (e, endpoint, paymentData = null) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);

    // Append payment details if available
    if (paymentData) {
      formData.append('razorpay_order_id', paymentData.razorpay_order_id);
      formData.append('razorpay_payment_id', paymentData.razorpay_payment_id);
      formData.append('razorpay_signature', paymentData.razorpay_signature);
      formData.append('amount', paymentData.amount);
      formData.append('payment_status', 'Paid');
    }

    try {
      const response = await fetch(`${API_URL}/api/${endpoint}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Registration successful!', { autoClose: 10000 });
        form.reset();
      } else {
        toast.error(
          data.message || 'Submission failed. Please try again.',
          { autoClose: 10000 }
        );
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(
        'An error occurred. Please check your network and try again.',
        { autoClose: 10000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePayment = async (e, endpoint, amount) => {
    e.preventDefault();
    const form = e.target.closest('form'); // Get the form element

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Create Order
      const orderResponse = await fetch(`${API_URL}/api/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount, currency: 'INR' }) // Dynamic amount
      });
      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error('Failed to create order');
      }

      // 2. Open Razorpay
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID || 'rzp_test_placeholder', // User needs to set this
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Peptides",
        description: "Registration Fee",
        order_id: orderData.order.id,
        handler: async (response) => {
          try {
            // 3. Verify Payment
            const verifyResponse = await fetch(`${API_URL}/api/payment/verify-payment`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });
            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              // 4. Submit Form with Payment Data
              // We trigger the form submit handler manually
              // Create a synthetic event or just call logic? 
              // Better to call logic. But we need 'e' for handleFormSubmit?
              // We can refactor handleFormSubmit or just duplicate logic or call it slightly differently.
              // Let's modify handleFormSubmit to take paymentData.

              // Creating a synthetic event object since handleFormSubmit expects one
              // actually we can just pass the form element if we refactor, but for minimal change:
              const syntheticEvent = {
                preventDefault: () => { },
                target: form,
              };

              await handleFormSubmit(syntheticEvent, endpoint, {
                ...response,
                amount: orderData.order.amount / 100
              });
            } else {
              toast.error('Payment Verification Failed');
            }
          } catch (err) {
            console.error(err);
            toast.error('Payment Verification Error');
          }
        },
        prefill: {
          name: form.querySelector('[name="firstName"]')?.value || '',
          email: form.querySelector('[name="email"]')?.value || '',
          contact: form.querySelector('[name="mobile"]')?.value || ''
        },
        theme: {
          color: "#b89c6b"
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error('Payment Error:', error);
      toast.error('Payment initialization failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full" style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-end text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Need Help? Get in Touch!
          </h1>
        </motion.div>
      </section>

      {/* Header + Buttons */}
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Have a question to ask us?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-justify">
          We value your inquiries and feedback. Fill out the form or choose a registration option.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ToggleButton active={tab === 'contact'} onClick={() => goTab('contact')}>
            Contact
          </ToggleButton>
          <ToggleButton active={tab === 'student'} onClick={() => goTab('student')}>
            Student Registration
          </ToggleButton>
          <ToggleButton active={tab === 'faculty'} onClick={() => goTab('faculty')}>
            Faculty Registration
          </ToggleButton>
        </div>
      </div>

      {/* Forms Area */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        {tab === 'contact' && (
          <div id="contact-form" className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-4 text-center">Let's Get Started!</h3>
            <form onSubmit={(e) => handleFormSubmit(e, 'contact')} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                {/* Changed name from "name" to "firstName" for consistency with backend */}
                <label htmlFor="contactFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="contactFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Your first name" />
              </div>
              <div>
                <label htmlFor="contactLastName" className="text-sm font-semibold">Last Name<Required /></label>
                <input id="contactLastName" name="lastName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Your last name" />
              </div>
              <div>
                <label htmlFor="contactEmail" className="text-sm font-semibold">Your E-Mail<Required /></label>
                <input id="contactEmail" name="email" required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="contactMobile" className="text-sm font-semibold">Mobile<Required /></label>
                <input id="contactMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Enter your 10-digit mobile number" />
              </div>
              <div>
                <label htmlFor="contactCompany" className="text-sm font-semibold">Company/Organization</label>
                <input id="contactCompany" name="company" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Organization (optional)" />
              </div>
              <div>
                <label htmlFor="contactSubject" className="text-sm font-semibold">Subject<Required /></label>
                <input id="contactSubject" name="subject" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Subject" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="contactMessage" className="text-sm font-semibold">Your Message<Required /></label>
                <textarea id="contactMessage" name="message" required rows={5} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Type your message..." />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Student Registration Form (No change needed here) */}
        {tab === 'student' && (
          <div className="bg-white rounded-2xl shadow p-6 ">
            <h3 className="text-2xl font-bold mb-6 text-center">To become a Member at Peptides Knowledge Park</h3>
            <div className="text-center mb-8 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
              <h4 className="text-lg font-extrabold pt-2">Registration Fee: ₹299</h4>
              <p className="text-center font-semibold text-gray-600 mt-4 leading-relaxed">
                Click the button below to pay the registration fee and complete your enrollment.
              </p>
            </div>
            {/* Changed form onSubmit to prevent default submit if button is clicked, logic is handled by button */}
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div>
                <label htmlFor="studentFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="studentFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentLastName" className="text-sm font-semibold">Last Name<Required /></label>
                <input id="studentLastName" name="lastName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentMobile" className="text-sm font-semibold">Mobile<Required /></label>
                <input id="studentMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
              </div>
              <div>
                <label htmlFor="studentEmail" className="text-sm font-semibold">E‑Mail<Required /></label>
                <input id="studentEmail" name="email" required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="studentGender" className="text-sm font-semibold">Gender<Required /></label>
                <select id="studentGender" name="gender" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Address & Location */}
              <div className="md:col-span-2 mt-4 text-lg font-bold text-[#714819] border-b border-gray-200 pb-2">Address & Location</div>
              <div className="md:col-span-2">
                <label htmlFor="studentAddress" className="text-sm font-semibold">Address<Required /></label>
                <input id="studentAddress" name="address" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentState" className="text-sm font-semibold">State<Required /></label>
                <select id="studentState" name="state" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>
              <div>
                <label htmlFor="studentCountry" className="text-sm font-semibold">Country<Required /></label>
                <input id="studentCountry" name="country" required defaultValue="India" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Academic/Professional Details */}
              <div className="md:col-span-2 mt-4 text-lg font-bold text-[#714819] border-b border-gray-200 pb-2">Academic/Professional Details</div>
              <div>
                <label htmlFor="studentCollege" className="text-sm font-semibold">College/Industry<Required /></label>
                <input id="studentCollege" name="college" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentCourse" className="text-sm font-semibold">Course<Required /></label>
                <input id="studentCourse" name="course" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentArea" className="text-sm font-semibold">Area of Interest<Required /></label>
                <input id="studentArea" name="areaOfInterest" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentServices" className="text-sm font-semibold">Services<Required /></label>
                <select id="studentServices" name="services" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select</option>
                  <option>ACADEMIC PROJECT</option>
                  <option>INTERNSHIP</option>
                  <option>WORKSHOP</option>
                  <option>CONTRACT RESEARCH</option>
                  <option>INDUSTRIAL VISIT</option>
                  <option>SEMINAR & CONFERENCE</option>
                  <option>THESIS SUPPORT</option>
                </select>
              </div>
              {/* Engagement & Feedback */}
              <div className="md:col-span-2 mt-4 text-lg font-bold text-[#714819] border-b border-gray-200 pb-2">Engagement & Feedback</div>
              <div className="md:col-span-2">
                <label htmlFor="studentHowYouKnow" className="text-sm font-semibold">How you know about us<Required /></label>
                <select id="studentHowYouKnow" name="howYouKnowAboutUs" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select an option</option>
                  <option>Social Media</option>
                  <option>Friend/Colleague</option>
                  <option>Online Search</option>
                  <option>Advertisement</option>
                  <option>Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="studentComment" className="text-sm font-semibold">Comment<Required /></label>
                <textarea id="studentComment" name="comment" required rows={4} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Payment Details Removed - Handled by Razorpay */}

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={(e) => handlePayment(e, 'register-student', 299)}
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'PROCESSING...' : 'PAY & REGISTER'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Faculty Registration Form (No change needed here) */}
        {tab === 'faculty' && (
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Registration for Faculty Members at Peptides Knowledge Park</h3>
            <div className="text-center mb-8 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
              <h4 className="text-lg font-extrabold pt-2">Registration Fee: ₹399</h4>
              <p className="text-center font-semibold text-gray-600 mt-4 leading-relaxed">
                Click the button below to pay the registration fee and complete your enrollment.
              </p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Personal Information */}
              <div>
                <label htmlFor="facultyFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="facultyFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyLastName" className="text-sm font-semibold">Last Name<Required /></label>
                <input id="facultyLastName" name="lastName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyMobile" className="text-sm font-semibold">Mobile<Required /></label>
                <input id="facultyMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number (10-15 digits)" />
              </div>
              <div>
                <label htmlFor="facultyEmail" className="text-sm font-semibold">E‑Mail<Required /></label>
                <input id="facultyEmail" name="email" required type="email" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="facultyGender" className="text-sm font-semibold">Gender<Required /></label>
                <select id="facultyGender" name="gender" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {/* Address & Location */}
              <div className="md:col-span-2 mt-4 text-lg font-bold text-[#714819] border-b border-gray-200 pb-2">Address & Location</div>
              <div className="md:col-span-2">
                <label htmlFor="facultyAddress" className="text-sm font-semibold">Address<Required /></label>
                <input id="facultyAddress" name="address" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyState" className="text-sm font-semibold">State<Required /></label>
                <select id="facultyState" name="state" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select State</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>
              </div>
              <div>
                <label htmlFor="facultyCountry" className="text-sm font-semibold">Country<Required /></label>
                <input id="facultyCountry" name="country" required defaultValue="India" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Professional Details */}
              <div className="md:col-span-2 mt-4 text-lg font-bold text-[#714819] border-b border-gray-200 pb-2">Professional Details</div>
              <div>
                <label htmlFor="facultyCollege" className="text-sm font-semibold">College/University Name<Required /></label>
                <input id="facultyCollege" name="college" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyDepartment" className="text-sm font-semibold">Department<Required /></label>
                <input id="facultyDepartment" name="department" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyDesignation" className="text-sm font-semibold">Designation<Required /></label>
                <input id="facultyDesignation" name="designation" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyServices" className="text-sm font-semibold">Services<Required /></label>
                <select id="facultyServices" name="services" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select</option>
                  <option>ACADEMIC PROJECT</option>
                  <option>INTERNSHIP</option>
                  <option>WORKSHOP</option>
                  <option>CONTRACT RESEARCH</option>
                  <option>INDUSTRIAL VISIT</option>
                  <option>SEMINAR & CONFERENCE</option>
                  <option>THESIS SUPPORT</option>
                </select>
              </div>
              {/* Engagement & Feedback */}
              <div className="md:col-span-2 mt-4 text-lg font-bold text-[#714819] border-b border-gray-200 pb-2">Engagement & Feedback</div>
              <div className="md:col-span-2">
                <label htmlFor="facultyHowYouKnow" className="text-sm font-semibold">How you know about us<Required /></label>
                <select id="facultyHowYouKnow" name="howYouKnowAboutUs" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200">
                  <option value="">Select an option</option>
                  <option>Social Media</option>
                  <option>Friend/Colleague</option>
                  <option>Online Search</option>
                  <option>Advertisement</option>
                  <option>Event</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="facultyComment" className="text-sm font-semibold">Comment<Required /></label>
                <textarea id="facultyComment" name="comment" required rows={4} className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              {/* Payment Details Removed - Handled by Razorpay */}

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={(e) => handlePayment(e, 'register-faculty', 399)}
                  className="px-6 py-3 rounded-lg font-bold"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'PROCESSING...' : 'PAY & REGISTER'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
