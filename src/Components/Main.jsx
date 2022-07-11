import Command from './Command.module.css';
import GetStarted from './GetStarted/GetStarted';
import StaySafe from './StaySafe/StaySafe';
import Experts from './Experts/Experts';
import Healthcare from './Healthcare/Healthcare';

const Main = () => {
   return (
      <main className={Command.page}>
         <GetStarted />
         <StaySafe />
         <Experts />
         <Healthcare />
      </main>
   );
}
export default Main;
