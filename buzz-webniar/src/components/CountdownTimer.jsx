import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const renderDigitBox = (digit, index) => (
    <div key={index} className="digit-box">
      {digit}
    </div>
  );

  const renderTimeUnit = (value, label) => {
    const formattedValue = formatTime(value).toString();
    const digits = formattedValue.split('');
    
    return (
      <div className="countdown-group">
        <div className="countdown-digits-container">
          {digits.map((digit, i) => renderDigitBox(digit, i))}
        </div>
        <span className="countdown-label">{label}</span>
      </div>
    );
  };

  return (
    <div className="countdown-wrapper">
      {renderTimeUnit(timeLeft.days || 0, 'DAYS')}
      <div className="countdown-separator">:</div>
      {renderTimeUnit(timeLeft.hours || 0, 'HOURS')}
      <div className="countdown-separator">:</div>
      {renderTimeUnit(timeLeft.minutes || 0, 'MINUTES')}
      <div className="countdown-separator">:</div>
      {renderTimeUnit(timeLeft.seconds || 0, 'SECONDS')}
    </div>
  );
};

export default CountdownTimer;
