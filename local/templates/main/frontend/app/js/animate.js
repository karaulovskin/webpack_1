export default class Animate {
    constructor() {
        this.event();
    }

    init() {
        $('body').attr('style', '');
        this.animateShow();
    }

    animateShow() {
        if ($(window).scrollTop() > $('.hero').outerHeight(true)) {
            $('.animate-hero').each(function() {
                $(this).addClass('animated fadeInUp').removeClass('animate-hero');
            });
        } else {
            setTimeout(function () {
                $('.hero__info').addClass('animated fadeInLeft').removeClass('animate-hero');
            }, 800);
            setTimeout(function () {
                $('.hero__pic').addClass('animated fadeIn').removeClass('animate-hero');
            }, 2000);
            setTimeout(function () {
                $('.hero__btns').addClass('animated fadeIn').removeClass('animate-hero');
            }, 2500);
        }
    }

    static isInViewport(el, percentVisible) {
      percentVisible = percentVisible || 100;
      let rect = el.getBoundingClientRect();
      let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
      )
    };

    animateScroll() {
        let self = this;
        let els = $('.animate');
        if($(els).length) {
          $(els).each(function() {
            let percent = $(this).attr("data-animation-percent");
            if(window.matchMedia("(max-width: 800px)").matches) percent = 25;
            if (self.constructor.isInViewport(this, percent)) {
              $(this).addClass('animated fadeInUp');
            }
          });
        } else $(window).off('scroll load', () => { this.animateScroll(); });
    }

    event() {
        $(window).on('load', () => { this.init(); });
        $(window).on('scroll load', () => { this.animateScroll(); });
    }
}