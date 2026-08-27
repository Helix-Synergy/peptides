import React from 'react';
import { Link } from 'react-router-dom';
import './Tracks.css';

const Tracks = () => {
  const tracksData = [
    {
      title: 'Pharmaceutics',
      desc: 'Focuses on the process of turning a new chemical entity or old drugs into a medication to be used safely and effectively by patients.',
      imgSrc: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80'
    },
    {
      title: 'Pharmacology',
      desc: 'Explores drug action on biological systems, covering how drugs affect the body (pharmacodynamics) and how the body handles drugs (pharmacokinetics).',
      imgSrc: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80'
    },
    {
      title: 'Pharmaceutical Chemistry',
      desc: 'Focuses on the design, synthesis, and development of pharmaceutical drugs, combining organic chemistry, pharmacology, and various other biological sciences.',
      imgSrc: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80'
    },
    {
      title: 'Medicinal Chemistry',
      desc: 'Deals with the discovery, design, identification, and preparation of biologically active compounds, focusing on metabolism and drug interactions.',
      imgSrc: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80'
    },
    {
      title: 'Pharmacognosy',
      desc: 'Study of medicinal drugs derived from plants or other natural sources, bridging traditional medicine with modern pharmaceutical science.',
      imgSrc: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80'
    },
    {
      title: 'Drug Discovery & Development',
      desc: 'Covers the entire pipeline from identifying new molecular targets to preclinical studies, clinical trials, and final drug approval.',
      imgSrc: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80'
    },
    {
      title: 'Drug Delivery',
      desc: 'Explore advanced methods and systems for safely and effectively transporting pharmaceutical compounds in the body to achieve desired therapeutic effects.',
      imgSrc: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&q=80'
    },
    {
      title: 'Pharmaceutical Biotechnology',
      desc: 'Focuses on the application of biotechnology to produce biopharmaceuticals, including vaccines, antibodies, and therapeutic proteins.',
      imgSrc: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&q=80'
    },
    {
      title: 'Clinical Pharmacy',
      desc: 'Emphasizes the clinical practice of pharmacy, where pharmacists provide patient care that optimizes medication therapy and promotes health.',
      imgSrc: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80'
    },
    {
      title: 'Pharmaceutical Analysis',
      desc: 'Discusses analytical techniques used in the pharmaceutical industry for quality control, stability testing, and validation of drugs.',
      imgSrc: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80'
    },
    {
      title: 'Pharmacovigilance',
      desc: 'Focuses on the science and activities relating to the detection, assessment, understanding, and prevention of adverse effects or any other drug-related problems.',
      imgSrc: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80'
    },
    {
      title: 'Nanopharmaceutics',
      desc: 'Examines the application of nanotechnology in pharmaceuticals for targeted drug delivery and improved bioavailability.',
      imgSrc: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
    },
    {
      title: 'Pharmacokinetics',
      desc: 'Detailed study of drug absorption, distribution, metabolism, and excretion (ADME) within the human body.',
      imgSrc: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80'
    },
    {
      title: 'Toxicology',
      desc: 'Study of the adverse effects of chemical, physical, or biological agents on living organisms and the ecosystem.',
      imgSrc: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
    },
    {
      title: 'Regulatory Affairs',
      desc: 'Covers the legal and regulatory frameworks governing the pharmaceutical industry, ensuring safety, efficacy, and quality of drugs.',
      imgSrc: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80'
    }
  ];

  return (
    <section className="tracks-page-section">
      <div className="container tracks-container">
        
        <div className="tracks-list">
          {tracksData.map((track, index) => (
            <div className="track-card" key={index}>
              <div className="track-img-col">
                <div className="track-img" style={{ backgroundImage: `url(${track.imgSrc})` }}></div>
              </div>
              <div className="track-content-col">
                <h3 className="track-title">
                  <span className="track-icon">✦</span> {track.title}
                </h3>
                <p className="track-desc">{track.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Submit Abstract Button */}
        <Link to="/abstract_submission" className="floating-submit-btn">
          Submit Abstract
        </Link>
      </div>
    </section>
  );
};

export default Tracks;
