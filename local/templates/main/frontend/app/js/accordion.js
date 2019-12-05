export default class Accordion {
    container = '[data-accordion]';
    item = '[data-accordion-item]';
    trigger = '[data-accordion-trigger]';
    content = '[data-accordion-content]';
    duration = 500;

    constructor() {
        this.events();
    }

    switchAccordion(elem) {
        let self = this;
        let $trigger = elem;
        let $container = $trigger.closest(self.container);
        let $items = $container.find(self.item);
        let $item = $trigger.closest(self.item);
        let $content = $item.find(self.content);
        let $otherContent = $container.find(self.content);

        if (!$item.hasClass('is_open')) {
            $items.removeClass('is_open');
            $item.addClass('is_open');
            $otherContent.stop(true, true).slideUp(self.duration);
            $content.slideDown(self.duration);
        } else {
            $content.slideUp(self.duration);
            $item.removeClass('is_open');
        }
    }

    events() {
        let self = this;

        $(this.trigger).on('click', function(e) {
            e.preventDefault();
            self.switchAccordion($(this));
        });
    }
}