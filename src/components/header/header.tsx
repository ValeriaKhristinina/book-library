import './header.css';
import Logo from '../logo/logo';
import Search from '../search/search';

function Header() {
  return (
    <header className="page-header container">
      <Logo />
      <Search />
    </header>
  )
}

export default Header;