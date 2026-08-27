import React from 'react';
import { Link } from 'react-router-dom';
import './Tracks.css';

const Tracks = () => {
  const tracksData = [
    {
      title: 'Global Business',
      desc: 'Explore the multifaceted world of global business, focusing on corporate strategy, cross-border operations, and navigating diverse regulatory environments to achieve multinational success.',
      imgSrc: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'International Economics',
      desc: 'Focuses on the macroeconomic forces driving the global market. Delve into balance of payments, international monetary systems, and the economic implications of globalization.',
      imgSrc: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Foreign Trade',
      desc: 'Analyze the exchange of capital, goods, and services across international borders or territories, and understand how it represents a significant share of GDP in today\'s interconnected world.',
      imgSrc: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'International Finance',
      desc: 'Examine the integration of global financial systems. This track covers cross-border capital flows, international banking regulations, and the dynamics of global equity and debt markets.',
      imgSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Global Investment',
      desc: 'Understand the trends, determinants, and impacts of foreign direct investment. Participants will discuss investment promotion strategies, risk assessment, and cross-border M&A.',
      imgSrc: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Trade Policy',
      desc: 'Explore the shifting landscape of international trade agreements, tariffs, and protectionism. Analyze how macro-level policy changes impact cross-border commerce and global stability.',
      imgSrc: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Global Supply Chain',
      desc: 'Discover resilient strategies for modern global supply chains. This track covers logistics optimization, mitigating disruptions, and leveraging technology for end-to-end visibility.',
      imgSrc: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'International Marketing',
      desc: 'Learn how to adapt marketing campaigns for diverse cultural contexts. This track covers international market research, global brand positioning, and localized communication strategies.',
      imgSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Emerging Markets',
      desc: 'Analyze the opportunities and risks associated with investing in rapidly developing economies. Learn strategies for market entry, navigating regulations, and adapting to local behavior.',
      imgSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Sustainable Economics',
      desc: 'Focuses on integrating ESG (Environmental, Social, and Governance) principles into global operations. Discuss sustainable supply chains, green finance, and corporate responsibility.',
      imgSrc: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Entrepreneurship & Innovation',
      desc: 'Examine the role of startups and innovation in driving the global economy. Discuss global venture capital, tech ecosystems, and scaling disruptive businesses internationally.',
      imgSrc: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Digital Trade & E-Commerce',
      desc: 'Explore the digital transformation of global trade. This track covers cross-border e-commerce, digital taxation, data privacy regulations, and the future of digital currencies.',
      imgSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Economic Policy & Governance',
      desc: 'Analyze theories of economic development and their practical application. Discuss the role of international aid, structural reforms, and institutional quality in promoting progress.',
      imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Geopolitics & Trade',
      desc: 'Understand how international relations and political events shape global trade routes, economic alliances, market stability, and the strategic positioning of multinational corporations.',
      imgSrc: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Global Trade Trends',
      desc: 'Look into the future of international commerce, tracking shifts in consumer demand, technological advancements, and new global trade paradigms that will define the next decade.',
      imgSrc: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=600&auto=format&fit=crop'
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
