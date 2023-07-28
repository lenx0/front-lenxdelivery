import "./styles.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-navbar">
      <img src={logo} alt="Logo do site" />
      <Link to="/" className="logo-text">
        Lenx Delivery
      </Link>
    </nav>
  );
}
