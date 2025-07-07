import React, { useEffect, useState, useRef } from 'react';
import './Trending.css';

function Trending() {
  const [shows, setShows] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch('/Trending.json')
      .then(res => res.json())
      .then(data => setShows(data))
      .catch(err => console.error('Failed to fetch trending data:', err));
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="trending">
      <h2 className="trending-title">Trending Now</h2>
      <div className="scroll-buttons">
        <button onClick={() => scroll('left')} className="scroll-btn">◀</button>
        <div className="trending-list" ref={scrollRef}>
          {shows.map(show => (
            <div className="trending-item" key={show.id}>
              <img src={show.img} alt={show.title} />
              <span className="trending-number">{show.id}</span>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="scroll-btn">▶</button>
      </div>
    </section>
  );
}

export default Trending;