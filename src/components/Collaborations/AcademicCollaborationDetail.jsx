import React from "react";
import { useParams, Link } from "react-router-dom";
import { collaboratingColleges } from "../../data/Collaborations";

const AcademicDetail = () => {
  const { id } = useParams();
  const college = collaboratingColleges.find((c) => c.id === id);

  if (!college) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-500 font-semibold text-justify">College not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Banner Section */}
      <section className="relative h-96 bg-gray-900 flex items-center justify-center text-white text-center">
        <img
          src={college.banner.imageUrl}
          alt={`${college.name} banner`}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {college.banner.title}
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto">
            {college.banner.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* About Section */}
        <section className="bg-gray-50 rounded-2xl shadow-inner p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <img
              src={college.logo}
              alt={`${college.name} logo`}
              className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-full border-4 border-white shadow-lg flex-shrink-0"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {college.about.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                {college.about.content}
              </p>
            </div>
          </div>
        </section>

        {/* Collaboration Details Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {college.collaborationDetails.sectionTitle}
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-4xl mx-auto">
            {college.collaborationDetails.collaborationText}
          </p>
        </section>

        {/* Workshops Section */}
        <section className="bg-gray-100 rounded-2xl shadow-inner p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {college.workshops.sectionTitle}
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-justify">{college.workshops.description}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
            {college.workshops.list.map((workshop, idx) => (
              <li
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <span className="text-peptides-dark text-2xl font-bold">●</span>
                <span className="text-black text-lg">{workshop}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {college.gallery.sectionTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {college.gallery.images.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`${college.name} gallery image ${idx + 1}`}
                  className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/collaborations/academic"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-peptides-dark hover:bg-peptides-dark-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Back to Academic Collaborations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademicDetail;