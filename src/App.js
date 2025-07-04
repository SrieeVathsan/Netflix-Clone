import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trending />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;