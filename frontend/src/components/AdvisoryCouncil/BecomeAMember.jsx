// import React, { useRef, useState } from 'react';
// import { motion } from "framer-motion";
// import becomeMember from "../../assets/images/PageBanners/aboutPOE.webp";

// const API_URL = "http://localhost:5000"; // Replace with your live API URL

// const BecomeAMember = () => {
//   const [profilePreview, setProfilePreview] = useState('');
//   const [status, setStatus] = useState({ success: null, message: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const formRef = useRef(null);

//   const resetPreview = () => setProfilePreview('');

//   const onFileChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) {
//       resetPreview();
//       return;
//     }
//     const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
//     const maxSize = 5 * 1024 * 1024; // 5MB
//     if (!validTypes.includes(file.type)) {
//       alert('Invalid file type. Please select a JPG, JPEG, PNG, or GIF image.');
//       e.target.value = '';
//       resetPreview();
//       return;
//     }
//     if (file.size > maxSize) {
//       alert('File size exceeds 5MB. Please choose a smaller image.');
//       e.target.value = '';
//       resetPreview();
//       return;
//     }
//     const reader = new FileReader();
//     reader.onload = (ev) => setProfilePreview(String(ev.target?.result || ''));
//     reader.readAsDataURL(file);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const form = formRef.current;
//     if (form && !form.checkValidity()) {
//       form.reportValidity();
//       return;
//     }

//     setIsSubmitting(true);
//     setStatus({ success: null, message: '' });

//     const formData = new FormData(form);

//     try {
//       const response = await fetch(`${API_URL}/api/become-member`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({ success: true, message: data.message });
//         form.reset();
//         resetPreview();
//       } else {
//         setStatus({ success: false, message: data.message || 'Submission failed. Please try again.' });
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       setStatus({ success: false, message: 'An error occurred. Please check your network and try again.' });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const onCancel = () => {
//     const form = formRef.current;
//     form?.reset();
//     resetPreview();
//     setStatus({ success: null, message: '' });
//   };

//   return (
//     <main className="min-h-screen" style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
//       {/* Hero Section */}
//       <section
//         className="relative h-[60vh] flex items-center justify-end text-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${becomeMember})` }}
//       >
//         <div className="absolute inset-0 bg-black/50"></div>
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 px-4"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
//             Become A Member
//           </h1>
//         </motion.div>
//       </section>

//       <section className="max-w-5xl mx-auto px-6 py-10">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold">Join Us & Be A Part of Our Team</h2>
//           <p className="mt-2 text-justify">It should only take a couple of minutes to join our team.</p>
//         </div>

//         <form ref={formRef} onSubmit={onSubmit} className="bg-white rounded-2xl shadow p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label htmlFor="firstName" className="text-sm font-semibold">First Name</label>
//               <input id="firstName" name="firstName" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="lastName" className="text-sm font-semibold">Last Name</label>
//               <input id="lastName" name="lastName" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="affiliation" className="text-sm font-semibold">Affiliation</label>
//               <input id="affiliation" name="affiliation" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="mobile" className="text-sm font-semibold">Mobile</label>
//               <input id="mobile" name="mobile" type="tel" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-sm font-semibold">Email</label>
//               <input id="email" name="email" type="email" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="currentWorkingOrganization" className="text-sm font-semibold">Current Organization</label>
//               <input id="currentWorkingOrganization" name="currentWorkingOrganization" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="totalYearsOfExperience" className="text-sm font-semibold">Total Years Of Experience</label>
//               <input id="totalYearsOfExperience" name="totalYearsOfExperience" type="number" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
//             </div>

//             {/* Upload + Preview */}
//             <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
//               <div className="flex flex-col">
//                 <label htmlFor="profileImage" className="text-sm font-semibold">Upload Profile Image (JPG, JPEG, PNG, GIF - Max 5MB)</label>
//                 <input id="profileImage" name="profileImage" type="file" accept=".jpg,.jpeg,.png,.gif" onChange={onFileChange} className="mt-1" />
//               </div>
//               <div className="flex items-center justify-center">
//                 <div className="w-40 h-40 border border-dashed border-gray-300 rounded flex items-center justify-center overflow-hidden bg-gray-50">
//                   {profilePreview ? (
//                     <img src={profilePreview} alt="Profile Preview" className="w-full h-full object-cover" />
//                   ) : (
//                     <p className="text-center text-xs text-gray-500 leading-tight">Profile<br />Preview</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Expertise */}
//             <div className="md:col-span-2">
//               <label className="text-sm font-semibold">Expertise</label>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
//                 <input name="expertise1" placeholder="Expertise 1" required className="px-3 py-2 rounded border border-gray-200" />
//                 <input name="expertise2" placeholder="Expertise 2" required className="px-3 py-2 rounded border border-gray-200" />
//               </div>
//             </div>

//             <div className="md:col-span-2 flex flex-col">
//               <label htmlFor="biography" className="text-sm font-semibold">Biography</label>
//               <textarea id="biography" name="biography" required className="mt-1 px-3 py-2 rounded border border-gray-200" rows={5} />
//             </div>

//             <div className="md:col-span-2">
//               {isSubmitting && <p className="text-center text-[#b89c6b] font-semibold">Submitting...</p>}
//               {status.message && (
//                 <p className={`text-center font-bold ${status.success ? 'text-green-600' : 'text-red-600'}`}>
//                   {status.message}
//                 </p>
//               )}
//             </div>

//             <div className="md:col-span-2 flex justify-end gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={onCancel}
//                 className="px-6 py-3 rounded-lg font-bold"
//                 style={{ backgroundColor: '#e6ebf3', color: '#714819' }}
//                 disabled={isSubmitting}
//               >
//                 CANCEL
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-3 rounded-lg font-bold"
//                 style={{ backgroundColor: '#b89c6b', color: '#714819' }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
//               </button>
//             </div>
//           </div>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default BecomeAMember;


import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import becomeMember from "../../assets/images/PageBanners/aboutPOE.webp";

const API_URL = process.env.REACT_APP_API_URL;
if (!API_URL) console.error("REACT_APP_API_URL is missing in .env");

const Required = () => <span className="ml-1 text-red-600">*</span>;

const BecomeAMember = () => {
  const [profilePreview, setProfilePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const resetPreview = () => setProfilePreview('');

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      resetPreview();
      return;
    }
    const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Please select a JPG, JPEG, PNG, or GIF image.');
      e.target.value = '';
      resetPreview();
      return;
    }
    if (file.size > maxSize) {
      toast.error('File size exceeds 5MB. Please choose a smaller image.');
      e.target.value = '';
      resetPreview();
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => setProfilePreview(String(ev.target?.result || ''));
    reader.readAsDataURL(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(form);

    try {
      const response = await fetch(`${API_URL}/api/become-member`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message, { autoClose: 10000 });
        form.reset();
        resetPreview();
      } else {
        toast.error(data.message || 'Submission failed. Please try again.', { autoClose: 10000 });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please check your network and try again.', { autoClose: 10000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const onCancel = () => {
    const form = formRef.current;
    form?.reset();
    resetPreview();
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f2efe9', color: '#714819' }}>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-end text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${becomeMember})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Become A Member
          </h2>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Join Us & Be A Part of Our Team</h2>
          <p className="mt-2 text-justify">It should only take a couple of minutes to join our team.</p>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="bg-white rounded-2xl shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-sm font-semibold flex items-center">First Name<Required /></label>
              <input id="firstName" name="firstName" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-sm font-semibold flex items-center">Last Name<Required /></label>
              <input id="lastName" name="lastName" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="affiliation" className="text-sm font-semibold flex items-center">Affiliation<Required /></label>
              <input id="affiliation" name="affiliation" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobile" className="text-sm font-semibold flex items-center">Mobile<Required /></label>
              <input id="mobile" name="mobile" type="tel" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold flex items-center">Email<Required /></label>
              <input id="email" name="email" type="email" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="currentWorkingOrganization" className="text-sm font-semibold flex items-center">Current Organization<Required /></label>
              <input id="currentWorkingOrganization" name="currentWorkingOrganization" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
            </div>

            {/* Total Years, Upload & Preview Box */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label htmlFor="totalYearsOfExperience" className="text-sm font-semibold flex items-center">Total Years Of Experience<Required /></label>
                  <input id="totalYearsOfExperience" name="totalYearsOfExperience" type="number" required className="mt-1 px-3 py-2 rounded border border-gray-200" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="profileImage" className="text-sm font-semibold flex items-center">Upload Profile Image<Required /> (JPG, JPEG, PNG, GIF - Max 5MB)</label>
                  <input id="profileImage" name="profileImage" type="file" accept=".jpg,.jpeg,.png,.gif" onChange={onFileChange} required className="mt-1" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 border border-dashed border-gray-300 rounded-xl flex items-center justify-center overflow-hidden bg-gray-50">
                  {profilePreview ? (
                    <img src={profilePreview} alt="Profile Preview" className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-center text-xs text-gray-500 leading-tight">Profile<br />Preview</p>
                  )}
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold flex items-center">Expertise<Required /></label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <input name="expertise1" placeholder="Expertise 1" required className="px-3 py-2 rounded border border-gray-200" />
                <input name="expertise2" placeholder="Expertise 2" required className="px-3 py-2 rounded border border-gray-200" />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label htmlFor="biography" className="text-sm font-semibold flex items-center">Biography<Required /></label>
              <textarea id="biography" name="biography" required className="mt-1 px-3 py-2 rounded border border-gray-200" rows={5} />
            </div>

            <div className="md:col-span-2 flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 rounded-lg font-bold"
                style={{ backgroundColor: '#e6ebf3', color: '#714819' }}
                disabled={isSubmitting}
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-bold"
                style={{ backgroundColor: '#b89c6b', color: '#714819' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default BecomeAMember;