import React, { useState } from 'react';
import './HomeSchedule.css';

const scheduleData = [
  { time: '9:00AM - 9:30AM', title: 'Registration', icon: '📝' },
  { time: '9:30AM - 10:00AM', title: 'Introduction', icon: '👋' },
  { time: '10:00AM - 10:20AM', title: 'Keynote Speaker 1', icon: '🎤' },
  { time: '10:20AM - 10:40AM', title: 'Keynote Speaker 2', icon: '🎤' },
  { time: '10:40AM - 11:00AM', title: 'Keynote Speaker 3', icon: '🎤' },
  { time: '11:00AM - 11:20AM', title: 'Keynote Speaker 4', icon: '🎤' },
  { time: '11:20AM - 11:40AM', title: 'Oral Presenter 1', icon: '🗣️' },
  { time: '11:40AM - 12:00PM', title: 'Oral Presenter 2', icon: '🗣️' },
  { time: '12:00PM - 12:20PM', title: 'Oral Presenter 3', icon: '🗣️' },
  { time: '12:20PM - 12:40PM', title: 'Oral Presenter 4', icon: '🗣️' },
  { time: '12:40PM - 1:00PM', title: 'Oral Presenter 5', icon: '🗣️' },
  { time: '1:00PM - 2:00PM', title: 'Lunch Break', icon: '🍽️' },
  { time: '2:00PM - 2:20PM', title: 'Keynote Speaker 5', icon: '🎤' },
  { time: '2:20PM - 2:40PM', title: 'Keynote Speaker 6', icon: '🎤' },
  { time: '2:40PM - 3:00PM', title: 'Keynote Speaker 7', icon: '🎤' },
  { time: '3:00PM - 3:20PM', title: 'Keynote Speaker 8', icon: '🎤' },
  { time: '3:20PM - 3:40PM', title: 'Oral Presenter 6', icon: '🗣️' },
  { time: '3:40PM - 4:00PM', title: 'Oral Presenter 7', icon: '🗣️' },
  { time: '4:00PM - 4:20PM', title: 'Oral Presenter 8', icon: '🗣️' },
  { time: '4:20PM - 4:40PM', title: 'Oral Presenter 9', icon: '🗣️' },
  { time: '4:40PM - 5:00PM', title: 'Oral Presenter 10', icon: '🗣️' }
];

const HomeSchedule = () => {
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <section className="home-schedule-section">
      <div className="container">
        <h2 className="section-title">Event Schedule</h2>
        
        <div className="schedule-tabs-container">
          <div className="schedule-tabs">
            <div className="tab-btn active" style={{ cursor: 'default', pointerEvents: 'none' }}>
              <span className="tab-date" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>26<sup>th</sup> Aug 2026</span>
            </div>
          </div>
        </div>

        <div className="schedule-content">
          <div className="schedule-list">
            {scheduleData.map((item, index) => (
              <div className="schedule-card" key={index}>
                <div className="schedule-icon">
                  <div className="icon-circle">
                    <span role="img" aria-label="icon" style={{fontSize: '2rem'}}>{item.icon}</span>
                  </div>
                </div>
                <div className="schedule-details">
                  <div className="schedule-meta">
                    <span className="schedule-time">⏱️ {item.time}</span>
                  </div>
                  <h3 className="schedule-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSchedule;
