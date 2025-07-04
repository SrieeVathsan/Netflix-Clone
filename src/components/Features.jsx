import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">More reasons to join</h2>
      <div className="features-grid">
        <div className="feature-box">
          <h2>Enjoy on your TV</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="feature-box">
          <h2>Download your shows to watch offline</h2>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
        <div className="feature-box">
          <h2>Watch everywhere</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
        </div>
        <div className="feature-box">
          <h2>Create profiles for kids</h2>
        <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;