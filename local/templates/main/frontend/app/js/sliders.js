import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js'
import 'swiper/dist/css/swiper.min.css'

Swiper.use([Navigation, Pagination]);

export default class Sliders {
    constructor() {
        let self = this;

        this.sliders = [
            {
                'selector': '.production-slider.swiper-container',
                'options': {
                    slidesPerView: 4,
                    navigation: {
                        nextEl: '.production-slider .swiper-button-next',
                        prevEl: '.production-slider .swiper-button-prev',
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                }
            },
            {
                'selector': '.partners-slider.swiper-container',
                'options': {
                    slidesPerView: 5,
                    spaceBetween: 20,
                    watchOverflow: true,
                    navigation: {
                        nextEl: '.partners-slider .swiper-button-next',
                        prevEl: '.partners-slider .swiper-button-prev',
                    },
                    breakpoints: {
                        480: {
                            slidesPerView: 1,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }
                }
            },
            {
                'selector': '.winners-slider.swiper-container',
                'options': {
                  slidesPerView: 'auto',
                  noSwiping: true,
                  followFinger: false,
                  slideToClickedSlide: true,
                  speed: 500,
                  on: {
                      init: function() {
                          $(window).on('resize', () => {
                              this.update();
                              this.slideTo(0, 300);
                          });
                      }
                  },
                  breakpoints: {
                    800: {
                      noSwiping: false
                    }
                  }
                }
            },
        ];

        this.init();
    }

    init() {
        this.sliders.forEach(function (slider) {
            new Slider(slider.selector, slider.options)
        });
    }
}

export class Slider {
    constructor(selector, options) {
        new Swiper(selector, options);
    }
}