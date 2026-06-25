import React from 'react';
import './LoadingScreen.css';
import logo from '../../assets/logo.webp'; // Assuming path based on search

const LoadingScreen = () => {
    return (
        <div className="loading-screen-container">
            <div className="loading-content">
                <div className="loading-ring"></div>
                <img src={logo} alt="Peptides Logo" className="loading-logo" />
            </div>
        </div>
    );
};

export default LoadingScreen;
