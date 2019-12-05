export default class Anchor {

    constructor() {
        this.watchHash();
        this.events();
    }

    handler(e) {
        e.preventDefault();
        let el = e.currentTarget;
        this.scrollTo(el);
    }

    watchHash() {
        let hash = window.location.hash;
        if(hash.length) {
          window.setTimeout(() => { window.scrollTo(0, 0); }, 1);
          $(window).on("load",() => {
            this.scrollTo(hash, true);
            history.replaceState(null, null, ' ');
          });
        }
    }

    static highlightMenu(el) {
      let navItem = $(el).closest('.menu__item');
      let navItems = $(navItem).siblings();
      $(navItems).removeClass('current');
      $(navItem).addClass('current');
    }

    scrollTo(el, byHash) {
        let target = (byHash) ? el : $(el).attr('href');
        let height = ($(window).width() <= 650) ? 160 : 80;
        if($(target).length) {
          $('html, body').animate({scrollTop: $(target).offset().top - height}, 800);
          let link = (byHash) ? $(`.menu__link[href="${target}"]`) : el;
          this.constructor.highlightMenu(link);
        } else {
          if(!byHash) window.location.href = "/" + target;
        }
    }

    events() {
        $(document).on('click', '.menu__link', (e) => { this.handler(e); });
    }
}