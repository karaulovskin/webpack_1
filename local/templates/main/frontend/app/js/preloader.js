

export default class preloader {

  cssClass = "js-preloader";
  preloaderParent = "";
  preloaderEl = "";
  isParentDocument = false;


  exist() {
    return !!document.querySelector("." + this.cssClass + "__el");
  }

  show(params) {
    let self = this;
    if(this.exist()) {
      console.error("preloader already exist");
      return;
    }
    params = Object.assign({}, {
      place: document.body,
      fade:  true,
      topPosition: false,
      fullFade: false
    }, params);
    this.preloaderParent = params.place;
    var el = document.createElement("div");
    el.setAttribute("role", "presentation");
    el.classList.add(this.cssClass);
    if(params.fade) el.classList.add(this.cssClass + "--fade");
    if(params.topPosition) el.classList.add(this.cssClass + "--top");
    if(params.fullFade) el.classList.add(this.cssClass + "--full-fade");
    el.insertAdjacentHTML("beforeend","<div class=\"js-preloader__el\"><div class=\"js-preloader__el-dot\"></div><div class=\"js-preloader__el-dot\"></div><div class=\"js-preloader__el-dot\"></div><div class=\"js-preloader__el-dot\"></div></div>");
    this.preloaderParent.classList.add(this.cssClass + "__parent");
    this.isParentDocument = (this.preloaderParent === document.body || this.preloaderParent === document.rootElement);
    if(this.isParentDocument) this.preloaderParent.classList.add(this.cssClass + "__parent--document");
    params.place.appendChild(el);
    window.setTimeout(function() {
      self.preloaderEl.classList.add(self.cssClass + "--show");
    }, 250);
    this.preloaderEl = el;
  }

  hide() {
    let self = this;
    if(!this.exist()) {
      console.log("can't find preloader element");
      return;
    }
    this.preloaderEl.classList.remove(this.cssClass + "--show");

    window.setTimeout(function() {
      self.preloaderEl.classList.remove(self.cssClass + "--top");
      self.preloaderParent.classList.remove(self.cssClass + "__parent");
      self.preloaderParent.classList.remove(self.cssClass + "__parent--document");
      self.preloaderEl.remove();
    }, 500);

  }

}
