import './App.css';
import Header from './Components/Header.jsx';
import Main from './Components/Main.jsx';
import Footer from './Components/Footer';

const App = () => {
   return (
      <div className="App">
         <div className="wrapper">
            <Header />
            <Main />
            <Footer />
         </div>
      </div>
   );
}
export default App;
