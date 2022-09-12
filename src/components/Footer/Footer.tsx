import CatWikiLogo from '../../assets/Icons/CatWikiLogo';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="logo-container">
        <CatWikiLogo />
      </div>
      <div className="copyright">
        <p>©</p>
        <p>created by juliodumont - devChallenge.io 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
