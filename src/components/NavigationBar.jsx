import BrandLogo from '../assets/images/NavLogo.svg';
import ToggleTheme from './ToggleTheme';

export default function NavigationBar() {
  return (
    <nav>
      <div>
        <a href="#hero" className="nav-logo">
          <img alt="logo" src={BrandLogo} />
        </a>
      </div>
      <div className="bar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#technologies">Tech</a>
        <a href="#contact">Contact</a>
      </div>
      <ToggleTheme />
    </nav>
  );
}
