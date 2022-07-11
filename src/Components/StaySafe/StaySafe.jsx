//import './../App.css';
import Style from './StaySafe.module.css';
import Command from './../Command.module.css';

const StaySafe = () => {
   return (
      <section className={Style.stay}>
         <div className={`${Style.container} ${Command.container}`}>
            <div className={Style.media}>
               <div className={Style.body}>
                  <div className={Style.image}>
                     <picture><source srcset="img/stay-safe/image.webp" type="image/webp" /><img src="img/stay-safe/image.png?_v=1656991299570" alt="app" /></picture>
                  </div>
                  <div className={`${Style.elements} ${Style.element_1}`}></div>
                  <div className={`${Style.elements} ${Style.element_2}`}></div>
                  <div className={`${Style.elements} ${Style.element_3}`}></div>
               </div>
            </div>
            <div className={Style.block}>
               <div className={Style.content}>
                  <h2 className={`${Style.title} ${Command.title}`}>Stay safe with Go<span>Corona.</span></h2>
                  <div className={`${Style.text} ${Command.text}`}>24x7 Support and user friendly mobile platform to bring healthcare to your
                     fingertips. Signup and be a part of the new health culture.</div>
                  <a href="#!" className={`${Style.button} ${Command.button}`}>Features</a>
               </div>
            </div>
         </div>
      </section>
   );
}
export default StaySafe;
