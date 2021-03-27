import LogoImg from "../../images/logo.png";
import LandingImg from "../../images/landing.svg";
import "./styles.css";

import { BiLogInCircle, BiEdit } from "react-icons/bi";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="page-landing-content">
        <div className="logo-container">
          <img src={LogoImg} alt="" />
          <h2>Sua felicidade começa aqui</h2>
        </div>

        <img src={LandingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <a href="#" className="login">
            <BiLogInCircle />
            Login
          </a>

          <a href="#" className="create-account">
            <BiEdit />
            Criar conta
          </a>
        </div>
      </div>
    </div>
  );
}
