import React from "react";
import { useNavigate } from "react-router-dom";
import { Mail, GraduationCap, UserCheck } from "lucide-react";

const HomeContactSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 px-6 bg-[#f2efe9]" id="contact">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <span className="text-peptides-color-brown text-sm font-semibold tracking-widest uppercase mb-2">
          Get In Touch
        </span>

        {/* Gradient Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] bg-clip-text text-transparent mb-6 leading-tight">
          Let’s Connect & Start Our Journey
        </h2>

        <p className="text-lg text-black max-w-2xl mb-10 text-justify">
          Have questions? Need guidance? or Looking to register? <br/>
          We’re here to help you every step of the way. 
        </p>

        {/* Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {/* Contact */}
          <button
            onClick={() => navigate("/contact")}
            title="Go to Contact Page"
            className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#734D1F] to-[#734D1F] text-white p-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-8 h-8" aria-hidden="true" />
            <span className="font-bold text-xl">Contact</span>
            <span className="text-sm opacity-80">
              Reach out to our support team.
            </span>
          </button>

          {/* Student Registration */}
          <button
            onClick={() => navigate("/contact/register-student")}
            title="Register as a Student"
            className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#A97830] to-[#A97830] text-white p-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <GraduationCap className="w-8 h-8" aria-hidden="true" />
            <span className="font-bold text-xl">Student Registration</span>
            <span className="text-sm opacity-80">
              Join as a student member.
            </span>
          </button>

          {/* Faculty Registration */}
          <button
            onClick={() => navigate("/contact/register-faculty")}
            title="Register as a Faculty Member"
            className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0f2920] to-[#3a4a3f] text-white p-10 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <UserCheck className="w-8 h-8" aria-hidden="true" />
            <span className="font-bold text-xl">Faculty Registration</span>
            <span className="text-sm opacity-80">
              Become part of our faculty network.
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
