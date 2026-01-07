import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>About NovAI</h1>
        <p>A dynamic IT company specializing in AI tech development and research.</p>
      </div>

      <div className="about-content-wrapper">
        <div className="info-cards-container">
          <div className="info-card mission-card">
            <div className="icon-box blue-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower businesses through innovative AI solutions.</p>
            </div>
          <div className="info-card vision-card">
            <div className="icon-box purple-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>Improving AI's LLM to further help humanity.</p>
            </div>
          <div className="info-card team-card">
            <div className="icon-box green-icon">👥</div>
              <h3>Our Team</h3>
               <p>A diverse group of talented developers and designers.</p>
            </div>
          </div>

        {/* Bottom Section: Company Background (Tightly Connected) */}
        <div className="company-background">
          <h2>Company Background</h2>
          <div className="background-grid">
            <div className="bg-col">
              <p>Founded in 2025, NovAI emerged from the collaborative vision of recent graduates who recognized the need for fresh approaches in the IT industry.</p>
              <p>Our founders combined academic excellence with research to bridge the gap between AI and practical business.</p>
            </div>
            <div className="bg-col">
              <p>What sets us apart is our unique blend of energy and technical expertise. We maintain a research-first approach in everything we do.</p>
              <p>From NLP to IoT solutions, we help businesses navigate the digital landscape with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;