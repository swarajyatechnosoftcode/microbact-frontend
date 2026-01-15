import logo from "../assets/images/microbact_logo.jfif"; // adjust path if needed
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Microbact Logo" className="navbar-logo" />
        <h2>Microbact Bio Cultures</h2>
      </div>

      <ul className="navbar-menu">
        <li className="active">Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
