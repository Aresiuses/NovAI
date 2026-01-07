import React from 'react';
import { 
  BrainCircuit , 
  Eye , 
  FileCode , 
  Database, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react'; // Using Lucide React icons
import './Services.css';

const Services = () => {
  const services = [
    { 
      title: "NLP Development", 
      desc: "Advanced language models for human-like interaction.", 
      icon: <BrainCircuit size={32} />, 
      color: "blue" 
    },
    { 
      title: "Computer Vision", 
      desc: "Visual data processing for automation and security.", 
      icon: <Eye size={32} />, 
      color: "purple" 
    },
    { 
      title: "MLOps", 
      desc: "Scalable machine learning infrastructure and deployment.", 
      icon: <FileCode size={32} />, 
      color: "cyan" 
    },
    { 
      title: "Data Analytics", 
      desc: "Transforming raw data into actionable AI insights.", 
      icon: <Database size={32} />, 
      color: "green" 
    },
    { 
      title: "AI Consulting", 
      desc: "Strategic roadmaps for modern AI integration.", 
      icon: <ShieldCheck size={32} />, 
      color: "orange" 
    },
    { 
      title: "Neural Research", 
      desc: "Deep learning research for complex logic systems.", 
      icon: <Cpu size={32} />, 
      color: "pink" 
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Innovative AI solutions tailored for the next generation of tech.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((s, index) => (
            <div key={index} className={`service-card ${s.color}`}>
              <div className="service-icon-wrapper">
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;