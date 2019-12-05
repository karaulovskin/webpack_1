export default class Header {
    constructor() {
        this.event();
        this.headerFixed();
    }

    headerFixed() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('header--fixed');
        } else {
            $('.header').removeClass('header--fixed');
        }
    }

    event() {
        const self = this;

        $(window).on('scroll', function() {
            self.headerFixed();
        });
    }
}