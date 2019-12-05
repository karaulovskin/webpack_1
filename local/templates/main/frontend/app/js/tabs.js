export default class Tabs {
    tabLink = '[data-tabs-link]';
    tabLinks = '[data-tabs-links]';
    tab = '[data-tabs-tab]';

    constructor() {
        this.events();
    }

    open($tabLink, $tab) {
        $tabLink.siblings().removeClass('is-active');
        $tabLink.addClass('is-active');

        $tab.siblings().removeClass('is-active');
        $tab.addClass('is-active');

        if ($tab.find('.swiper-container').length) {
            $tab.find('.swiper-container')[0].swiper.update();
        }

        $(document.body).trigger("sticky_kit:recalc");
    }

    events() {
        var self = this;
        $(this.tabLink).on('click', function (e) {
            e.preventDefault();

            let tab = $(this).attr('data-tabs-link');
            self.open($(this), $(tab));
        });
    }
}