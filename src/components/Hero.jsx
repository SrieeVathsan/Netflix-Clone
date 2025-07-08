import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Starts at ₹149. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="hero-form">
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        autoComplete="email" />
        <button>Get Started</button>
      </div>
    </div>
    </section>
  );
}

export default Hero;