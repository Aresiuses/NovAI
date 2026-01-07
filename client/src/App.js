import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar
import About from './components/About';   // Import the About page
import Home from './components/Home';
import Team from './components/Team';
import Services from './components/Services';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Services/>
        <Team />
        <VideoSection/>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;