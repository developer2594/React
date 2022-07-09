import './../App.css';

const Footer = () => {
   return (
      <footer class="footer">
         <div class="footer__container">
            <div class="footer__items">
               <a href="#!" class="footer__image">
                  <picture><source srcset="img/footer/google-play.webp" type="image/webp" /><img src="img/footer/google-play.png?_v=1656991299570" alt="" /></picture>
               </a>
               <a href="#!" class="footer__image">
                  <picture><source srcset="img/footer/app-store.webp" type="image/webp" /><img src="img/footer/app-store.png?_v=1656991299570" alt="" /></picture>
               </a>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
