export default class aims {

  constructor() {
    this.counters = {
      mc: 55028179,
    };
    this.els = {
      forms: "[data-form]"
    };
    this.events();
  }

  push(aimName) {
    if(typeof ym !== "undefined") ym(this.counters.mc, 'reachGoal', aimName);
    else console.debug("ym() are not defined");
    if(typeof gtag !== "undefined") gtag('event', aimName);
    else console.debug("gtag() are not defined");
  }

  clickHandler(e) {
    let el = e.target;
    switch(true) {
      case $(el).is(".menu__link[href='#hero']"):
        this.push("stock"); break;
      case $(el).is(".menu__link[href='#action']"):
        this.push("regulation"); break;
      case $(el).is(".menu__link[href='#week-prize']"):
        this.push("prize"); break;
      case $(el).is(".menu__link[href='#question']"):
        this.push("question"); break;
      case $(el).is(".callback__link[href='#feedback']"):
        this.push("feedback"); break;
      case $(el).is(".connect__link[href*='tlgg.ru']"):
        this.push("telegram"); break;
      case $(el).is(".connect__link[href^='viber://']"):
        this.push("viber"); break;
      case $(el).is(".btn[href='#question-answer']"):
        this.push("question-answer"); break;
      case $(el).is(".btn[href='#ask-question']"):
        this.push("ask_questions_2"); break;
      default:
        break;
    }
  }

  submitHandler(e) {
    let form = e.currentTarget;
    if($(form).closest("#feedback").length) this.push('ask_questions');
    if($(form).closest("#ask-question").length) this.push('ask_questions_send');
    if($(form).closest("#check-registration").length) {
      let script = document.createElement("script");
      script.src = "//pixel.mathtag.com/event/js?mt_id=1437732&mt_adid=229274&mt_exem=&mt_excl=&v1=&v2=&v3=&s1=&s2=&s3=";
      script.onload = () => { console.debug("pixel script: success"); };
      script.onerror = () => { console.debug("pixel script: error"); };
      document.head.appendChild(script);
      this.push('registration_ok');
    }
  }

  events() {
    $(document).on("click", (e) => { this.clickHandler(e); });
    $(this.els.forms).on("form::successful", (e) => { this.submitHandler(e); });
  }
}