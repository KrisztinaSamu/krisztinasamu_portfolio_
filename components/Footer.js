import stylesFooter from "../styles/Footer.module.css";
import Button from "./Button";
import styleButton from "../styles/Button.module.css"

export default function Footer() {
  return (
    <footer className={stylesFooter.layout}>
      <div className={stylesFooter.designLine}>
        <ul className={stylesFooter.socialMedia}>
          <li className={stylesFooter.socialMediaIcon}>
            <Button style={styleButton.neumorphic}>
              <i className="ri-github-line ri-3x"></i>
            </Button>
          </li>
          <li className={stylesFooter.socialMediaIcon}>
            <Button style={styleButton.neumorphic}>
              <i className="ri-linkedin-fill ri-3x"></i>
            </Button>
          </li>
        </ul>
      </div>
      <p>Készítette: Samu Krisztina - 2023</p>
    </footer>
  );
}
