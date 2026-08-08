import React from 'react';
import './ImportantDates.css';

const ImportantDates = () => {
  const dates = [
    { event: "Abstract Submission Opens", date: "February 15, 2026", passed: true },
    { event: "Early Bird Registration", date: "May 31, 2026", passed: true },
    { event: "Abstract Submission Deadline", date: "July 20, 2026", passed: true },
    { event: "Acceptance Notification", date: "August 1, 2026", passed: false },
    { event: "Final Registration Deadline", date: "August 20, 2026", passed: false },
    { event: "Virtual Conference", date: "August 26, 2026", passed: false }
  ];

  return (
    <section id="dates" className="section dates-section section-bg">
      <div className="container">
        <h2 className="section-title text-center">Important Dates</h2>
        
        <div className="timeline">
          {dates.map((item, index) => (
            <div className={`timeline-item ${item.passed ? 'passed' : ''}`} key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h3 className="timeline-event">{item.event}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
