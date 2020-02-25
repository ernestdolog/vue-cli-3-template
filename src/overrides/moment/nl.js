/* eslint-disable */

//! moment.js locale configuration
//! locale: German [de]
//! author: lluchs: https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author: Mikolaj Dadela: https://github.com/mik01aj

import moment from 'moment'

let monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
let monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

let monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
let monthsRegex = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

export default moment.defineLocale('nl', {
  months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
  monthsShort: function (m, format) {
    if (!m) {
      return monthsShortWithDots;
    } else if (/-MMM-/.test(format)) {
      return monthsShortWithoutDots[m.month()];
    } else {
      return monthsShortWithDots[m.month()];
    }
  },

  monthsRegex: monthsRegex,
  monthsShortRegex: monthsRegex,
  monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
  monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

  monthsParse: monthsParse,
  longMonthsParse: monthsParse,
  shortMonthsParse: monthsParse,

  weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
  weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
  weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
  weekdaysParseExact: true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD-MM-YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[vandaag om] LT',
    nextDay: '[morgen om] LT',
    nextWeek: 'dddd [om] LT',
    lastDay: '[gisteren om] LT',
    lastWeek: '[afgelopen] dddd [om] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'over %s',
    past: '%s geleden',
    s: 'een paar seconden',
    m: '%d minuut',
    mm: '%d minuten',
    h: '%d uur',
    hh: '%d uur',
    d: '%d dag',
    dd: '%d dagen',
    M: '%d maand',
    MM: '%d maanden',
    y: '%d jaar',
    yy: '%d jaar'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
  ordinal: function (number) {
    return number + ((number === 1 || number === 8 || number >= 20) ? 'ste': 'de');
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
})
