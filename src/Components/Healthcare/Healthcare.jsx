//import './../App.css';
import Command from './../Command.module.css';
import Style from './Healthcare.module.css';

const Healthcare = () => {
   return (
      <section className={Style.health}>
         <div className={`${Command.container}`}>
            <Header />
            <Items />
         </div>
      </section>
   );
}
export default Healthcare;

const Header = () => {
   return (
      <div className={`${Style.header_healthcare}`}>
         <div className={`${Style.header_healthcare__text} ${Style.header_healthcare__text_center}`}>
            <h2 className={`${Style.header_healthcare__title} ${Command.title}`}><span>Healthcare</span> at your Fingertips.</h2>
            <div className={`${Style.header_healthcare__text} ${Command.text}`}>Bringing premium healthcare features to your fingertips. User
               friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health
               culture.</div>
         </div>
      </div>
   )
}

const Items = () => {
   return (
      <div className={`${Style.healthcare__items} ${Style.items_healthcare}`}>
         <div className={`${Style.items_healthcare__content} ${Style.items_healthcare__content_1}`}>
            <div className={Style.items_healthcare__item}>
               <div className={Style.items_healthcare__image}>
                  <picture><source srcset="img/healthcare/1.webp" type="image/webp" /><img src="img/healthcare/1.png?_v=1656991299570" alt="" /></picture>
               </div>
               <div className={Style.items_healthcare__title}>Symptom Checker</div>
               <div className={Style.items_healthcare__text}>Check if you are infected by COVID-19 with our Symptom Checker</div>
            </div>
         </div>
         <div className={`${Style.items_healthcare__content} ${Style.items_healthcare__content_2}`}>
            <div className={Style.items_healthcare__item}>
               <div className={Style.items_healthcare__image}>
                  <picture><source srcset="img/healthcare/2.webp" type="image/webp" /><img src="img/healthcare/2.png?_v=1656991299570" alt="" /></picture>
               </div>
               <div className={Style.items_healthcare__title}>24x7 Medical support</div>
               <div className={Style.items_healthcare__text}>Consult with 10,000+ health workers about your concerns.</div>
            </div>
         </div>
         <div className={`${Style.items_healthcare__content} ${Style.items_healthcare__content_3}`}>
            <div className={Style.items_healthcare__item}>
               <div className={Style.items_healthcare__image}>
                  <picture><source srcset="img/healthcare/3.webp" type="image/webp" /><img src="img/healthcare/3.png?_v=1656991299570" alt="" /></picture>
               </div>
               <div className={Style.items_healthcare__title}>Conditions</div>
               <div className={Style.items_healthcare__text}>Bringing premium healthcare features to your fingertips.</div>
            </div>
         </div>
      </div>
   )
}