import "./styles.css";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";

export default function Footer() {
  return (
    <footer className="main-footer">
      Developed by Thiago Beraldo
      <div className="footer-icons">
        <a href="https://www.instagram.com/thiagoberaldo_" target="_new">
          <img src={instagram} />
        </a>
        <a href="https://www.linkedin.com/in/thiago-de-freitas-beraldo-06515a163" target="_new">
          <img src={linkedin} />
        </a>
      </div>
    </footer>
  );
}
