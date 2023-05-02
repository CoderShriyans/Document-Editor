import React from 'react';
import './css/Footer.css';
import "./css/Dark.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="color-palette">
        <div className="color" style={{ backgroundColor: '#d5f367' }}></div>
        <div className="color" style={{ backgroundColor: '#9DC08B' }}></div>
        <div className="color" style={{ backgroundColor: '#609966' }}></div>
        <div className="color" style={{ backgroundColor: '#40513B' }}></div>
      </div>
      <p className="footer-text">© 2023 Document-Editor. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
