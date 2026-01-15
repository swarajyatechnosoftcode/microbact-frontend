import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Microbact Bio Cultures Pvt Ltd</h3>
          <p>
            Shri Chatrapati Shambhuraje Chowk, Nere,<br />
            Tal: Mulshi, Pune – 411 033
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Manufacturing Process</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📞 +91 9518735229</p>
          <p>📞 +91 9665755442</p>
          <p>📞 +91 9960059919</p>
          <p>✉️ info@microbactbiocultures.com</p>
          <p>✉️ microbact.biocultures@gmail.com</p>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>f</span>
            <span>in</span>
            <span>▶</span>
            <span>📷</span>
          </div>
          <p className="copyright">
            © 2026 Microbact Bio Cultures Pvt Ltd<br />
            All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
