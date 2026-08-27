import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <section className="about-content-section" style={{ padding: '4rem 0' }}>
      <div className="container">
        
        <div className="about-header text-center" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">World Biotechnology Summit</h2>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: 'var(--secondary)', fontWeight: '600' }}>
            Where Ideas Meet Opportunities, and Global Connections Begin
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>About the Summit</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            The world of biotechnology and life sciences is advancing faster than ever. New discoveries in genomics, synthetic biology, personalized medicine, and biomanufacturing are creating both exciting opportunities and critical ethical challenges.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            The World Biotechnology Summit brings together people who are curious about these breakthroughs and want to be part of the conversation—biotech leaders, scientists, geneticists, researchers, pharma executives, policymakers, and students from around the world.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            More than just a conference, the summit is a space to share ideas, learn from different perspectives, meet inspiring people, and discover possibilities for scientific and commercial collaboration.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '5px solid var(--primary)' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Our Theme</h3>
          <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold', color: 'var(--secondary)' }}>“Navigating the Future of Biotechnology, Healthcare, and Life Sciences”</h4>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            From the rise of CRISPR and personalized treatments to changing bio-regulations and agricultural biotechnology, the summit looks at the developments that are shaping how we research, treat, innovate, and grow.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>What Will We Explore?</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>The conversations will cover a wide range of topics, including:</p>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px', listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <li>Genetic Engineering & CRISPR</li>
            <li>Biopharmaceuticals & Drug Discovery</li>
            <li>Personalized Medicine</li>
            <li>Agricultural Biotechnology</li>
            <li>Synthetic Biology</li>
            <li>Bioinformatics & Computational Biology</li>
            <li>Stem Cell Research & Regenerative Medicine</li>
            <li>Environmental Biotechnology</li>
            <li>Nanobiotechnology</li>
            <li>Bioethics & Regulatory Affairs</li>
            <li>Industrial Biotechnology</li>
            <li>Immunology & Vaccine Development</li>
            <li>Microbial Biotechnology</li>
            <li>Neuroscience & Brain Mapping</li>
            <li>Marine Biotechnology</li>
          </ul>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>Why Be Part of the Summit?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Learn from people who are shaping change</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Listen to experienced professionals, researchers, geneticists, entrepreneurs, and thought leaders who bring knowledge from both the laboratory and the clinical world.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Share your ideas</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Present your research, experiences, clinical trials, case studies, and perspectives to an audience that values scientific excellence.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Build meaningful connections</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Meet people from different specialties, institutions, and countries. A simple conversation at a conference can sometimes become a long-term research collaboration.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Discover new opportunities</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Explore possibilities for research partnerships, clinical collaborations, biopharma networking, investment, and career growth.</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Look beyond today</h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>Understand the trends that could influence treatments, biosciences, careers, and healthcare markets in the years ahead.</p>
            </div>
          </div>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem', padding: '2.5rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Who Should Attend?</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>The summit welcomes anyone with an interest in biotechnology and life sciences, including:</p>
          <p style={{ fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Biotech Leaders | Scientists | Geneticists | Researchers | Pharma Executives | Policymakers | Students | Healthcare Professionals | Investors
          </p>
          <p style={{ fontSize: '1.1rem' }}>
            Whether you are an experienced researcher or someone taking your first steps into the world of biotechnology, there is something here for you.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Call for Papers</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            We invite researchers, academicians, industry professionals, and students to share their work and ideas through research papers, review papers, clinical studies, and industry perspectives.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginTop: '1rem' }}>
            It is an opportunity to put your ideas forward, receive valuable insights, and connect with others working on similar challenges and opportunities.
          </p>
        </div>

        <div className="about-block" style={{ marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>What Can You Expect?</h3>
          <ul style={{ listStyleType: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✦</span>
              <strong>Inspiring Keynotes</strong> – Hear stories, ideas, and insights from experienced voices in biotech.
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✦</span>
              <strong>Thought-Provoking Discussions</strong> – Explore real-world clinical challenges and possible solutions.
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✦</span>
              <strong>Research Presentations</strong> – Discover new ideas and research from different biological fields.
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✦</span>
              <strong>Industry Perspectives</strong> – Understand what is really happening in the biopharma industry beyond textbooks.
            </li>
            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✦</span>
              <strong>Networking</strong> – Meet people, exchange ideas, and create connections that can continue long after the summit.
            </li>
          </ul>
        </div>

        <div className="about-block" style={{ textAlign: 'center', marginTop: '4rem', padding: '3.5rem 2rem', backgroundColor: 'var(--secondary)', color: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>Be Part of the Conversation</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
            The future of biotechnology is not being shaped by one person, one lab, or one country. It is being shaped by ideas, conversations, collaborations, and the discoveries we make today.
          </p>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem', marginBottom: '2rem', lineHeight: '1.7' }}>
            The World Biotechnology Summit is an invitation to be part of that journey.
          </p>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--accent)', lineHeight: '1.6' }}>
            Come with an idea. Leave with new perspectives, new connections, and new possibilities.<br/>
            Connect. Learn. Share. Collaborate. Shape the Future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutContent;
