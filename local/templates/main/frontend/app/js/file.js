export default class File {
    constructor() {
        this.event();
    }

    addFile(input) {
        var name = input.files[0].name;

        $(input).closest('[data-attach]').find('[data-attach-clear]').addClass('active');
        $(input).closest('[data-attach]').find('[data-attach-label]').addClass('add-file').text(name);
    }

    clear(button) {
        button.closest('[data-attach]').find('[data-attach-input]').val('');
        button.closest('[data-attach]').find('[data-attach-label]').removeClass('add-file').text('Прикрепить чек');
        button.removeClass('active');
    }

    event() {
        var self = this;

        $(document).on('change', '[data-attach-input]', function () {
            self.addFile(this);
        });
        $(document).on('click', '[data-attach-clear]', function () {
            self.clear($(this));
        });
    }
}