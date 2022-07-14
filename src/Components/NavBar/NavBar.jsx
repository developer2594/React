import { NavLink } from 'react-router-dom';
import Command from './../Command.module.css';
import Style from './NavBar.module.css';

const NavBar = () => {
   return (
      <div className={Style.NavBar}>
         <div className={Command.container}>
            <ul className={Style.list}>
               <li className={Style.item}>
                  <NavLink to='/profile' className={Style.link}>Profile</NavLink>
               </li>
               <li className={Style.item}>
                  <NavLink to='/dialogs' className={Style.link}>Dialogs</NavLink>
               </li>
               <li className={Style.item}>
                  <NavLink to='/message' className={Style.link}>Message</NavLink>
               </li>
               <li className={Style.item}>
                  <NavLink to='/news' className={Style.link}>News</NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
}
export default NavBar;
