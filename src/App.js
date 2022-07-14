import React from 'react';
import './App.css';
import Command from './Components/Command.module.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import NavBar from './Components/NavBar/NavBar';
import Message from './Components/Message/Message';
import News from './Components/News/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
   return (
      <BrowserRouter>
         <div className={Command.page}>
            <div className={Command.wrapper}>
               <Header />
               <NavBar />
               <div className={Command.Content}>
                  <Routes>
                     <Route path='dialogs' element={<Dialogs />} />
                     <Route path='message' element={<Message />} />
                     <Route path='news' element={<News />} />
                     <Route path='profile' element={<Profile />} />

                  </Routes>
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}
export default App;
