import Style from './Footer.module.css';

const Footer = () => {
   return (
      <footer class={Style.footer}>
         <div class={Style.container}>
            <div class={Style.items}>
               <a href="#!" class={Style.image}>
                  <picture><source srcset="img/footer/google-play.webp" type="image/webp" /><img src="img/footer/google-play.png?_v=1656991299570" alt="google-play" /></picture>
               </a>
               <a href="#!" class={Style.image}>
                  <picture><source srcset="img/footer/app-store.webp" type="image/webp" /><img src="img/footer/app-store.png?_v=1656991299570" alt="app-store" /></picture>
               </a>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
