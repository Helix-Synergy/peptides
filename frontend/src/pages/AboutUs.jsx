import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../assets/images/about-banner.webp";
import { Rocket, Star, Handshake, ShieldCheck } from "lucide-react";
import SEO from "../components/SEO";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const statsRef = useRef(null);
  const skillBarsRefs = useRef([]);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const timer = setTimeout(() => {
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll(".stat-value");
        counters.forEach((counter) => {
          const targetValue = parseInt(counter.dataset.target);
          const isPlus = counter.dataset.plus === "true";
          const obj = { val: 0 };

          gsap.to(obj, {
            val: targetValue,
            duration: 2,
            ease: "power1.out",
            snap: { val: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            onUpdate: function () {
              counter.textContent = isPlus
                ? `+${Math.round(obj.val)}`
                : `${Math.round(obj.val)}`;
            },
            onComplete: function () {
              counter.textContent = isPlus
                ? `+${targetValue}`
                : `${targetValue}`;
            },
          });
        });
      }

      skillBarsRefs.current.forEach((bar, idx) => {
        if (bar) {
          const targetWidth = parseFloat(bar.dataset.targetWidth);
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${targetWidth}%`,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 85%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, 100);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="bg-white min-h-screen font-inter">
      <SEO 
        title="About Us"
        description="Learn about Peptides Knowledge Park's mission, vision, and core values. We provide Academic Support, Corporate Astute services, and more."
        keywords="About Peptides Knowledge Park, Mission, Vision, Academic Support Services, Tutoring, Mentoring, Skill-Building Workshops, Career Counselling, Corporate Astute, Career Saga"
      />
      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-end w-full px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mr-[10%] mb-4 drop-shadow-lg">
            About Us
          </h1>
          {/* <p className="text-lg md:text-xl max-w-3xl mx-auto text-justify">
      Peptides Knowledge Park’s Academic Support Services
    </p>
    <p className="text-base text-gray-200 mt-2 max-w-3xl mx-auto text-justify">
      Enhancing student success and engagement through Tutoring,
      Mentoring, Writing Labs, Academic Advising, Skill-Building
      Workshops, Review Programs, Career Counselling, and more.
    </p> */}
        </motion.div>

        <div className="absolute inset-0 bg-black/50"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-lg text-[#0F2920] font-bold md:text-2xl max-w-3xl mx-auto text-justify">
              Peptides Knowledge Park’s Academic Support Services
            </p>
            <p className="text-lg text-black mt-2 max-w-3xl mx-auto text-justify">
              Enhancing student success and engagement through Tutoring,
              Mentoring, Writing Labs, Academic Advising, Skill-Building
              Workshops, Review Programs, Career Counselling, and more.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold pt-10 text-peptides-dark mb-6">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gradient-start to-gradient-end rounded-2xl p-8 text-white shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed text-peptides-text-muted text-justify">
                Our mission is to empower Learners by providing Inclusive,
                Innovative, and High-Impact Academic Support Services that
                foster Intellectual Growth, Personal Development, and Career
                Readiness. We bridge Learning Gaps, enhance Confidence, and
                cultivate Excellence through Personalized Guidance, Mentorship,
                and Transformative Educational Experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gradient-end to-peptides-dark rounded-2xl p-8 text-white shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed text-peptides-text-muted text-justify">
                To redefine the Future of Education through Modular, Branded
                Academic Services that empower Learners, Educators, and
                Institutions alike. We envision Peptides Knowledge Park as a
                Dynamic Platform where Creativity meets Specialization—bridging
                Science, Technology, and Management with Real-World Relevance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 lg:px-12 bg-gradient-br-dark text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-light mb-2">
                <span className="stat-value" data-target="768" data-plus="true">
                  +5068
                </span>
              </div>
              <div className="text-lg text-peptides-text-muted">
                Students Supported
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-light mb-2">
                <span
                  className="stat-value"
                  data-target="2164"
                  data-plus="true"
                >
                  +2164
                </span>
              </div>
              <div className="text-lg text-peptides-text-muted">
                Projects & Workshops
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-light mb-2">
                <span className="stat-value" data-target="18" data-plus="false">
                  +18
                </span>
              </div>
              <div className="text-lg text-peptides-text-muted">
                Years of Experience
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-peptides-dark mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed text-justify">
              The fundamantals and principles we follow do shape our Culture of Excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "Pioneering Modern Educational methods and Digital Tools for Learning Success.",
                icon: <Rocket className="w-10 h-10 text-peptides-green" />,
              },
              {
                title: "Excellence",
                description: "Delivering impactful Academic Support with the highest standards.",
                icon: <Star className="w-10 h-10 text-peptides-green" />,
              },
              {
                title: "Collaboration",
                description: "Partnering with Learners, Educators, and Institutions for Shared Growth.",
                icon: <Handshake className="w-10 h-10 text-peptides-green" />,
              },
              {
                title: "Integrity",
                description: "Ensuring Transparency, Ethics, and Accountability in all Services.",
                icon: <ShieldCheck className="w-10 h-10 text-peptides-green" />,
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-peptides-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-black text-sm text-justify">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-12 bg-gradient-to-br from-gradient-start to-gradient-end">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg mb-8 opacity-90 text-justify">
              Join us in Empowering Students, Educators, and Institutions
              through Academic Excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-peptides-dark font-bold py-3 px-8 rounded-xl hover:bg-peptides-dark-light hover:text-white transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-peptides-dark-lighter transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
