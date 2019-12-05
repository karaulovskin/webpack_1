import '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

export default class Modals {

    modals = [
        {
            selector: '.popup-gallery',
            options: {
                delegate: 'a',
                type: 'image',
                hideScrollbar: true,
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
            }
        },
        {
            selector: '.popup-modal',
            options: {
                modal: false,
                type: 'inline',
                hideScrollbar: true,
                afterShow: function() {
                  $(this.$content).find(".accordion__item").addClass("is_shown");
                },
                afterClose: function() {
                  $(this.$content).find(".accordion__item").removeClass("is_shown");
                }

            }
        }
    ];

    constructor() {
        this.init();
    }

    init() {
        this.modals.forEach(function (item) {
            $(item.selector).each(function () {
                $(this).fancybox(item.options);
            });
        });

      $('[data-fancybox="gallery"]').fancybox({
            hash: false,
            afterLoad: function() {
                if($(this.$content).find(".gallery-custom__nav").length) return;
                $(this.$content).append(`
                    <div class="gallery-custom__nav gallery-custom__nav--hidden">
                    
                      <div class="gallery-custom__nav-item gallery-custom__nav-item--prev" data-fancybox-prev>
                        <svg class="i-icon">
                          <use xlink:href="#arrow-prev"></use>
                        </svg>
                      </div>
                      <div class="gallery-custom__nav-item gallery-custom__nav-item--close" data-fancybox-close>
                        <svg class="i-icon">
                          <use xlink:href="#icon-menu-close"></use>
                        </svg>
                      </div>
                      <div class="gallery-custom__nav-item gallery-custom__nav-item--next" data-fancybox-next>
                        <svg class="i-icon">
                          <use xlink:href="#arrow-next"></use>
                        </svg>
                      </div>
                    </div>
                `);
                window.setTimeout(() => {
                  $(this.$content).find(".gallery-custom__nav").removeClass("gallery-custom__nav--hidden");
                }, 500);
            },
            beforeClose: function() {
              $(this.$content).find(".gallery-custom__nav").addClass("gallery-custom__nav--hidden");
            },
            baseClass: "gallery-custom",
            toolbar: false
      });

    }
}