import React, { useState } from 'react';
import './VideoSection.css';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video" className="video-section">
      <div className="video-container">
        <div className="video-text-center">
          <h2 className="video-title">See NovAI in Action</h2>
          <p className="video-description">
            Watch our company introduction video to learn more about our journey 
            as CS graduates and the AI solutions we build.
          </p>
        </div>

        <div className="video-wrapper">
          <div className="video-player-box">
            {!isPlaying ? (
              // Video Thumbnail View
              <div className="thumbnail-container">
                <img 
                  src="https://images.unsplash.com/photo-1616386261012-8a328c89d5b6?q=80&w=1080"
                  alt="Company video thumbnail"
                  className="thumbnail-img"
                />
                <div className="video-overlay">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="play-button"
                    aria-label="Play video"
                  >
                    <span className="play-icon">▶</span>
                  </button>
                </div>
              </div>
            ) : (
              <iframe
                className="iframe-video"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Company Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
      <p className="video-description">
            Watch our company introduction video to learn more about our journey 
            as CS graduates and the AI solutions we build.
          </p>
    </section>
  );
};

export default VideoSection;
