import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">More reasons to join</h2>
      <div className="feature-box">
        <h3>Enjoy on your TV</h3>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      <div className="feature-box">
        <h3>Download your shows to watch offline</h3>
        <p>Save your favourites easily and always have something to watch.</p>
      </div>
      <div className="feature-box">
        <h3>Watch everywhere</h3>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
      </div>
      <div className="feature-box">
        <h3>Create profiles for kids</h3>
        <p>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
      </div>
    </section>
  );
}

export default Features;