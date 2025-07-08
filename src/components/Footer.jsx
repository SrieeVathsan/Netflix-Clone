import React from 'react';
import './Footer.css';

const footerLinks = [
  "FAQ", "Help Centre", "Account", "Media Centre",
  "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
  "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
  "Speed Test", "Legal Notices", "Only on Netflix"
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-signup">
        <p className="footer-heading">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="footer-form">
          <input
            type="email"
            id="footer-email"
            name="email"
            placeholder="Email address"
            autoComplete="email"
          />
          <button>Get Started</button>
        </div>
      </div>

      <div className="footer-links">
        <p className="footer-contact">Questions? Call 000-800-919-1743</p>
        {footerLinks.map((link, index) => (
          <a key={index} href="#">{link}</a>
        ))}
      </div>


      <p className="footer-end">Netflix India</p>
    </footer>
  );
}

export default Footer;