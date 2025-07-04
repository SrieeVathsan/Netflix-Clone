import React from 'react';
import './Trending.css';

const trendingShows = [
  { id: 1, title: 'Avengers: Endgame', img: '/endgame.jpg' },
  { id: 2, title: 'Avengers: Infinity War', img: '/infinitywar.jpg' },
  { id: 3, title: 'Spider-Man: No Way Home', img: '/spiderman.jpg' },
  { id: 4, title: 'Captain America: The Winter Soldier', img: '/captainamerica.jpg' },
  { id: 5, title: 'Iron Man', img: '/ironman.jpg' },
];

function Trending() {
  return (
    <section className="trending">
      <h2 className="trending-title">Trending Now</h2>
      <div className="trending-list">
        {trendingShows.map(show => (
          <div className="trending-item" key={show.id}>
            <img src={show.img} alt={show.title} />
            <span className="trending-number">{show.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;