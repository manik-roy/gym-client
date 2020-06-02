import React from 'react';
import './Footer.scss';


const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="branding footer-box">
          <h3>POWER <span className='secondary-text'>X</span></h3>
        </div>
        <div className="help-center footer-box">
          <p><strong>Need Help?</strong></p>
          <ul>
            <li>Help Center</li>
            <li>Email Support</li>
            <li>Live Chat</li>
            <li>Gift Certificates</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>
        <div className="resource footer-box">
          <p><strong>Digital Resources</strong></p>
          <ul>
            <li>Articles</li>
            <li>E-Book</li>
          </ul>
        </div>
        <div className="social-media footer-box">
          <p><strong>Contact With Us</strong></p>
          <ul>
            <li>Articles</li>
            <li>E-Book</li>
          </ul>
        </div>
        <div className="newsletter footer-box">
          <p>
            Get exclusive news, features, and updates from the Shredder Weight Loss Academy.
          </p>
        </div>
      </div>
      <div className="copyright">
          <p>&copy; 2020 Shrikanta Mazumder. All Right Reserved</p>
        </div>
    </footer>
  );
};

export default Footer;