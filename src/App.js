import './App.css';
import Command from './Components/Command.module.css';
import Counter from './Components/Counter/Counter'

const App = () => {
   return (
      <div className={Command.page}>
         <div className='wrapper'>
            <Counter />
         </div>
      </div>
   )
}
export default App;
