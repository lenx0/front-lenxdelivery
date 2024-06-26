import { Link } from "react-router-dom";
import "./styles.css";
import main from "../Components/images/main.png";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="home-actions">
            <h1 className="home-title">
              Faça seu pedido <br /> que entregamos <br /> pra você!!!
            </h1>
            <h3 className="home-subtitle">
              Escolha seu pedido, em poucos minutos <br /> levaremos na sua
              porta
            </h3>
            <Link to="/orders" className="home-btn-order">
              FAZER PEDIDO
            </Link>
          </div>
          <div className="home-image">
            <img src={main} alt="imagem da home" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
