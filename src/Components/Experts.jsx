import './../App.css';

const Experts = () => {
   return (
      <section className="experts">
         <div className="experts__container">
            <ExpertsStatistic />
            <ExpertsMediaBody />
         </div>
      </section>
   );
}
export default Experts;

const ExpertsStatistic = () => {
   return (
      <div className="experts__statistic statistic-experts">
         <div className="statistic-experts__body body-statistic-experts">
            <div className="body-statistic-experts__item">
               <div className="body-statistic-experts__value">2m</div>
               <div className="body-statistic-experts__text">Users</div>
            </div>
            <div className="body-statistic-experts__item">
               <div className="body-statistic-experts__value">78</div>
               <div className="body-statistic-experts__text">Countries</div>
            </div>
            <div className="body-statistic-experts__item">
               <div className="body-statistic-experts__value">10,000+</div>
               <div className="body-statistic-experts__text">Medical experts</div>
            </div>
         </div>
         <div className="statistic-experts__decor statistic-experts__decor-1"></div>
         <div className="statistic-experts__decor statistic-experts__decor-2"></div>
         <div className="statistic-experts__decor statistic-experts__decor-3"></div>

      </div>
   )
}

const ExpertsMediaBody = () => {
   return (
      <div className="experts-media__body body-experts-media">
         <div className="body-experts-media__content">
            <div className="body-experts-media__text">
               <h2 className="body-experts-media__title title">Talk to <span>experts.</span></h2>
               <div className="body-experts-media__text text">Book appointments or submit queries into thousands of
                  forums
                  concerning health issues and prevention against noval Corona Virus.</div>
               <a href="#!" className="body-experts-media__button button">Features</a>
            </div>
         </div>
         <div className="body-experts-media__video"><iframe src="https://www.youtube.com/embed/jPc9AJwtDkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
   )
}