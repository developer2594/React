import './../App.css';

const Healthcare = () => {
   return (
      <section className="healthcare">
         <div className="healthcare__container">
            <Header />
            <Items />
         </div>
      </section>
   );
}
export default Healthcare;

const Header = () => {
   return (
      <div className="healthcare__header header-healthcare">
         <div className="header-healthcare__text header-healthcare__text-center">
            <h2 className="header-healthcare__title title"><span>Healthcare</span>at your Fingertips.</h2>
            <div className="header-healthcare__text text">Bringing premium healthcare features to your fingertips. User
               friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health
               culture.</div>
         </div>
      </div>
   )
}

const Items = () => {
   return (
      <div className="healthcare__items items-healthcare">
         <div className="items-healthcare__content items-healthcare__content_1">
            <div className="items-healthcare__item">
               <div className="items-healthcare__image">
                  <picture><source srcset="img/healthcare/1.webp" type="image/webp" /><img src="img/healthcare/1.png?_v=1656991299570" alt="" /></picture>
               </div>
               <div className="items-healthcare__title">Symptom Checker</div>
               <div className="items-healthcare__text">Check if you are infected by COVID-19 with our Symptom Checker</div>
            </div>
         </div>
         <div className="items-healthcare__content items-healthcare__content_2">
            <div className="items-healthcare__item">
               <div className="items-healthcare__image">
                  <picture><source srcset="img/healthcare/2.webp" type="image/webp" /><img src="img/healthcare/2.png?_v=1656991299570" alt="" /></picture>
               </div>
               <div className="items-healthcare__title">24x7 Medical support</div>
               <div className="items-healthcare__text">Consult with 10,000+ health workers about your concerns.</div>
            </div>
         </div>
         <div className="items-healthcare__content items-healthcare__content_3">
            <div className="items-healthcare__item">
               <div className="items-healthcare__image">
                  <picture><source srcset="img/healthcare/3.webp" type="image/webp" /><img src="img/healthcare/3.png?_v=1656991299570" alt="" /></picture>
               </div>
               <div className="items-healthcare__title">Conditions</div>
               <div className="items-healthcare__text">Bringing premium healthcare features to your fingertips.</div>
            </div>
         </div>
      </div>
   )
}