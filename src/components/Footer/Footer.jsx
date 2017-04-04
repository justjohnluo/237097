import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="row">
        <span className="item">
          <span className="mail-icon"></span>
          <strong>Email us:</strong> <a href="mailto:contactus@hugs.com">contactus@hugs.com</a>
        </span>
        <span className="item text-center">
          <span className="phone-icon"></span>
          <strong>Call us:</strong> <a href="tel:+89 8249 8429">+89 8249 8429</a>
        </span>
        <span className="item text-right">
          <span className="fb-icon"></span>
          <span className="twitter-icon"></span>
        </span>
      </div>
      <div className="row centered">
        <span className="copyright">Copyright, 2017. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
