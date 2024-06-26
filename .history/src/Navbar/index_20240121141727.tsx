import { Link } from "react-router-dom";
import logo from "../Components/images/logo.png";
import "./styles.css";

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
