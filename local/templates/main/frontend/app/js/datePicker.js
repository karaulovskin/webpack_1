import 'air-datepicker';

export default class datePicker {

  constructor() {
    Date.prototype.monthNames = [
      "янв.", "фев.", "март",
      "апр.", "май", "июнь",
      "июль", "авг.", "сент.",
      "окт.", "нов.", "дек."
    ];
    Date.prototype.dayNames = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
    Date.prototype.getMonthName = function() {
      return this.monthNames[this.getMonth()];
    };
    Date.prototype.getShortMonthName = function () {
      return this.getMonthName().substr(0, 3);
    };
    Date.prototype.getDayName = function() {
      return this.dayNames[ this.getDay() ];
    };

    const self = this;

    this.els = {
      calendarFlowed: "[data-js-calendar-flowed]",
    };
    this.options = {
      keyboardNav: false,
      inline: true,
      maxDate: new Date(),
      prevHtml: '<svg class="i-icon"><use xlink:href="#arrow-prev"></use></svg>',
      nextHtml: '<svg class="i-icon"><use xlink:href="#arrow-next"></use></svg>',
      navTitles: {
        days: 'MM, yyyy',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
      }
    };
    this.flowedOptions = Object.assign({}, this.options, {
      classes: "datepicker--flowed",
      inline: false,
      position: "top left",
      autoClose: true
    });
    this.instances = [];
    this.init();
  }

  static formatDate(date, addHours) {
    let hours = (addHours) ? ", " + date.getHours() + ":" + date.getMinutes() : "";
    return ('0' + date.getDate()).slice(-2) + ' ' + date.getMonthName() + ' ' + date.getFullYear() + ', ' + date.getDayName() + hours;
  }

  init() {
    let self = this;
    if($(this.els.calendarFlowed).length) {
      $(this.els.calendarFlowed).each(function(i, item) {
        $(item).datepicker(self.flowedOptions);
        $(item).datepicker().data('datepicker').selectDate(new Date());
        self.instances.push($(item));
      });
    }
  }
}
