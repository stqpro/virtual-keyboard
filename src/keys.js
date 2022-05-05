const keys = [
  [
    {
      service: false,
      en: {
        lower: '`',
        upper: '~',
      },
      ru: {
        lower: 'ё',
        upper: 'Ё',
      },
    },
    {
      service: false,
      en: {
        lower: '1',
        upper: '!',
      },
      ru: {
        lower: '1',
        upper: '!',
      },
    },
    {
      service: false,
      en: {
        lower: '2',
        upper: '@',
      },
      ru: {
        lower: '2',
        upper: '"',
      },
    },
    {
      service: false,
      en: {
        lower: '3',
        upper: '#',
      },
      ru: {
        lower: '3',
        upper: '№',
      },
    },
    {
      service: false,
      en: {
        lower: '4',
        upper: '$',
      },
      ru: {
        lower: '4',
        upper: ';',
      },
    },
    {
      service: false,
      en: {
        lower: '5',
        upper: '%',
      },
      ru: {
        lower: '5',
        upper: '%',
      },
    },
    {
      service: false,
      en: {
        lower: '6',
        upper: '^',
      },
      ru: {
        lower: '6',
        upper: ':',
      },
    },
    {
      service: false,
      en: {
        lower: '7',
        upper: '&',
      },
      ru: {
        lower: '7',
        upper: '?',
      },
    },
    {
      service: false,
      en: {
        lower: '8',
        upper: '*',
      },
      ru: {
        lower: '8',
        upper: '*',
      },
    },
    {
      service: false,
      en: {
        lower: '9',
        upper: '(',
      },
      ru: {
        lower: '9',
        upper: '(',
      },
    },
    {
      service: false,
      en: {
        lower: '0',
        upper: ')',
      },
      ru: {
        lower: '0',
        upper: ')',
      },
    },
    {
      service: false,
      en: {
        lower: '-',
        upper: '_',
      },
      ru: {
        lower: '-',
        upper: '_',
      },
    },
    {
      service: false,
      en: {
        lower: '=',
        upper: '+',
      },
      ru: {
        lower: '=',
        upper: '+',
      },
    },
    {
      service: true,
      name: 'backspace',
      displayName: 'Backspace',
    },
  ],
  [
    {
      service: true,
      name: 'tab',
      displayName: 'Tab',
    },
    {
      service: false,
      en: {
        lower: 'q',
        upper: 'Q',
      },
      ru: {
        lower: 'й',
        upper: 'Й',
      },
    },
    {
      service: false,
      en: {
        lower: 'w',
        upper: 'W',
      },
      ru: {
        lower: 'ц',
        upper: 'Ц',
      },
    },
    {
      service: false,
      en: {
        lower: 'e',
        upper: 'E',
      },
      ru: {
        lower: 'у',
        upper: 'У',
      },
    },
    {
      service: false,
      en: {
        lower: 'r',
        upper: 'R',
      },
      ru: {
        lower: 'к',
        upper: 'К',
      },
    },
    {
      service: false,
      en: {
        lower: 't',
        upper: 'T',
      },
      ru: {
        lower: 'е',
        upper: 'Е',
      },
    },
    {
      service: false,
      en: {
        lower: 'y',
        upper: 'Y',
      },
      ru: {
        lower: 'н',
        upper: 'Н',
      },
    },
    {
      service: false,
      en: {
        lower: 'u',
        upper: 'U',
      },
      ru: {
        lower: 'г',
        upper: 'Г',
      },
    },
    {
      service: false,
      en: {
        lower: 'i',
        upper: 'I',
      },
      ru: {
        lower: 'ш',
        upper: 'Ш',
      },
    },
    {
      service: false,
      en: {
        lower: 'o',
        upper: 'O',
      },
      ru: {
        lower: 'щ',
        upper: 'Щ',
      },
    },
    {
      service: false,
      en: {
        lower: 'p',
        upper: 'P',
      },
      ru: {
        lower: 'з',
        upper: 'З',
      },
    },
    {
      service: false,
      en: {
        lower: '[',
        upper: '{',
      },
      ru: {
        lower: 'х',
        upper: 'Х',
      },
    },
    {
      service: false,
      en: {
        lower: ']',
        upper: '}',
      },
      ru: {
        lower: 'ъ',
        upper: 'Ъ',
      },
    },
    {
      service: false,
      en: {
        lower: '\\',
        upper: '|',
      },
      ru: {
        lower: '\\',
        upper: '/',
      },
    },
  ],
  [
    {
      service: true,
      name: 'capslock',
      displayName: 'Caps Lock',
    },
    {
      service: false,
      en: {
        lower: 'a',
        upper: 'A',
      },
      ru: {
        lower: 'ф',
        upper: 'Ф',
      },
    },
    {
      service: false,
      en: {
        lower: 's',
        upper: 'S',
      },
      ru: {
        lower: 'ы',
        upper: 'Ы',
      },
    },
    {
      service: false,
      en: {
        lower: 'd',
        upper: 'D',
      },
      ru: {
        lower: 'в',
        upper: 'В',
      },
    },
    {
      service: false,
      en: {
        lower: 'f',
        upper: 'F',
      },
      ru: {
        lower: 'а',
        upper: 'А',
      },
    },
    {
      service: false,
      en: {
        lower: 'g',
        upper: 'G',
      },
      ru: {
        lower: 'п',
        upper: 'П',
      },
    },
    {
      service: false,
      en: {
        lower: 'h',
        upper: 'H',
      },
      ru: {
        lower: 'р',
        upper: 'Р',
      },
    },
    {
      service: false,
      en: {
        lower: 'j',
        upper: 'J',
      },
      ru: {
        lower: 'о',
        upper: 'О',
      },
    },
    {
      service: false,
      en: {
        lower: 'k',
        upper: 'K',
      },
      ru: {
        lower: 'л',
        upper: 'Л',
      },
    },
    {
      service: false,
      en: {
        lower: 'l',
        upper: 'L',
      },
      ru: {
        lower: 'д',
        upper: 'Д',
      },
    },
    {
      service: false,
      en: {
        lower: ';',
        upper: ':',
      },
      ru: {
        lower: 'ж',
        upper: 'Ж',
      },
    },
    {
      service: false,
      en: {
        lower: '\'',
        upper: '"',
      },
      ru: {
        lower: 'э',
        upper: 'Э',
      },
    },
    {
      service: true,
      name: 'enter',
      displayName: 'Enter',
    },
  ],
  [
    {
      service: true,
      name: 'lshift',
      displayName: 'Shift',
    },
    {
      service: false,
      en: {
        lower: 'z',
        upper: 'Z',
      },
      ru: {
        lower: 'я',
        upper: 'Я',
      },
    },
    {
      service: false,
      en: {
        lower: 'x',
        upper: 'X',
      },
      ru: {
        lower: 'ч',
        upper: 'Ч',
      },
    },
    {
      service: false,
      en: {
        lower: 'c',
        upper: 'C',
      },
      ru: {
        lower: 'с',
        upper: 'С',
      },
    },
    {
      service: false,
      en: {
        lower: 'v',
        upper: 'V',
      },
      ru: {
        lower: 'м',
        upper: 'М',
      },
    },
    {
      service: false,
      en: {
        lower: 'b',
        upper: 'B',
      },
      ru: {
        lower: 'и',
        upper: 'И',
      },
    },
    {
      service: false,
      en: {
        lower: 'n',
        upper: 'N',
      },
      ru: {
        lower: 'т',
        upper: 'Т',
      },
    },
    {
      service: false,
      en: {
        lower: 'm',
        upper: 'M',
      },
      ru: {
        lower: 'ь',
        upper: 'Ь',
      },
    },
    {
      service: false,
      en: {
        lower: ',',
        upper: '<',
      },
      ru: {
        lower: 'б',
        upper: 'Б',
      },
    },
    {
      service: false,
      en: {
        lower: '.',
        upper: '>',
      },
      ru: {
        lower: 'ю',
        upper: 'Ю',
      },
    },
    {
      service: false,
      en: {
        lower: '/',
        upper: '?',
      },
      ru: {
        lower: '.',
        upper: ',',
      },
    },
    {
      service: true,
      name: 'arrowup',
      displayName: '',
    },
    {
      service: true,
      name: 'rshift',
      displayName: 'Shift',
    },
  ],
  [
    {
      service: true,
      name: 'lctrl',
      displayName: 'Ctrl',
    },
    {
      service: true,
      name: 'win',
      displayName: 'Win',
    },
    {
      service: true,
      name: 'lalt',
      displayName: 'Alt',
    },
    {
      service: true,
      name: 'space',
      displayName: '',
    },
    {
      service: true,
      name: 'ralt',
      displayName: 'Alt',
    },
    {
      service: true,
      name: 'arrowleft',
      displayName: '',
    },
    {
      service: true,
      name: 'arrowdown',
      displayName: '',
    },
    {
      service: true,
      name: 'arrowright',
      displayName: '',
    },
    {
      service: true,
      name: 'rctrl',
      displayName: 'Ctrl',
    },
  ],
];

export default keys;
