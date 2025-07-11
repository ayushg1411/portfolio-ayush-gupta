import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">Hello World - Updated! 🚀</p>
        <p className="home-description">
          Welcome to my React application! This is my personal portfolio where I showcase my work, 
          experience, and skills. Feel free to explore and get in touch!
        </p>
        <div className="home-features">
          <div className="feature-card">
            <h3>🚀 Modern Tech</h3>
            <p>Built with React and modern web technologies</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive</h3>
            <p>Works perfectly on all devices and screen sizes</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast</h3>
            <p>Optimized for performance and user experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 