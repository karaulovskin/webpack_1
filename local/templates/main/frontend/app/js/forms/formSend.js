export default class FormSend {
    constructor() {
        let self = this;

        $('[data-form]:not([data-form-no-ajax])').on('form::valid', function(e) {
            var form = $(this);
            var formData = new FormData(form[0]);

            self.send(form, formData);
        });
    }

    send(form, formData) {
        if (!form.attr('data-ajax-no-loader')) { /*App.Loader.showLoader();*/ }


        let modalBody = $(form).closest(".mobal__body");
        if($(modalBody).length) App.preloader.show({
          place: modalBody[0]
        });

        $.ajax({
            type: "POST",
            data: formData,
            url: form.attr('data-ajax-url') || (window.SITE_TEMPLATE_PATH ? window.SITE_TEMPLATE_PATH + "/ajax/form.php" : ''),
            processData: false,
            contentType: false,
            beforeSend: function () {
                // Удаляем блок с ошибками перед отправкой
                form.find('.form-row--errors').remove();
            },
            success: function (data) {
                if (!form.attr('data-ajax-no-loader')) {/*App.Loader.hideLoader();*/}

                var parsedData = JSON.parse(data);

                if (parsedData.errors) {
                    // Кидаем ошибки в начало формы
                    form.prepend('<div class="form-row form-row--errors"></div>');
                    var errorsBlock = form.find('.form-row--errors');

                    // Каждую ошибку добавляем в алерт
                    parsedData.errors.forEach(function (item) {
                        errorsBlock.prepend('<div class="alert alert--red">' + item + '</div>');
                    });
                    window.setTimeout(() => { App.preloader.hide(); }, 1000);
                } else {
                    form.trigger('form::successful', parsedData);

                    // Очищаем форму
                    if (!form.attr('data-ajax-noclean')) {
                        form[0].reset();
                        form.find('[data-attach-label]').text('Прикрепить чек');
                        form.find('[data-attach-clear]').removeClass('active');
                    }

                    App.preloader.hide();
                    $.fancybox.destroy();
                    $.fancybox.open({
                        src  : form.attr('data-ajax-success-form') || '#modal-success',
                        type : 'inline'
                    });
                }
            },
            error: function (a,b,c) {
                form.trigger('form::successful');
                form[0].reset();
                form.find('[data-attach-label]').text('Прикрепить чек');
                form.find('[data-attach-clear]').removeClass('active');
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#modal-error',
                    type : 'inline'
                });
                console.debug(a,b,c);
                App.preloader.hide();
            }
        });
    }
}