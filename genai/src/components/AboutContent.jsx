import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <section className="about-content-section" style={{ padding: '4rem 0' }}>
      <div className="container">
        
        <div className="about-header text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">Global Conclave on Artificial Intelligence & Machine Learning</h2>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: '600' }}>
            Where Algorithms Meet Innovation, and Global Tech Connections Begin
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>About the Conclave</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            The landscape of technology is evolving faster than ever. New artificial intelligence models, changing computational architectures, and shifting data privacy regulations are creating both exciting opportunities and new ethical challenges.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            The Global Conclave on Artificial Intelligence & Machine Learning brings together people who are actively building these intelligent systems—AI researchers, data scientists, ML engineers, policymakers, professionals, and students from around the world.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            More than just a conference, the conclave is a space to share breakthroughs, learn from different perspectives, meet inspiring tech leaders, and discover possibilities for technical collaboration.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '5px solid var(--primary)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Our Theme</h3>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--secondary)' }}>“Navigating the Era of Intelligent Systems: The Future of AI, Automation, and Machine Learning”</h4>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            From the rise of generative AI and deep learning to autonomous systems and ethical AI governance, the conclave looks at the technical developments that are shaping how we process data, automate tasks, and build intelligent infrastructure.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>What Will We Explore?</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>The conversations will cover a wide range of topics, including:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px', listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <li>Deep Learning & Neural Networks</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Generative AI & Large Language Models</li>
            <li>Computer Vision & Image Processing</li>
            <li>Robotics and Autonomous Systems</li>
            <li>AI in Healthcare & Medicine</li>
            <li>Edge AI and IoT Integration</li>
            <li>Reinforcement Learning</li>
            <li>Explainable AI (XAI) & AI Ethics</li>
            <li>Predictive Analytics & Big Data</li>
            <li>AI in Cyber Security</li>
            <li>Quantum Machine Learning</li>
            <li>Human-AI Interaction</li>
            <li>AI in Business & Finance</li>
            <li>MLOps & Productionizing AI</li>
          </ul>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>Why Be Part of the Conclave?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Learn from people who are shaping AI</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Listen to experienced AI researchers, data scientists, engineers, and thought leaders who bring knowledge from both advanced labs and the real world.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Share your ideas</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Present your machine learning research, algorithmic models, technical case studies, and perspectives to an audience that values cutting-edge tech.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Build meaningful connections</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Meet tech professionals from different industries and countries. A simple conversation at a conference can sometimes become a long-term research collaboration.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Discover new opportunities</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Explore possibilities for open-source contributions, technical collaborations, engineering roles, and startup investments.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Look beyond today</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Understand the algorithmic breakthroughs that could influence autonomous tech, generative models, and computing infrastructure in the years ahead.</p>
            </div>
          </div>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem', padding: '2.5rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Who Should Attend?</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>The conclave welcomes anyone with an interest in technology, artificial intelligence, and machine learning, including:</p>
          <p style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            AI Researchers | Data Scientists | ML Engineers | Academicians | Tech Entrepreneurs | Investors | Policymakers | Students | Software Developers | AI Ethicists
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Whether you are an experienced ML engineer or someone taking your first steps into data science, there is something here for you.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Call for Papers</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            We invite researchers, academicians, engineers, and students to share their work and code through research papers, technical review papers, algorithmic case studies, and engineering perspectives.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            It is an opportunity to put your algorithms forward, receive valuable peer reviews, and connect with others solving similar complex computational problems.
          </p>
        </div>

        <div className="about-block" style={{ textAlign: 'center', marginTop: '4rem', padding: '3.5rem 2rem', backgroundColor: 'var(--secondary)', color: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Be Part of the Conversation</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            The future of artificial intelligence is not being shaped by one tech giant, one industry, or one country. It is being built by code, collaborative research, open-source communities, and the architectural decisions we make today.
          </p>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.7' }}>
            The Global Conclave on Artificial Intelligence & Machine Learning is an invitation to be part of that technological journey.
          </p>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent)', lineHeight: '1.6' }}>
            Come with a model. Leave with new parameters, new algorithms, and new engineering possibilities.<br/>
            Connect. Learn. Code. Collaborate. Shape the Future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutContent;
