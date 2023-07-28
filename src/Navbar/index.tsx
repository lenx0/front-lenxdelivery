import "./styles.css";
import logo from "./logo.png";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <img src={logo} alt="Logo do site" />
      <a href="home" className="logo-text">
        Lenx Delivery
      </a>
    </nav>
  );
}
