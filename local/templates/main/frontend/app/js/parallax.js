import Parallax from 'parallax-js'

export default class Parall {
    constructor() {
        this.event();
    }

    init() {

        if(document.getElementById('parallax-1')) {
          var scene = document.getElementById('parallax-1');
          var parallaxInstance = new Parallax(scene);
        }

        if(document.getElementById('parallax-2')) {
          var scene2 = document.getElementById('parallax-2');
          var parallaxInstance = new Parallax(scene2);
        }

        if(document.getElementById('parallax-3')) {
          var scene3 = document.getElementById('parallax-3');
          var parallaxInstance = new Parallax(scene3);
        }

        if(document.getElementById('parallax-4')) {
          var scene4 = document.getElementById('parallax-4');
          var parallaxInstance = new Parallax(scene4);
        }

        if(document.getElementById('parallax-5')) {
          var scene5 = document.getElementById('parallax-5');
          var parallaxInstance = new Parallax(scene5);
        }

        if(document.getElementById('parallax-6')) {
          var scene6 = document.getElementById('parallax-6');
          var parallaxInstance = new Parallax(scene6);
        }

        if(document.getElementById('parallax-7')) {
          var scene7 = document.getElementById('parallax-7');
          var parallaxInstance = new Parallax(scene7);
        }

        if(document.getElementById('parallax-8')) {
          var scene8 = document.getElementById('parallax-8');
          var parallaxInstance = new Parallax(scene8);
        }

        if(document.getElementById('parallax-9')) {
          var scene9 = document.getElementById('parallax-9');
          var parallaxInstance = new Parallax(scene9);
        }

        if(document.getElementById('parallax-10')) {
          var scene10 = document.getElementById('parallax-10');
          var parallaxInstance = new Parallax(scene10);
        }

        if(document.getElementById('parallax-11')) {
          var scene11 = document.getElementById('parallax-11');
          var parallaxInstance = new Parallax(scene11);
        }

    }

    event() {
        if($("[id^='parallax-']").length) {
          $(window).on('load', () => { this.init(); });
        }
    }
}