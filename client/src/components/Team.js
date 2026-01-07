import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Muhammad Adel Rahman bin Mohammad',
      position: 'CEO & Co-Founder',
      image: '/Adel.JPG',
      bio: 'Visionary leader with expertise in software architecture and AI strategy.',
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Matteus Betha anak Maoh',
      position: 'Lead Designer & Co-Founder',
      image: '/Matteus.JPEG',
      bio: 'Creative designer focused on user experience and interface design excellence.',
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Meet Our Team</h2>
          <p>Talented individuals united by a passion for technology and innovation. Get to know the people behind NovAI.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="image-container">
                <img src={member.image} alt={member.name} className="member-photo" />
              </div>
              <div className="member-details">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-icons">
                  <a href={member.social.linkedin} className="social-btn linkedin" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.social.github} className="social-btn github" aria-label="GitHub">
                    <Github size={20} />
                  </a>
                  <a href={member.social.twitter} className="social-btn twitter" aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;