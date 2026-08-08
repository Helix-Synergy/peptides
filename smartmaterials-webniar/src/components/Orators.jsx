import React, { useState } from 'react';
import { FaUserCircle, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Orators.css';

import ramakanthImg from '../assets/orators/ramakanth.webp';
import sujaniImg from '../assets/orators/sujani.webp';
import kalyaniImg from '../assets/orators/kalyani.webp';
import sudhakarImg from '../assets/orators/sudhakar.webp';
import roseMaryImg from '../assets/orators/rose-mary.webp';
import sunithaImg from '../assets/orators/sunithaGaru.webp';
import anjaiahImg from '../assets/orators/Dr.Anjaiah.jpg';
import jaganmohanImg from '../assets/orators/jaganmohan.jpg';

const Orators = ({ hideTitle, limit, isScrolling }) => {
  const [selectedOrator, setSelectedOrator] = useState(null);

  const orators = [
    {
      id: 1,
      name: 'Dr. Ramakant Sharma',
      university: 'Ramadevi Mahila P.G. Mahavidyalaya, Jhunjhunu',
      country: 'India',
      image: ramakanthImg,
      about: 'Expertise in molecular biology techniques such as PCR, ELISA, and HPLC. Published extensively in national and international journals, with a focus on cancer biology and radiation studies. Dr. Ramakant Sharma is a dedicated Professor of Botany with extensive experience in academic leadership, teaching, and research. Currently serving at Ramadevi Mahila P.G. Mahavidyalaya, Jhunjhunu, he excels as an Academic Co-ordinator, NSS Officer, and Head of the Placement Cell. His expertise spans molecular techniques, plant tissue culture, and hematology, with proficiency in advanced methods like PCR and HPLC. Dr. Sharma holds a Ph.D. with research focused on radiation protection and hematological studies in Swiss albino mice. His academic journey includes degrees such as M.Sc. in Biotechnology and B.Sc. in Zoology, alongside certifications in computer skills and teaching methodologies. An active participant in national and international seminars, his work has been widely recognized, including accolades for paper and poster presentations. With a strong affiliation to academic bodies like UGC, NCTE, and NAAC, Dr. Sharma has contributed significantly to curriculum development, affiliation processes, and event organization. His multilingual abilities, coupled with a commitment to innovation and education, make him a distinguished figure in the field of science and academia.',
      contributions: ['Molecular biology research', 'Radiation biology studies', 'Education and mentorship'],
      achievements: ['Extensive research in molecular biology, PCR, ELISA, HPLC', 'Published work on cancer biology and radiation studies', 'Academic leadership roles as Professor, Academic Coordinator, NSS Officer', 'Active participant in national and international seminars']
    },
    {
      id: 2,
      name: 'Dr. Sujani Gudipati',
      university: 'Advance Aqua Biotechnologies India Pvt Ltd.',
      country: 'India',
      image: sujaniImg,
      about: "Dr. SUJANI GUDIPATI is an accomplished professional with extensive expertise in scientific research, teaching, and administration. Currently leading the R&D division at Advance Aqua Biotechnologies India Pvt Ltd., Dr.Sujani Gudipati develops innovative veterinary pharmaceutical formulations to enhance animal health globally. With a rich academic history, including roles as Vice Principal, Lecturer, and Head of Department at esteemed institutions like Andhra Loyola College and Sri Chaitanya College, they have nurtured talent and contributed to the overall growth of students through teaching, counseling, and career guidance. A prolific researcher and dedicated participant in international seminars and webinars, Dr. Sujani Gudipati has presented groundbreaking work in aqua phytobiotics and sustainable agricultural practices. Their research has been recognized with accolades such as 'Best Poster Presentation,' and they have contributed significantly to climate change studies, biodiversity conservation, and pharmaceutical advancements. Their academic achievements also include involvement with national and international conferences, guest faculty roles, and contributions as a Board of Studies member. Dr. Sujani Gudapati combines a unique blend of teaching, scientific innovation, and event management expertise, holding a vision of empowering individuals and organizations. Their dedication to knowledge transfer and skill development has left a lasting impact on academia and the broader scientific community.",
      contributions: ['Scientific research in veterinary pharmaceuticals', 'Education, mentorship, and community service', 'Event management and academic leadership'],
      achievements: ['Led R&D at Advance Aqua Biotechnologies India Pvt Ltd.', 'Contributions to aqua phytobiotics and veterinary formulations', 'Teaching and administrative roles across multiple colleges', 'Best Poster Presentation and recognition in climate change, biodiversity, and pharma research']
    },
    /*
    {
      id: 3,
      name: 'Dr. Kalyani Paidikondala',
      university: 'Department of Science and Technology–Women Scientists Scheme (DST-WOSA)',
      country: 'India',
      image: kalyaniImg,
      about: 'Dr. Kalyani Paidikondala is currently working as a Women Scientist under the DST-WOSA (Department of Science and Technology–Women Scientists Scheme). Her major research focus lies in the synthesis and evaluation of biologically active compounds, particularly those with anti-inflammatory and anti-cancer properties, including the synthesis of metal complexes for therapeutic applications. She earned her Ph.D. in Chemistry from Jawaharlal Nehru Technological University, Hyderabad, India. Dr. Paidikondala is the author of six books, each highlighting advances in anticancer drug discovery and mechanisms of action. Her scientific contributions include 3 patents, 30 research publications and presentations at more than 25 national and international conferences, reflecting her active engagement with the global research community.',
      contributions: ['Research in anti-cancer and anti-inflammatory compounds', 'Synthesis of therapeutic metal complexes', 'Scientific publications, books, and patents'],
      achievements: ['Synthesis and evaluation of biologically active compounds, particularly anti-inflammatory and anti-cancer', 'Synthesis of quercetin and Curcumin metal Complexes and its biological activities', 'Author of six books on anticancer drug discovery', 'Scientific contributions include 3 patents and 30 research publications', 'Presented at more than 25 national and international conferences', '18 years of total experience']
    },
    {
      id: 4,
      name: 'Dr. Y. Sudhakar',
      university: 'Andhra Loyola Institute of Engineering and Technology, Vijayawada',
      country: 'India',
      image: sudhakarImg,
      about: 'Dr. Y. Sudhakar is an accomplished academician with over 20 years of teaching and research experience in Physics. He holds a Ph.D. in Bio-glasses and an M.Phil. in Glass Science from Acharya Nagarjuna University. Currently serving as Assistant Professor and Head of the Department of Science & Humanities at Andhra Loyola Institute of Engineering and Technology, Vijayawada, he has also held key academic roles in various reputed institutions. His research interests focus on optical and spectroscopic properties of glass systems, with several published papers in international journals. Dr. Sudhakar is known for his dedication to teaching and has contributed significantly to undergraduate and postgraduate education in Physics.',
      contributions: ['Research in bio-glasses and glass science', 'Physics education at undergraduate and postgraduate levels', 'Academic leadership in science and humanities'],
      achievements: ['Expertise: Bio-glasses, Glass Science, Physics education', 'Education: Ph.D. in Bio-glasses and M.Phil. in Glass Science', 'Experience: Over 20 years in teaching and research', 'Leadership: Assistant Professor and Head of Department at Andhra Loyola Institute of Engineering and Technology', 'Research: Published several papers in international journals']
    },
    */
    {
      id: 5,
      name: 'Dr. Rose Mary Tadiparthi',
      university: 'Head of the Botany Department',
      country: 'India',
      image: roseMaryImg,
      about: 'For over 34 years, Dr. Rose Mary Tadiparthi has dedicated her career to the field of Botany, with a passion for educating the next generation of scientists. Her teaching approach highlights making complex botanical topics clear and relatable for BSc students, and her role as Head of the Botany Department showcases her commitment to academic leadership. This focus on clarity and communication has been the foundation of her long career. Outside the classroom, she is a committed scholar with a diverse academic background, demonstrating her varied interests and ability to master her field. Her qualifications, including a Doctorate in Botany, an M.Phil, an M.Ed, and a successful NET qualification, show her skill in exploring new areas and making meaningful contributions across different academic and educational fields. This drive also extends beyond her academic work. Her strong inclination towards the practical application of her knowledge is demonstrated by her Diploma in Herbal Medicine, highlighting a unique blend of scientific discipline and a hands-on approach to natural remedies. In her leadership role as the Head of the Botany Department, she serves as a key link between faculty, administration, and students. This role has nurtured her skills in listening, understanding challenges, and effectively advocating for practical solutions, ensuring that the department’s needs are acknowledged and addressed.',
      contributions: ['Botany education', 'Research in herbal medicine', 'Departmental leadership and academic mentoring'],
      achievements: ['Expertise: Teaching all papers to BSc Botany students, Herbal Medicine', 'Research: Doctorate in Botany, MPhil, and NET qualified', 'Leadership: Head of the Botany Department', 'Experience: 34 years of experience in the field']
    },
    {
      id: 6,
      name: 'Prof. E.M. Sunitha',
      university: 'Babu Jagjivan Ram Government Degree College (A) Autonomous, Hyderabad',
      country: 'India',
      image: sunithaImg,
      about: "Prof. E.M. Sunitha is an accomplished Academician and Researcher with over two decades of experience in the fields of Teaching and Research. Currently serving as a Professor and Head of the Department of Botany at Babu Jagjivan Ram Government Degree College (A) Autonomous in Hyderabad, she has dedicated her career to fostering Student Growth and Innovation. She holds a Doctorate Degree in Genetics from Osmania University, which laid the foundation for her Interdisciplinary Skills. Beyond her Administrative and Teaching duties, Prof. Sunitha is a dynamic Leader known for implementing innovative practices such as the 'BJR Bionics YouTube Channel' and a Virtual/Digital Herbarium to enhance Blended Learning. Her commitment to Environmental Consciousness is evident through her supervision of projects like the establishment of a Miyawaki Garden and a Solar-Based Moisture Sensor, the latter of which received a National Award.",
      contributions: ['Curriculum Development for B.Sc Botany.', 'Innovative Practices in ICT Teaching and Blended Learning.', 'Research in Plant Sciences and Environmental Consciousness.'],
      achievements: ['Recipient of the State Best Teacher Award – 2025.', 'Recipient of multiple Awards for Innovative Projects, including the National Hackathon Third Prize.', "Initiated the 'BJR Bionics YouTube Channel' and a Virtual/Digital Herbarium for Student Learning.", 'Supervised the establishment of a Miyawaki Garden and a Medicinal Plant Garden.', 'Author of three Books on subjects like Tissue Culture and Mushroom Cultivation.', 'Holds a Doctorate in Genetics and has qualified for GATE and SLET Examinations.', 'Commissioned as a Lieutenant in the Army NCC.', 'Holder of a Patent in her field of Research.']
    },
    {
      id: 7,
      name: 'Dr. Anjaiah Birla',
      university: 'AV College of Arts, Science & Commerce',
      country: 'India',
      image: anjaiahImg,
      about: 'Educational qualification- M.Sc. Ph.D.',
      contributions: ['Physical Chemistry', 'Chemical Kinetics'],
      achievements: ['Total Years Of Experience: 19']
    },
    {
      id: 8,
      name: 'Dr. A. Jagan Mohan Reddy',
      university: 'A.V. College of Arts, Science & Commerce, Osmania University',
      country: 'India',
      image: jaganmohanImg,
      about: 'Dr. A. Jagan Mohan Reddy is an expert in Organic Chemistry and Chemistry, bringing a wealth of knowledge to the field.',
      contributions: ['Organic Chemistry', 'Chemistry'],
      achievements: ['Total Years Of Experience: 25']
    },
  ];

  const closeModal = () => setSelectedOrator(null);

  const displayOrators = limit ? orators.slice(0, limit) : orators;

  const renderCard = (orator, keyPrefix) => (
    <div className="orator-card" key={`${keyPrefix}-${orator.id}`} onClick={() => setSelectedOrator(orator)}>
      <div className="orator-image-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f4f6', minHeight: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
        {orator.image ? (
          <img src={orator.image} alt={orator.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <FaUserCircle size={120} color="#d1d5db" />
        )}
      </div>
      <div className="orator-info">
        <h3 className="orator-name">{orator.name}</h3>
        <p className="orator-uni">{orator.university}</p>
        <p className="orator-country">{orator.country}</p>
        {orator.about && <button className="read-more-btn">Read More</button>}
      </div>
    </div>
  );

  return (
    <section className="orators-section">
      <div className="container">
        {!hideTitle && <h2 className="section-title">Our Orators</h2>}
        
        {isScrolling ? (
          <div className="orators-marquee-wrapper">
            <div className="orators-marquee-content">
              {displayOrators.map((orator) => renderCard(orator, 'first'))}
            </div>
            <div className="orators-marquee-content" aria-hidden="true">
              {displayOrators.map((orator) => renderCard(orator, 'second'))}
            </div>
          </div>
        ) : (
          <div className="orators-grid">
            {displayOrators.map((orator) => renderCard(orator, 'grid'))}
          </div>
        )}

        {(limit && limit < orators.length) || isScrolling ? (
          <div className="view-more-container" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/orators" className="read-more-btn" style={{ textDecoration: 'none', display: 'inline-block', fontSize: '1.1rem', padding: '0.75rem 2rem' }}>
              View All Orators
            </Link>
          </div>
        ) : null}
      </div>

      {selectedOrator && (
        <div className="orator-modal-overlay" onClick={closeModal}>
          <div className="orator-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
            <div className="modal-header">
              <div className="modal-image-container">
                {selectedOrator.image ? (
                  <img src={selectedOrator.image} alt={selectedOrator.name} className="modal-image" />
                ) : (
                  <FaUserCircle size={100} color="#d1d5db" />
                )}
              </div>
              <div className="modal-header-info">
                <h2>{selectedOrator.name}</h2>
                <p className="modal-uni">{selectedOrator.university}</p>
                <p className="modal-country">{selectedOrator.country}</p>
              </div>
            </div>
            
            <div className="modal-body">
              {selectedOrator.about && (
                <div className="modal-section">
                  <h3>About</h3>
                  <p>{selectedOrator.about}</p>
                </div>
              )}
              
              {selectedOrator.contributions && (
                <div className="modal-section">
                  <h3>Key Contributions</h3>
                  <ul>
                    {selectedOrator.contributions.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}
              
              {selectedOrator.achievements && (
                <div className="modal-section">
                  <h3>Achievements</h3>
                  <ul>
                    {selectedOrator.achievements.map((item, index) => <li key={index}>{item}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Orators;
