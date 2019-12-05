
import 'url-search-params-polyfill';

export default class filterUI {

  constructor() {
    this.hashWatcher();
  }

  hashWatcher() {
    let search = window.location.search;
    if(search.length && search.indexOf("set_filter") !== -1) {

      let searchParams = new URLSearchParams(search);
      if(searchParams.has('arrFilter_pf[PHONE]')) {
        let number = searchParams.get('arrFilter_pf[PHONE]');
        $(".search__input").val(number);
      }
      $(window).on("load", () => {
        App.Anchor.scrollTo("#winners", true);
        history.replaceState(null, null, window.location.pathname);
      });
    }
  }

}
