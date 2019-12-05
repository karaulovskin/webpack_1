export default class Menu {

    constructor() {
        this.event();
    }

    open() {
        $('.header__menu').addClass('is-open');
    }

    close() {
        $('.header__menu').removeClass('is-open');
    }

    event() {
        var self = this;

        $(document).on('click', '.burger', function (e) {
            e.preventDefault();
            self.open();
        });
        $(document).on('click', '.menu-close', function (e) {
            e.preventDefault();
            self.close();
        });

        $(document).on('click', '.menu__link', () => {
            this.close();
        });

    }
}