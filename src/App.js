import './App.css';
import Command from './Components/Command.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer/Footer';

const App = () => {
   return (
      <div className="App">
         <div className={Command.wrapper}>
            <Header />
            <Main />
            <Footer />
         </div>
      </div>
   );
}
export default App;
