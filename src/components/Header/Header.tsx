import { Link } from 'react-router-dom';
import CatWikiLogo from '../../assets/Icons/CatWikiLogo';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <CatWikiLogo />
      </Link>
    </header>
  );
};

export default Header;
