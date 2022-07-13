import React from 'react';
import './App.css';
import Command from './Components/Command.module.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
   return (
      <BrowserRouter>
         <div className={Command.page}>
            <div className={Command.wrapper}>
               <Header />
               <NavBar />
               <div className={Command.Content}>
                  <Profile />
                  {/*<Route path='/dialogs' component={Dialogs} />
                  <Route path='/profile' component={Profile} />*/}
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}
export default App;
