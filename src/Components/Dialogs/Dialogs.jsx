import './../../App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Command from './../Command.module.css';
import style from './Dialogs.module.css';

const Dialogs = (props) => {
   return (
      <div className={`${Command.container} ${style.container}`}>
         <div className={style.dialogsName}>
            <ul>
               <DialogName name="Vasiliy" />
               <DialogName name="Dmitriy" />
               <DialogName name="Nikolay" />
               <DialogName name="Aleksey" />
               {/*<BrowserRouter>
                  <DialogName name="valodya" id="1" />
                  <DialogName name="Dmitriy" id="2" />
                  <DialogName name="Anatoliy" id="3" />
                  <DialogName name="Volkov" id="4" />
               </BrowserRouter>*/}
            </ul>
         </div>
         <div className={style.message}>
            <UserMessage name={props.name} />
            {/*<Route path={props.id} element={<UserMessage />} />
            <Route path={props.id} element={<UserMessage />} />
            <Route path={props.id} element={<UserMessage />} />
            <Route path={props.id} element={<UserMessage />} />*/}
         </div>
      </div>
   );
}
export default Dialogs;

const DialogName = (props) => {
   return (
      //<li><NavLink to={`${"/dialogs/" + props.id}`}>{props.name}</NavLink></li>
      <li><NavLink to="/dialogs">{props.name}</NavLink></li>
   )
}

const UserMessage = (props) => {
   return (
      <div className={style.userMasseges}>
         <h4>{props.name}</h4>
         <div className={style.userMassege}>
            <img src='https://i.pinimg.com/736x/57/87/25/5787256395e5caf8b460cba2673648d2.jpg' className={style.messageIcon} /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
         </div>
         <div className={style.userMassege}>
            <img src='https://i.pinimg.com/736x/57/87/25/5787256395e5caf8b460cba2673648d2.jpg' className={style.messageIcon} /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 2</p>
         </div>
         <div className={style.userMassege}>
            <img src='https://i.pinimg.com/736x/57/87/25/5787256395e5caf8b460cba2673648d2.jpg' className={style.messageIcon} /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 3</p>
         </div>
         <div className={style.userMassege}>
            <img src='https://i.pinimg.com/736x/57/87/25/5787256395e5caf8b460cba2673648d2.jpg' className={style.messageIcon} /><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 4</p>
         </div>
      </div>
   )
}