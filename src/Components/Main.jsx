import './../App.css';
import GetStarted from './GetStarted';
import StaySafe from './StaySafe';
import Experts from './Experts';
import Healthcare from './Healthcare';

const Main = () => {
   return (
      <main className="page">
         <GetStarted />
         <StaySafe />
         <Experts />
         <Healthcare />
      </main>
   );
}
export default Main;
