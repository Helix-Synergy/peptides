import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useRazorpay } from 'react-razorpay';
import Banner from '../../assets/images/PageBanners/9.webp';
// Removed QR Code import since we are using Razorpay
// import QRCode from '../../assets/images/payments/QRCODE.webp';

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
        <h4 className="text-md font-semibold text-gray-500 mb-2">
          Peptides Knowledge Park is a unit of Octacrest Corporate Pvt Ltd
        </h4>
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

        {/* Student Registration Custom Form */}
        {tab === 'student' && (
          <div className="bg-white rounded-2xl shadow p-6 ">
            <h3 className="text-2xl font-bold mb-6 text-center">To become a Member at Peptides Knowledge Park</h3>
            <div className="text-center mb-8 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
              <h4 className="text-lg font-extrabold pt-2">Registration Fee: ₹8</h4>
              <p className="text-center font-semibold text-gray-600 mt-4 leading-relaxed">
                Please fill in your details. You will be redirected to our secure payment gateway to complete the transaction.
              </p>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const form = e.target;
              
              if (!form.checkValidity()) {
                form.reportValidity();
                setIsSubmitting(false);
                return;
              }

              const formData = new FormData(form);
              
              try {
                // 1. Save data to Peptides Backend (Pending Payment)
                const response = await fetch(`${API_URL}/api/register-student`, {
                  method: 'POST',
                  body: formData,
                });
          
                const data = await response.json();
          
                if (response.ok && data.recordId) {
                  // 2. Redirect to Octacrest Gateway with Record ID
                  const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname);
                  const gatewayUrl = `${process.env.REACT_APP_OCTACREST_PAYMENT_URL || 'http://localhost:3000'}/gateway?type=student&recordId=${data.recordId}&amount=8&name=${encodeURIComponent(formData.get('firstName') + ' ' + (formData.get('lastName') || ''))}&email=${encodeURIComponent(formData.get('email'))}&contact=${encodeURIComponent(formData.get('mobile'))}&returnUrl=${returnUrl}&apiUrl=${encodeURIComponent(API_URL)}`;
                  window.location.href = gatewayUrl;
                } else {
                  toast.error(data.message || 'Submission failed. Please try again.');
                  setIsSubmitting(false);
                }
              } catch (error) {
                console.error('Submission error:', error);
                toast.error('An error occurred. Please check your network and try again.');
                setIsSubmitting(false);
              }
            }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label htmlFor="studentFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="studentFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="studentLastName" className="text-sm font-semibold">Last Name</label>
                <input id="studentLastName" name="lastName" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="studentEmail" className="text-sm font-semibold">Email<Required /></label>
                <input id="studentEmail" name="email" type="email" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="studentMobile" className="text-sm font-semibold">Mobile Number<Required /></label>
                <input id="studentMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number" />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="studentCollege" className="text-sm font-semibold">College Name<Required /></label>
                <input id="studentCollege" name="college" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="studentCourse" className="text-sm font-semibold">Course<Required /></label>
                <input id="studentCourse" name="course" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              <div className="md:col-span-2 flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                >
                  {isSubmitting ? 'SAVING DATA...' : 'PROCEED TO SECURE REGISTRATION'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Faculty Registration Custom Form */}
        {tab === 'faculty' && (
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Registration for Faculty Members at Peptides Knowledge Park</h3>
            <div className="text-center mb-8 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
              <h4 className="text-lg font-extrabold pt-2">Registration Fee: ₹399</h4>
              <p className="text-center font-semibold text-gray-600 mt-4 leading-relaxed">
                Please fill in your details. You will be redirected to our secure payment gateway to complete the transaction.
              </p>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const form = e.target;
              
              if (!form.checkValidity()) {
                form.reportValidity();
                setIsSubmitting(false);
                return;
              }

              const formData = new FormData(form);
              
              try {
                // 1. Save data to Peptides Backend (Pending Payment)
                const response = await fetch(`${API_URL}/api/register-faculty`, {
                  method: 'POST',
                  body: formData,
                });
          
                const data = await response.json();
          
                if (response.ok && data.recordId) {
                  // 2. Redirect to Octacrest Gateway with Record ID
                  const returnUrl = encodeURIComponent(window.location.origin + window.location.pathname);
                  const gatewayUrl = `${process.env.REACT_APP_OCTACREST_PAYMENT_URL || 'http://localhost:3000'}/gateway?type=faculty&recordId=${data.recordId}&amount=399&name=${encodeURIComponent(formData.get('firstName') + ' ' + (formData.get('lastName') || ''))}&email=${encodeURIComponent(formData.get('email'))}&contact=${encodeURIComponent(formData.get('mobile'))}&returnUrl=${returnUrl}&apiUrl=${encodeURIComponent(API_URL)}`;
                  window.location.href = gatewayUrl;
                } else {
                  toast.error(data.message || 'Submission failed. Please try again.');
                  setIsSubmitting(false);
                }
              } catch (error) {
                console.error('Submission error:', error);
                toast.error('An error occurred. Please check your network and try again.');
                setIsSubmitting(false);
              }
            }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label htmlFor="facultyFirstName" className="text-sm font-semibold">First Name<Required /></label>
                <input id="facultyFirstName" name="firstName" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              <div>
                <label htmlFor="facultyLastName" className="text-sm font-semibold">Last Name</label>
                <input id="facultyLastName" name="lastName" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              
              <div>
                <label htmlFor="facultyEmail" className="text-sm font-semibold">Email<Required /></label>
                <input id="facultyEmail" name="email" type="email" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              
              <div>
                <label htmlFor="facultyMobile" className="text-sm font-semibold">Mobile Number<Required /></label>
                <input id="facultyMobile" name="mobile" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" pattern="[0-9]{10,15}" title="Please enter a valid mobile number" />
              </div>
              
              <div>
                <label htmlFor="facultyGender" className="text-sm font-semibold">Gender<Required /></label>
                <select id="facultyGender" name="gender" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200 bg-white">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="facultyCollege" className="text-sm font-semibold">College Name<Required /></label>
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

              <div className="md:col-span-2">
                <label htmlFor="facultyAddress" className="text-sm font-semibold">Address<Required /></label>
                <input id="facultyAddress" name="address" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              <div>
                <label htmlFor="facultyState" className="text-sm font-semibold">State<Required /></label>
                <input id="facultyState" name="state" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>

              <div>
                <label htmlFor="facultyCountry" className="text-sm font-semibold">Country<Required /></label>
                <input id="facultyCountry" name="country" required className="w-full mt-1 px-3 py-2 rounded border border-gray-200" />
              </div>
              
              <div>
                <label htmlFor="facultyHowYouKnowAboutUs" className="text-sm font-semibold">How did you know about us?</label>
                <select id="facultyHowYouKnowAboutUs" name="howYouKnowAboutUs" className="w-full mt-1 px-3 py-2 rounded border border-gray-200 bg-white">
                  <option value="">Select Option</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Colleague">Colleague/Friend</option>
                  <option value="Website">Website</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="facultyComment" className="text-sm font-semibold">Comments</label>
                <input id="facultyComment" name="comment" className="w-full mt-1 px-3 py-2 rounded border border-gray-200" placeholder="Optional" />
              </div>

              <div className="md:col-span-2 flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                >
                  {isSubmitting ? 'SAVING DATA...' : 'PROCEED TO SECURE REGISTRATION'}
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
