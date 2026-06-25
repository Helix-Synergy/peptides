import React from 'react';
import { Link } from 'react-router-dom';
import { collaboratingColleges } from '../../data/Collaborations';
import Banner from '../../assets/images/PageBanners/collaborationsBanner.webp'

const AcademicCollaborations = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <img
          src={Banner}
          alt="Collaboration Banner"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Our Academic Collaborations
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 text-justify">
            Partnering with World-class Institutions to forge a Brighter Future.
          </p>
        </div>
      </section>

      {/* Collaborating Colleges Grid with Staggered Layout */}
      <section className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Explore Our Esteemed Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              We're proud to work with these leading academic Institutions, creating Innovative Opportunities for our students and faculty.
            </p>
          </div>

          <div className="space-y-24">
            {collaboratingColleges.map((college, index) => (
              <div
                key={college.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 p-8 rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:shadow-2xl ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image & Logo */}
                <div className="w-full lg:w-1/2 flex-shrink-0 relative">
                  <img
                    src={college.banner.imageUrl}
                    alt={`${college.name} banner`}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <img
                    src={college.logo}
                    alt={`${college.name} logo`}
                    className="absolute top-4 right-4 w-24 h-24 object-contain bg-white rounded-full p-2 border-4 border-white shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    {college.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed text-justify">
                    {college.collaborationDetails.collaborationText}
                  </p>
                  <Link
                    to={`/academic/${college.id}`}
                    className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-full text-white bg-peptides-dark hover:bg-peptides-dark-light transition-colors duration-300 transform hover:scale-105 shadow-lg"
                  >
                    View Details
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-black text-peptides-dark py-20 px-6 sm:px-10 lg:px-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl text-peptides-color-brown font-bold mb-4">
            Want to Collaborate with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-peptides-dark text-justify">
            If you're an academic institution or a company that shares our vision, we would love to connect with you. Let's build a better future together.
          </p>
          <Link
            to="/collaborations/collab-peptides"
            className="inline-flex items-center justify-center px-10 py-4 border-2 border-white text-lg font-bold rounded-full text-peptides-color-brown bg-transparent hover:bg-white hover:text-peptides-dark transition-all duration-300 transform hover:scale-105"
          >
            Connect with Peptides
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AcademicCollaborations;
