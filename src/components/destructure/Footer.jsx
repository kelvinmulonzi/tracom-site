import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Tracom Academy is committed to fostering growth in the tech industry
            through education, innovation, and hands-on experience.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li key="home"><a href="#">Home</a></li>
            <li key="services"><a href="#">Services</a></li>
            <li key="about"><a href="#">About</a></li>
            <li key="contact"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: tracom@gmail.com</p>
          <p>Phone: +254712345678</p>
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Sign up for the latest updates and tech news:</p>
          <form>
            <input type="email" placeholder="Your Email" className="email-input" />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tracom Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
