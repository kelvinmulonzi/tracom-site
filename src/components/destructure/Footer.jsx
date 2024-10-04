

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>This is Tracom Academy.</p>
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
          
          <ul>
            <li key="facebook"><a href="https://www.facebook.com/">Facebook</a></li>
            <li key="twitter"><a href="https://twitter.com">Twitter</a></li>
            <li key="instagram"><a href="#">Instagram</a></li>
            <li key="linkedin"><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
