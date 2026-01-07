import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home-hero">
      <div className="hero-content">
        <h1>Aritificial Intelligence Integration for Modern Business</h1>
        <p>
          We are a team of passionate computer science graduates dedicated to 
          intregrate your business with AI
        </p>
        <div className="hero-buttons">
          <button  className="btn-primary" onClick={() => scrollToSection('services')}>Explore Our Services →</button>
          <button className="btn-secondary" onClick={() => scrollToSection('contact')}>Get in Touch</button>
        </div>
      </div>
      <div className="hero-image">
        {/* Replace with your actual image in public/images/ */}
        <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjcxNjYwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Our Team Working" />
      </div>
    </section>
  );
};

export default Home;