import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Import the Navbar
import About from './components/About';   // Import the About page
import Home from './components/Home';
import Team from './components/Team';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [serverStatus, setServerStatus] = useState("Connecting...");

  useEffect(() => {
    // Replace with your Vercel Server URL after deployment
    fetch('http://localhost:5000/api/status') 
      .then(res => res.json())
      .then(data => setServerStatus(data.message))
      .catch(err => setServerStatus("Server Offline"));
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* Small status bar at the top to prove Node.js connection */}
      <div style={{background: '#f0fdf4', textAlign: 'center', fontSize: '12px'}}>
        System Status: {serverStatus}
      </div>
      <Home />
      <About />
      <Services />
      <VideoSection />
      <Team />
      <Footer />
    </div>
  );
}
export default App
