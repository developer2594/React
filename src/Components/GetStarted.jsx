import './../App.css';

const GetStarted = () => {
   return (
      <section className="get-started">
         <div className="get-started__container">
            <GetStartedBody />
            <GetStartedMadia />
         </div>
      </section>
   );
}
export default GetStarted;

const GetStartedBody = () => {
   return (
      <div className="get-started__body">
         <div className="get-started__content">
            <h1 className="get-started__title title">Take care of yours family’s <span>health.</span></h1>
            <div className="get-started__text text">All in one destination for COVID-19 health queries. Consult 10,000+
               health
               workers about
               your concerns.</div>
            <a href="#!" className="get-started__button button">get started</a>
         </div>
         <div className="get-started__image">
            <picture><source srcset="img/main/image.webp" type="image/webp" /><img src="img/main/image.png?_v=1656991299570" alt="" /></picture>
         </div>
      </div>
   )
}

const GetStartedMadia = () => {
   return (
      <a href="#!" className="get-started__madia media-get-started">
         <div className="media-get-started__icon">
            <img src="img/main/play.svg?_v=1656991299570" alt="button play" />
         </div>
         <div className="media-get-started__body">
            <div className="media-get-started__title">Stay safe with GoCorona</div>
            <div className="media-get-started__text">Watch Video</div>
         </div>
      </a>
   )
}