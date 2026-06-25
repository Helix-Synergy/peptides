import React, { useRef, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScienceBanner from "../assets/images/PageBanners/hero_students_lab.webp";

// LettersPullUp component for per-letter animation
function LettersPullUp({ text, className = "" }) {
  const splittedText = text.split("");
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = useRef(null);
  const isInView = (
    typeof window !== "undefined"
      ? require("framer-motion").useInView
      : () => false
  )(ref, { once: true });

  return (
    <div className="flex justify-start mb-4">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={
            "text-sm sm:text-base font-semibold tracking-widest uppercase " +
            className
          }
        >
          {current === " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  const imageRef = useRef(null);

  // GSAP parallax effect for image on mouse move (desktop only)
  useEffect(() => {
    // Only apply on desktop to avoid issues on touch devices and if GSAP isn't critical for mobile
    const isDesktop = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint
    const img = imageRef.current;

    if (!img || !isDesktop) return;

    const handleMove = (e) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      gsap.to(img, {
        x: x * 20,
        y: y * 20,
        scale: 1.04,
        duration: 0.5,
        ease: "power2.out",
      });
    };
    const handleLeave = () => {
      gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.6, ease: "power2.out" });
    };

    img.addEventListener("mousemove", handleMove);
    img.addEventListener("mouseleave", handleLeave);

    return () => {
      img.removeEventListener("mousemove", handleMove);
      img.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row items-stretch bg-white overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 py-12 lg:py-0 z-10 text-center lg:text-left">
        {/* Animated subtitle with per-letter pull-up */}
        <div className="lg:justify-start justify-center flex">
          <LettersPullUp text="Empowering Education" />
        </div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#0F2920] leading-tight mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
        >
          Peptides Knowledge Park
          <br className="hidden sm:block" />
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-black mb-8 max-w-xl text-justify mx-auto lg:mx-0"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
        >
          Peptides Knowledge Park’s Academic Support Services encompass a range
          of offerings designed to enhance student success and engagement. Our
          Services include Tutoring & Mentoring, Writing & Communication Labs,
          Academic Advising, Skill-Building Workshops, Review & Prep Programs,
          Learning Resource Hubs, Career Counselling, Academic Project
          Assistance, Conferences etc.,{" "}
        </motion.p>
      </div>

      {/* Right: Diagonal Image Split */}
      <div className="relative flex-1 min-h-[350px] hidden lg:block">
        <div className="absolute inset-0 w-full h-full">
          {/* Diagonal overlay */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <polygon points="0,0 800,0 800,800" fill="#0F2920" />
          </svg>
          {/* Placeholder image with diagonal mask */}
          <motion.img
            ref={imageRef}
            src={ScienceBanner}
            alt="Students working on science projects"
            fetchpriority="high"
            loading="eager"
            className="absolute top-0 right-0 w-full h-full object-cover object-center [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]"
            style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
            initial={{ x: 600, opacity: 0, scale: 1.05 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
