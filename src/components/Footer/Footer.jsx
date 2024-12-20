import "./Footer.css";
import githubLogo from "../../assets/github.svg";
import facebookLogo from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content page__section">
        <p className="footer_copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <div className="footer__links-container">
          <a href="" className="footer__link">
            Home
          </a>
          <a href="" className="footer__link">
            TripleTen
          </a>

          <a href="" className="footer__link-git">
            <img src={githubLogo} alt="Github logo" className="footer__logo" />
          </a>
          <a href="" className="footer__link-fb">
            <img src={facebookLogo} alt="Facebook logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
