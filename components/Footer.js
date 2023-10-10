import stylesFooter from "../styles/Footer.module.css";
import stylesLayout from "../styles/Layout.module.css";


export default function Footer() {
  return (
    <footer className={`${stylesLayout.section} ${stylesFooter.layout}`}>
        <div >
            <ul className={stylesFooter.socialMedia}>
                <li className={stylesFooter.socialMediaIcon}><i className="ri-github-line ri-3x"></i></li>
                <li className={stylesFooter.socialMediaIcon}><i className="ri-linkedin-fill ri-3x"></i></li>
            </ul>
        </div>
        <p>Készítette: Samu Krisztina - 2023</p>
    </footer>
  );
}
