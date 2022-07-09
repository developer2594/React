import './../App.css';

const StaySafe = () => {
   return (
      <section className="stay-safe">
         <div className="stay-safe__container">
            <div className="stay-safe__media">
               <div className="stay-safe__body">
                  <div className="stay-safe__image">
                     <picture><source srcset="img/stay-safe/image.webp" type="image/webp" /><img src="img/stay-safe/image.png?_v=1656991299570" alt="app" /></picture>
                  </div>
                  <div className="stay-safe__elements stay-safe__element-1"></div>
                  <div className="stay-safe__elements stay-safe__element-2"></div>
                  <div className="stay-safe__elements stay-safe__element-3"></div>
               </div>
            </div>
            <div className="stay-safe__block">
               <div className="stay-safe__content">
                  <h2 className="stay-safe__title title">Stay safe with Go<span>Corona.</span></h2>
                  <div className="stay-safe__text text">24x7 Support and user friendly mobile platform to bring healthcare to your
                     fingertips. Signup and be a part of the new health culture.</div>
                  <a href="#!" className="stay-safe__button button">Features</a>
               </div>
            </div>
         </div>
      </section>
   );
}
export default StaySafe;
