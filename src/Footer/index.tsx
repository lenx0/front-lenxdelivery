import "./styles.css";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

export default function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido por Thiago de Freitas Beraldo
      <div className="footer-icons">
        <a href="#" target="_new">
          <img src={instagram} />
        </a>
        <a href="#" target="_new">
          <img src={linkedin} />
        </a>
      </div>
    </footer>
  );
}
