import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./styles.css";
import { BsCart3 } from "react-icons/bs";
import Cart from "../Cart";
import { useState } from "react";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  function handleOpenDrawer() {
    setOpenDrawer(true);
  }

  function handleCloseDrawer() {
    setOpenDrawer(false);
  }


  //teste
  return (
    <nav className="main-navbar">
      <img src={logo} alt="Logo do site" />
      <Link to="/" className="logo-text">
        Lenx Delivery
      </Link>
      <BsCart3
        size={30}
        style={{
          cursor: "pointer",
          color: "white",
        }}
        onClick={handleOpenDrawer}
      />
      <Cart openDrawer={openDrawer} onClose={handleCloseDrawer}/>
    </nav>
  );
}
