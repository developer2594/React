//import App from './../../App.css';
import Style from './GetStarted.module.css';
import Command from './../Command.module.css';

const GetStarted = () => {
   return (
      <section className={Style.started}>
         <div className={`${Command.container} ${Style.container}`}>
            <GetStartedBody />
            <GetStartedMadia />
         </div>
      </section>
   );
}
export default GetStarted;

const GetStartedBody = () => {
   return (
      <div className={Style.body}>
         <div className={Style.content}>
            <h1 className={`${Style.title} ${Command.title}`}>Take care of yours family’s <span>health.</span></h1>
            <div className={`${Style.text} ${Command.text}`}>All in one destination for COVID-19 health queries. Consult 10,000+
               health
               workers about
               your concerns.</div>
            <a href="#!" className={`${Style.button} ${Command.button}`}>get started</a>
         </div>
         <div className={Style.image}>
            <picture><source srcset="img/main/image.webp" type="image/webp" /><img src="img/main/image.png?_v=1656991299570" alt="" /></picture>
         </div>
      </div>
   )
}

const GetStartedMadia = () => {
   return (
      <a href="#!" className={`${Style.madia} ${Style.media_get_started}`}>
         <div className={Style.media_icon}>
            <img src="img/main/play.svg?_v=1656991299570" alt="button play" />
         </div>
         <div className={Style.media_get_started__body}>
            <div className={Style.media_get_started__title}>Stay safe with GoCorona</div>
            <div className={Style.media_get_started__text}>Watch Video</div>
         </div>
      </a>
   )
}