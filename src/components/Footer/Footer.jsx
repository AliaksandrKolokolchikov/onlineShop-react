import footerStyles from './../../styles/Footer.module.css';
import headerStyle from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/Routes';
import headerLogo from '../../images/logo.svg';

function Footer() {
  return (
    <section className={footerStyles.footer}>
      <div className={headerStyle.logo}>
        <Link to={ROUTES.HOME}>
          <img src={headerLogo} alt="Stuff" />
        </Link>
      </div>
      <div className={footerStyles.rights}>Developed by Flekssando</div>
      <div className={footerStyles.socials}>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Footer;
