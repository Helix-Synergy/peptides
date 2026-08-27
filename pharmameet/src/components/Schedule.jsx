import React from 'react';
import './Schedule.css';

const generateSchedule = () => {
  return [
    { time: '9:00AM - 9:30AM', title: 'Registration', type: 'presentation' },
    { time: '9:30AM - 10:00AM', title: 'Introduction', type: 'presentation' },
    { time: '10:00AM - 10:20AM', title: 'Keynote Speaker 1', type: 'presentation' },
    { time: '10:20AM - 10:40AM', title: 'Keynote Speaker 2', type: 'presentation' },
    { time: '10:40AM - 11:00AM', title: 'Keynote Speaker 3', type: 'presentation' },
    { time: '11:00AM - 11:20AM', title: 'Keynote Speaker 4', type: 'presentation' },
    { time: '11:20AM - 11:40AM', title: 'Oral Presenter 1', type: 'presentation' },
    { time: '11:40AM - 12:00PM', title: 'Oral Presenter 2', type: 'presentation' },
    { time: '12:00PM - 12:20PM', title: 'Oral Presenter 3', type: 'presentation' },
    { time: '12:20PM - 12:40PM', title: 'Oral Presenter 4', type: 'presentation' },
    { time: '12:40PM - 1:00PM', title: 'Oral Presenter 5', type: 'presentation' },
    { time: '1:00PM - 2:00PM', title: 'Lunch Break', type: 'food' },
    { time: '2:00PM - 2:20PM', title: 'Keynote Speaker 5', type: 'presentation' },
    { time: '2:20PM - 2:40PM', title: 'Keynote Speaker 6', type: 'presentation' },
    { time: '2:40PM - 3:00PM', title: 'Keynote Speaker 7', type: 'presentation' },
    { time: '3:00PM - 3:20PM', title: 'Keynote Speaker 8', type: 'presentation' },
    { time: '3:20PM - 3:40PM', title: 'Oral Presenter 6', type: 'presentation' },
    { time: '3:40PM - 4:00PM', title: 'Oral Presenter 7', type: 'presentation' },
    { time: '4:00PM - 4:20PM', title: 'Oral Presenter 8', type: 'presentation' },
    { time: '4:20PM - 4:40PM', title: 'Oral Presenter 9', type: 'presentation' },
    { time: '4:40PM - 5:00PM', title: 'Oral Presenter 10', type: 'presentation' }
  ];
};

const Schedule = () => {
  const scheduleList = generateSchedule();

  return (
    <div className="schedule-page-wrapper">
      <div className="container schedule-container">
        <div className="schedule-list">
          {scheduleList.map((item, index) => (
            <div className="schedule-card" key={index}>
              
              {/* Icon Column */}
              <div className="schedule-icon-col">
                <div className={`schedule-icon-circle ${item.type}`}>
                  {item.type === 'food' ? (
                    <svg viewBox="0 0 24 24" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                      <path d="M7 2v20"></path>
                      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content Column */}
              <div className="schedule-content-col">
                <div className="schedule-meta">
                  <span className="schedule-time">
                    <span className="meta-icon">⏱</span> {item.time}
                  </span>
                </div>
                
                <h3 className="schedule-title">{item.title}</h3>
                {item.subtitle && <p className="schedule-subtitle">{item.subtitle}</p>}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
