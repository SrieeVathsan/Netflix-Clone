import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Netflix" className="logo" />
      <div className="actions">
        <select className="lang-select">
          <option>English</option>
          <option>தமிழ்</option>
          <option>हिन्दी</option>
        </select>
        <button className="signin-btn">Sign In</button>
      </div>
    </header>
  );
}

export default Header;