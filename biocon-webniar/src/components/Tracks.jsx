import React from 'react';
import { Link } from 'react-router-dom';
import './Tracks.css';

const Tracks = () => {
  const tracksData = [
    {
      title: 'Molecular Biotechnology',
      desc: 'Explore the fundamental principles of molecular biology applied to biotechnology. Focus on DNA/RNA manipulation, molecular diagnostics, and the study of cellular mechanisms at the molecular level.',
      imgSrc: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Genetic Engineering',
      desc: 'Delve into the direct manipulation of an organism\'s genes using biotechnology. Discuss recombinant DNA technology, genetic modifications, and their impact on medicine and agriculture.',
      imgSrc: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Genomics & Gene Editing',
      desc: 'Focus on the latest advancements in CRISPR and other gene-editing technologies. Discuss ethical implications, regulatory landscapes, and the future of treating genetic disorders.',
      imgSrc: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Pharmaceutical Biotechnology',
      desc: 'Analyze the development of biological drugs, monoclonal antibodies, and new therapeutic agents. Evaluate the pipeline from discovery and development to clinical trials and market approval.',
      imgSrc: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Agricultural Biotechnology',
      desc: 'Discover resilient strategies for modern agriculture. This track covers genetically modified crops, biofertilizers, pest resistance, and sustainable farming solutions for global food security.',
      imgSrc: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Medical Biotechnology',
      desc: 'Examine the use of living cells and cell materials to research and produce pharmaceutical and diagnostic products that help treat and prevent human diseases.',
      imgSrc: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Industrial Biotechnology',
      desc: 'Explore the use of enzymes and microorganisms to produce bio-based products. Learn about bioplastics, fermentation processes, and green chemistry manufacturing.',
      imgSrc: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Environmental Biotechnology',
      desc: 'Focus on biological processes to solve environmental issues. Discuss bioremediation, waste treatment, pollution control, and the development of sustainable biofuels.',
      imgSrc: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Bioinformatics & AI',
      desc: 'Understand the mechanics of analyzing massive biological datasets. Learn about algorithms, machine learning in drug discovery, and the power of big data in modern genomics.',
      imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Synthetic Biology',
      desc: 'Examine the design and construction of new biological parts, devices, and systems. Discuss applications in renewable energy, synthetic pathways, and the creation of synthetic life forms.',
      imgSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Stem Cell & Regenerative Medicine',
      desc: 'Explore the therapeutic potential of stem cells. This track covers tissue engineering, organ regeneration, and the clinical realities and challenges of cellular therapies.',
      imgSrc: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Vaccine & Immunotechnology',
      desc: 'Analyze the rapid development of novel vaccines and immunotherapies. Discuss mRNA technology, immune system modulation, and new strategies in the fight against infectious diseases.',
      imgSrc: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Nanobiotechnology',
      desc: 'Learn how nanotechnology intersects with biology. This track covers nanoscale drug delivery systems, advanced biosensors, molecular imaging techniques, and personalized nanomedicine.',
      imgSrc: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Food Biotechnology',
      desc: 'Understand the application of biological techniques to food crops and animals. Discuss methods for improving food quality, shelf-life, enhanced nutrition, and overall food safety.',
      imgSrc: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Biotechnology Innovation',
      desc: 'Look into the future of biotech, tracking rapid technological advancements, startup ecosystems, intellectual property, and new global paradigms defining the next decade of science.',
      imgSrc: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop'
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
