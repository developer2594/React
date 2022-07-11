import './../../App.css';
import Command from './../Command.module.css';
import Style from './Header.module.css';

console.log(Command);
const Header = () => {
   return (
      <header className={Style.header}>
         <div className={`${Style.container} ${Command.container}`}>
            <Logo />
            <Nav />
            <Burger />
         </div>
      </header>
   );
}
export default Header;

const Logo = () => {
   return (
      <div className={Style.logo}>
         <a href="/">
            <img src="https://i.pinimg.com/736x/57/87/25/5787256395e5caf8b460cba2673648d2.jpg" alt="Картинка" />
         </a>
      </div>
   )
}

const Nav = () => {
   return (
      <nav>
         <ul className={Style.menu__list}>
            <li className={Style.menu__item}><a href="#!" className={Style.link}>HOME</a></li>
            <li className={Style.menu__item}><a href="#!" className={Style.link}>FEATURES</a></li>
            <li className={Style.menu__item}><a href="#!" className={Style.link}>SUPPORT</a></li>
            <li className={Style.menu__item}><a href="#!" className={Style.link}>CONTACT US</a></li>
         </ul>
      </nav>
   )
}

const Burger = () => {
   return (
      <div className={Style.menu_icon}>
         <div className={Style.icon_menu}>
            <span></span>
         </div>
         <div className={Style.menu__body}></div>
      </div>
   )
}