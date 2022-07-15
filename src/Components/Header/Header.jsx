import { Link } from 'react-router-dom';
import './../../App.css';
import Command from './../Command.module.css';
import Style from './Header.module.css';

const Header = () => {
   return (
      <div className={Style.Header}>
         <div className={`${Style.container} ${Command.container}`}>
            <Logo />
            <Nav />
            {/*<Burger />*/}
         </div>
      </div>
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
            <li className={Style.menu__item}><Link to="#!" className={Style.link}>HOME</Link></li>
            <li className={Style.menu__item}><Link to="#!" className={Style.link}>Profile</Link></li>
            <li className={Style.menu__item}><Link to="#!" className={Style.link}>Dialogs</Link></li>
            <li className={Style.menu__item}><Link to="#!" className={Style.link}>Message</Link></li>
            <li className={Style.menu__item}><Link to="#!" className={Style.link}>News</Link></li>
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