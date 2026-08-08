import React from 'react';
import { Link } from 'react-router-dom';
import './Tracks.css';

const Tracks = () => {
  const tracksData = [
    {
      title: 'Nano Technology in Agriculture',
      desc: 'This track explores the application of nanotechnology in agriculture, including nano-fertilizers, nano-pesticides, and precision farming. Participants will learn how nanomaterials enhance crop yield, improve nutrient delivery, and offer sustainable solutions for global food security.',
      imgSrc: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Advanced Nanomaterials',
      desc: 'Focuses on the synthesis, characterization, and applications of advanced nanomaterials. Participants will discover breakthroughs in nanoparticle engineering, nanocomposites, and surface modifications that are revolutionizing industries from healthcare to energy storage.',
      imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Intelligent & Responsive Materials',
      desc: 'Explores materials capable of responding to environmental stimuli, such as temperature, light, or stress. This track covers design, characterization, and applications in aerospace, healthcare, and robotics. Participants learn to harness smart materials to develop adaptive, high-performance systems, enabling innovations in sensors, actuators, and next-generation industrial products.',
      imgSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Healthcare & Biomedicine',
      desc: 'This track highlights nanotechnology and advanced materials applications in medical devices, drug delivery, diagnostics, and tissue engineering. Participants gain insights into developing safer, more effective biomedical solutions, integrating smart materials for enhanced patient outcomes, and bridging the gap between materials science innovation and practical healthcare applications.',
      imgSrc: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Nano-Sensors',
      desc: 'Covers design, fabrication, and deployment of nanoscale sensors for industrial, healthcare, and environmental applications. Participants explore sensitivity enhancement, real-time monitoring, and AI integration for intelligent detection. Nano-sensors enable precise measurement, early warning systems, and adaptive feedback mechanisms in advanced manufacturing and high-tech industrial processes.',
      imgSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Advanced Composites',
      desc: 'Focuses on high-performance composite materials combining strength, durability, and lightweight properties. This track covers design, fabrication, testing, and applications in aerospace, automotive, and defense. Participants learn to engineer composites that improve structural efficiency, sustainability, and performance, while enabling innovation in next-generation manufacturing and industrial solutions.',
      imgSrc: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Nano-Photonics',
      desc: 'Explores light-matter interactions at the nanoscale, including photonic devices, sensors, and communication technologies. Participants gain knowledge of fabrication techniques, optical characterization, and practical applications in imaging, telecommunications, and energy systems. Nano-photonics drives innovation in advanced manufacturing, precision instrumentation, and next-generation smart technologies.',
      imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Nanoelectronics',
      desc: 'Focuses on miniaturized electronic components and circuits leveraging nanoscale materials. This track covers semiconductors, transistors, and memory devices, enabling faster, more efficient electronics. Participants explore innovations that enhance device performance, reduce energy consumption, and support the development of intelligent industrial systems and consumer electronics.',
      imgSrc: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Graphene Tech',
      desc: 'This track explores graphene synthesis, properties, and applications in electronics, energy, and advanced manufacturing. Participants learn how graphene enhances conductivity, flexibility, and material strength, enabling innovative solutions in nanodevices, sensors, composites, and next-generation industrial technologies with transformative potential across multiple sectors.',
      imgSrc: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Smart Sensors',
      desc: 'Covers the development of sensors with adaptive, responsive, and real-time monitoring capabilities. Topics include IoT integration, energy harvesting, and industrial applications. Participants gain expertise in deploying intelligent sensing solutions that enhance process control, predictive maintenance, and automation across advanced manufacturing and smart technology ecosystems.',
      imgSrc: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Quantum Materials',
      desc: 'Explores materials exhibiting quantum phenomena for advanced computing, energy, and sensing applications. Participants learn about superconductors, topological materials, and quantum devices. This track emphasizes harnessing unique quantum properties to develop next-generation technologies, improve performance, and create innovative solutions in high-tech industries and advanced manufacturing processes.',
      imgSrc: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Nano Chemistry',
      desc: 'Focuses on the synthesis, reactivity, and properties of chemical structures at the nanoscale. Participants explore novel catalytic processes, molecular self-assembly, and surface chemistry techniques, learning how nano-chemistry provides foundational tools for creating new materials with targeted functionalities.',
      imgSrc: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Bio-Nanotechnology',
      desc: 'Delves into the intersection of biological systems and nanotechnology. Topics include bio-inspired nanomaterials, nanomedicine, and molecular engineering. Participants will explore how biological principles are guiding the development of novel nanoscale devices, diagnostics, and targeted therapies for global health challenges.',
      imgSrc: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: '2D Materials',
      desc: 'Examines the fundamental properties and applications of two-dimensional materials beyond graphene, such as transition metal dichalcogenides (TMDs) and hexagonal boron nitride. Participants will discover advancements in flexible electronics, optoelectronics, and next-generation energy storage leveraging ultra-thin material structures.',
      imgSrc: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Thermoelectrics',
      desc: 'Focuses on the conversion of waste heat into electricity using advanced thermoelectric materials. Participants will explore recent breakthroughs in material efficiency, scalable manufacturing techniques, and real-world applications in automotive, industrial, and consumer energy harvesting systems.',
      imgSrc: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Laser & Plasma- Processing',
      desc: 'Covers cutting-edge laser and plasma techniques for material processing and surface engineering. Participants will gain insights into micro-machining, thin-film deposition, and surface functionalization, exploring how these advanced manufacturing processes improve material durability, optical properties, and industrial performance.',
      imgSrc: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=600&auto=format&fit=crop'
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
