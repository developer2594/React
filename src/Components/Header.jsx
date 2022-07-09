import './../App.css';

const Header = () => {
   return (
      <header className="header">
         <div className="header__container">
            <Logo />
            <Nav />
            <HeaderButton />
            <Burger />
         </div>
      </header>
   );
}
export default Header;

const Logo = () => {
   return (
      <div>
         <a href="/" className="header__logo">
            <img src="https://i.pinimg.com/736x/57/87/25/5787256395e5caf8b460cba2673648d2.jpg" alt="Картинка" />
         </a>
      </div>
   )
}

const Nav = () => {
   return (
      <nav data-da=".menu__body, 768" className="header__menu menu">
         <ul className="menu__list">
            <li className="menu__item"><a href="#!" className="nav-header__link">HOME</a></li>
            <li className="menu__item"><a href="#!" className="nav-header__link">FEATURES</a></li>
            <li className="menu__item"><a href="#!" className="nav-header__link">SUPPORT</a></li>
            <li className="menu__item"><a href="#!" className="nav-header__link">CONTACT US</a></li>
         </ul>
      </nav>
   )
}

const HeaderButton = () => {
   return (
      <div className="header__button">
         <a href="#!" className="button button_blue">download</a>
      </div>
   )
}

const Burger = () => {
   return (
      <div className="header__menu-icon">
         <div className="icon-menu">
            <span></span>
         </div>
         <div className="menu__body"></div>
      </div>
   )
}