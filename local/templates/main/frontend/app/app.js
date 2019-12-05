
if(window.location.hash) window.setTimeout(() => { window.scrollTo(0, 0); }, 1);

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./icons', true, /\.svg$/));

// Load plugins
import 'jquery'
import IMask from 'imask'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

// load modules
import Anchor from'./js/anchor'
import Utils from'./js/utils/utils'
import SvgUse from'./js/svgUse'
import Accordion from'./js/accordion'
import Header from'./js/header'
import File from'./js/file'
import Tabs from'./js/tabs'
import Scrollbar from'./js/scrollbar'
import Sliders from'./js/sliders'
import Modals from'./js/modals'
import Menu from'./js/menu'
import Animate from'./js/animate'
import Forms from'./js/forms/forms'
import Parall from'./js/parallax'
import datePicker from './js/datePicker'
import preloader from './js/preloader'
import filterUI from './js/filterUI'
import aims from './js/aims'


// Load styles
import './styles/app.js';

// Run components

window.App = {
    debug: false,
    lang: 'ru'
};

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    if('ontouchstart' in window || navigator.maxTouchPoints) $(document.body).addClass("touch");

    App.Utils = new Utils();
    App.Forms = new Forms();
    App.SvgUse = new SvgUse();
    App.preloader = new preloader();
    App.Accordion = new Accordion();
    App.Anchor = new Anchor();
    App.Header = new Header();
    App.File = new File();
    App.Animate = new Animate();
    App.Scrollbar = new Scrollbar();
    App.Sliders = new Sliders();
    App.Tabs = new Tabs();
    App.Modals = new Modals();
    App.Menu = new Menu();
    App.Parall = new Parall();
    App.datePicker = new datePicker();
    App.filterUI = new filterUI();
    App.aims = new aims();

    $('.inputmask').each(function () {
        IMask($(this)[0], {mask: "+{7} (000) 000-0000"});
    });

    // prevent copying

    $('.no-select').on('selectstart', false);

    $(".no-select img").on('mousedown', false);
});