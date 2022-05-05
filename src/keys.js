const keys = [
  [
    {
      service: false,
      id: 'Backquote',
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
      id: 'Digit1',
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
      id: 'Digit2',
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
      id: 'Digit3',
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
      id: 'Digit4',
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
      id: 'Digit5',
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
      id: 'Digit6',
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
      id: 'Digit7',
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
      id: 'Digit8',
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
      id: 'Digit9',
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
      id: 'Digit0',
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
      id: 'Minus',
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
      id: 'Equal',
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
      id: 'Backspace',
      displayName: 'Backspace',
    },
  ],
  [
    {
      service: true,
      id: 'Tab',
      displayName: 'Tab',
    },
    {
      service: false,
      id: 'KeyQ',
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
      id: 'KeyW',
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
      id: 'KeyE',
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
      id: 'KeyR',
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
      id: 'KeyT',
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
      id: 'KeyY',
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
      id: 'KeyU',
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
      id: 'KeyI',
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
      id: 'KeyO',
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
      id: 'KeyP',
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
      id: 'BracketLeft',
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
      id: 'BracketRight',
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
      id: 'Backslash',
      en: {
        lower: '\\',
        upper: '|',
      },
      ru: {
        lower: '\\',
        upper: '/',
      },
    },
    {
      service: true,
      id: 'Delete',
      displayName: 'Del',
    },
  ],
  [
    {
      service: true,
      id: 'CapsLock',
      displayName: 'Caps Lock',
    },
    {
      service: false,
      id: 'KeyA',
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
      id: 'KeyS',
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
      id: 'KeyD',
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
      id: 'KeyF',
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
      id: 'KeyG',
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
      id: 'KeyH',
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
      id: 'KeyJ',
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
      id: 'KeyK',
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
      id: 'KeyL',
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
      id: 'Semicolon',
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
      id: 'Quote',
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
      id: 'Enter',
      displayName: 'Enter',
    },
  ],
  [
    {
      service: true,
      id: 'ShiftLeft',
      displayName: 'Shift',
    },
    {
      service: false,
      id: 'KeyZ',
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
      id: 'KeyX',
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
      id: 'KeyC',
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
      id: 'KeyV',
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
      id: 'KeyB',
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
      id: 'KeyN',
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
      id: 'KeyM',
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
      id: 'Comma',
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
      id: 'Period',
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
      id: 'Slash',
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
      id: 'ArrowUp',
      displayName: '▲',
    },
    {
      service: true,
      id: 'ShiftRight',
      displayName: 'Shift',
    },
  ],
  [
    {
      service: true,
      id: 'ControlLeft',
      displayName: 'Ctrl',
    },
    {
      service: true,
      id: 'OSLeft',
      displayName: 'Win',
    },
    {
      service: true,
      id: 'AltLeft',
      displayName: 'Alt',
    },
    {
      service: true,
      id: 'Space',
      displayName: '',
    },
    {
      service: true,
      id: 'AltRight',
      displayName: 'Alt',
    },
    {
      service: true,
      id: 'ArrowLeft',
      displayName: '◀',
    },
    {
      service: true,
      id: 'ArrowDown',
      displayName: '▼',
    },
    {
      service: true,
      id: 'ArrowRight',
      displayName: '▶',
    },
    {
      service: true,
      id: 'ControlRight',
      displayName: 'Ctrl',
    },
  ],
];

export default keys;
