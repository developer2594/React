//import './../App.css';
import Style from './Experts.module.css';
import Command from './../Command.module.css';
console.log(Command);
const Experts = () => {
   return (
      <section className={Style.expert}>
         <div className={`${Command.container} ${Style.container}`}>
            <ExpertsStatistic />
            <ExpertsMediaBody />
         </div>
      </section>
   );
}
export default Experts;

const ExpertsStatistic = () => {
   return (
      <div className={`${Style.statistic} ${Style.statistic_experts}`}>
         <div className={`${Style.statistic_experts__body} ${Style.body_statistic_experts}`}>
            <div className={Style.body_statistic_experts__item}>
               <div className={Style.body_statistic_experts__value}>2m</div>
               <div className={Style.body_statistic_experts__text}>Users</div>
            </div>
            <div className={Style.body_statistic_experts__item}>
               <div className={Style.body_statistic_experts__value}>78</div>
               <div className={Style.body_statistic_experts__text}>Countries</div>
            </div>
            <div className={Style.body_statistic_experts__item}>
               <div className={Style.body_statistic_experts__value}>10,000+</div>
               <div className={Style.body_statistic_experts__text}>Medical experts</div>
            </div>
         </div>
         <div className={`${Style.statistic_experts__decor} ${Style.statistic_experts__decor-1}`}></div>
         <div className={`${Style.statistic_experts__decor} ${Style.statistic_experts__decor-2}`}></div>
         <div className={`${Style.statistic_experts__decor} ${Style.statistic_experts__decor-3}`}></div>
      </div>
   )
}

const ExpertsMediaBody = () => {
   return (
      <div className={`${Style.media__body} ${Style.body_experts_media}`}>
         <div className={Style.body_experts_media__content}>
            <div className={Style.body_experts_media__text}>
               <h2 className={`${Style.body_experts_media__title} ${Command.title}`}>Talk to <span>experts.</span></h2>
               <div className={`${Style.body_experts_media__text} ${Command.text}`}>Book appointments or submit queries into thousands of
                  forums
                  concerning health issues and prevention against noval Corona Virus.</div>
               <a href="#!" className={`${Style.body_experts_media__button} ${Command.button}`}>Features</a>
            </div>
         </div>
         <div className={Style.body_experts_media__video}><iframe src="https://www.youtube.com/embed/jPc9AJwtDkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      </div>
   )
}