import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Play,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Monitor,
  Microscope,
  Stethoscope,
  Dna,
  BarChart,
  Globe,
  Shield,
  Cpu,
  FlaskConical,
  Leaf,
  Utensils,
  BookText,
  Lightbulb,
  Package,
} from "lucide-react";
import journalsBanner from '../../assets/images/PageBanners/1.jpg'

// Placeholder image URLs for courses
const placeholderImages = {
  course1: "https://placehold.co/400x250/0f2920/d9d9d9?text=Peptide+Chemistry",
  course2: "https://placehold.co/400x250/1f3b30/d9d9d9?text=Molecular+Biology",
  course3: "https://placehold.co/400x250/3a4a3f/d9d9d9?text=Bioinformatics",
};

const courses = [
  {
    title: "Introduction to Peptide Chemistry",
    instructor: "Dr. Sarah Johnson",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.8,
    students: 1250,
    image: placeholderImages.course1,
  },
  {
    title: "Advanced Molecular Biology",
    instructor: "Prof. Michael Chen",
    duration: "12 weeks",
    level: "Advanced",
    rating: 4.9,
    students: 890,
    image: placeholderImages.course2,
  },
  {
    title: "Bioinformatics Fundamentals",
    instructor: "Dr. Emily Rodriguez",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 1100,
    image: placeholderImages.course3,
  },
];

const features = [
  {
    icon: <Play className="w-8 h-8 text-peptides-color-brown" />,
    title: "Video Lectures",
    description: "High-quality video content with expert instructors.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-peptides-color-brown" />,
    title: "Interactive Content",
    description: "Engaging materials with quizzes and assessments.",
  },
  {
    icon: <Users className="w-8 h-8 text-peptides-color-brown" />,
    title: "Community Learning",
    description: "Connect with peers and instructors worldwide.",
  },
  {
    icon: <Globe className="w-8 h-8 text-peptides-color-brown" />,
    title: "Flexible Access",
    description: "Learn at your own pace, anytime, anywhere.",
  },
];

const benefits = [
  "Self-paced learning with 24/7 access",
  "Expert-led courses from industry professionals",
  "Interactive assessments and progress tracking",
  "Certificate of completion for each course",
  "Mobile-friendly platform for learning on-the-go",
  "Regular content updates and new course additions",
];

const subjectsList = [
  { id: 1, title: "Data Science", icon: BarChart },
  { id: 2, title: "Artificial Intelligence", icon: Cpu },
  { id: 3, title: "Cybersecurity", icon: Shield },
  { id: 4, title: "Pharmaceutical Sciences", icon: FlaskConical },
  { id: 5, title: "Healthcare & Nursing", icon: Stethoscope },
  { id: 6, title: "Biotechnology", icon: Dna },
  { id: 7, title: "Business Analytics", icon: BarChart },
  { id: 8, title: "Computer Science / IT", icon: Monitor },
  { id: 9, title: "Microbiology", icon: Microscope },
  { id: 10, title: "Genetics", icon: Dna },
  { id: 11, title: "Finance & Accounting", icon: BookText },
  { id: 12, title: "Applied Economics", icon: BarChart },
  { id: 13, title: "Marketing Management", icon: Users },
  { id: 14, title: "Entrepreneurship", icon: Lightbulb },
  { id: 15, title: "Supply Chain Management", icon: Package },
  { id: 16, title: "Political Science", icon: Globe },
  { id: 17, title: "Public Health", icon: Stethoscope },
  { id: 18, title: "Psychology", icon: Users },
  { id: 19, title: "Mass Communication", icon: BookOpen },
  { id: 20, title: "Biochemistry", icon: FlaskConical },
  { id: 21, title: "Zoology", icon: Leaf },
  { id: 22, title: "Botany", icon: Leaf },
  { id: 23, title: "Chemistry", icon: FlaskConical },
  { id: 24, title: "Physics", icon: Lightbulb },
  { id: 25, title: "Mathematics", icon: BookText },
  { id: 26, title: "Environmental Science", icon: Leaf },
  { id: 27, title: "Nutrition & Dietetics", icon: Utensils },
  { id: 28, title: "Paramedical Sciences", icon: Stethoscope },
  { id: 29, title: "Clinical Psychology", icon: Users },
  { id: 30, title: "Economics", icon: BarChart },
  { id: 31, title: "History", icon: BookOpen },
  { id: 32, title: "International Relations", icon: Globe },
  { id: 33, title: "Human Resource Management", icon: Users },
  { id: 34, title: "Statistics", icon: BarChart },
  { id: 35, title: "Philosophy", icon: BookOpen },
  { id: 36, title: "Sociology", icon: Users },
];

const ELearnDigitalLearning = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-white text-peptides-dark-light min-h-screen font-inter overflow-hidden relative">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${journalsBanner})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            e-Learn
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="w-full py-12 px-4 lg:px-12 bg-white text-peptides-dark-light">
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-peptides-dark mb-6">
              Welcome to the Future of Learning
            </h2>
            <p className="text-lg text-peptides-dark max-w-4xl mx-auto leading-relaxed mb-6 text-justify">
              Our e-education platform gives you the power to gain new skills
              and advance your career from anywhere in the world. With a vast
              library of expert-led courses and flexible learning paths, you can
              fit education into your life, not the other way around. Whether
              you're a student, a professional, or a lifelong learner, we
              provide the tools, knowledge, and support you need to reach your
              goals.
            </p>
            <p className="text-lg text-peptides-dark max-w-4xl mx-auto leading-relaxed text-justify">
              Learning is better when you're connected. Our e-education platform
              isn't just about video lectures; it's a vibrant community of
              learners, mentors, and industry experts. Engage in live Q&A
              sessions, collaborate on projects with peers from around the
              globe, and get personalized feedback from instructors.
            </p>
          </motion.div>

          {/* Featured Courses */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-peptides-dark text-center mb-8">
              Featured Courses
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-peptides-dark rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 text-peptides-text-light"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-peptides-color-brown text-white px-2 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-peptides-text-light mb-3">
                      {course.title}
                    </h4>
                    <p className="text-peptides-text-muted mb-4 text-justify">
                      Instructor: {course.instructor}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-peptides-text-muted">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-peptides-text-muted" />
                        <span className="text-sm">
                          {course.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-peptides-text-muted" />
                        <span className="text-sm">
                          {course.students} students
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-peptides-color-brown" fill="currentColor" />
                        <span className="text-sm text-peptides-text-muted">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <button className="w-full bg-peptides-color-brown text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Subjects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-peptides-dark text-center mb-8">
              Subjects We Cover
            </h3>
            <p className="text-center text-peptides-dark max-w-2xl mx-auto mb-10">
              We provide academic support across a wide range of disciplines,
              ensuring that students from diverse fields get the guidance they need
              to excel.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {subjectsList.map((subj, index) => (
                <motion.div
                  key={subj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center px-4 py-3 rounded-full bg-peptides-dark-lighter border border-peptides-dark shadow-sm hover:shadow-md transition-all duration-300 text-peptides-dark"
                >
                  <subj.icon className="h-7 w-7 text-peptides-color-brown mr-3" />
                  <span className="text-sm font-bold">
                    {subj.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platform Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-peptides-dark text-center mb-8">
              Platform Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-peptides-dark rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 text-peptides-text-light"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-peptides-dark mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-peptides-dark text-justify">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-peptides-dark text-center mb-8">
              Why Choose e-Learn?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-peptides-dark-light border border-peptides-dark rounded-lg p-4 hover:shadow-sm transition-shadow text-peptides-text-light"
                >
                  <CheckCircle className="w-5 h-5 text-peptides-color-brown flex-shrink-0" />
                  <span className="text-peptides-text-muted">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-peptides-dark-light rounded-2xl p-8 text-peptides-text-light">
              <h3 className="text-2xl font-bold mb-4">
                Start Your Digital Learning Journey Today
              </h3>
              <p className="text-lg mb-6 opacity-90 text-peptides-text-muted text-center">
                Join thousands of learners worldwide and advance your career with
                our expert-led courses.
              </p>
              <button className="btn-outline text-peptides-light border-peptides-color-brown font-bold py-3 px-8 rounded-xl hover:bg-peptides-color-brown hover:text-white transition-colors duration-200 flex items-center mx-auto">
                Explore Courses <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ELearnDigitalLearning;
