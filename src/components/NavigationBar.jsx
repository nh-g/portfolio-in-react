import BrandLogo from '../assets/images/NavLogo.png'
export default function NavigationBar() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#hero">
          <img alt="logo" src={BrandLogo} />
        </a>
      </div>
      <div className="bar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <div>{/* empty on purpose */}</div>

        <a href="#technologies">Tech</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
