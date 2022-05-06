import keys from './keys';

let lang = localStorage.getItem('lang');
if (!lang) lang = 'en';

let caps = false;
let shiftPressed = false;

class Key {
  constructor(service, id) {
    this.service = service;
    this.id = id;
  }

  initServiceButton(displayName) {
    this.displayName = displayName;
  }

  initLetterButton(en, ru) {
    this.en = en;
    this.ru = ru;
  }

  createButton() {
    this.button = document.createElement('button');
    this.button.classList.add('key');
    this.button.id = this.id;

    if (this.service) {
      this.button.classList.add('service');
      this.button.innerText = this.displayName;
    } else {
      this.button.classList.add('letter');
      this.button.innerText = this[lang].lower;
    }
    return this.button;
  }

  getButton() {
    return this.button;
  }
}

function initHeading() {
  const heading = document.createElement('h1');
  heading.innerText = 'Rolling Scopes School: Virtual Keyboard';
  return heading;
}

function initTextArea() {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  return textarea;
}

function initButtons() {
  const buttons = [];

  for (let i = 0; i < keys.length; i += 1) {
    buttons.push(keys[i].map((element) => {
      const key = new Key(element.service, element.id);
      if (element.service) key.initServiceButton(element.displayName);
      else key.initLetterButton(element.en, element.ru);
      key.createButton();
      return key;
    }));
  }

  return buttons;
}

function initKeyboard(btns) {
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');

  for (let i = 0; i < btns.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    btns[i].forEach((element) => row.appendChild(element.getButton()));
    keyboardContainer.appendChild(row);
  }

  return keyboardContainer;
}

function initWorkspace() {
  const workspace = document.createElement('div');
  workspace.classList.add('workspace');
  return workspace;
}

function initHint() {
  const hint = document.createElement('p');
  hint.classList.add('hint');

  hint.innerText = 'Made with Linux OS.\nUse Ctrl + Shift to switch between layouts.';
  return hint;
}

function changeLanguage(buttons) {
  if (lang === 'en') lang = 'ru';
  else lang = 'en';

  buttons.filter((element) => !element.service).forEach((element) => {
    const btn = element.getButton();
    btn.innerText = element[lang].lower;
  });
}

function changeSize(buttons) {
  if (caps) {
    caps = false;
    document.querySelector('#CapsLock').classList.remove('pressed');
    if (shiftPressed) {
      buttons.filter((element) => !element.service).forEach((element) => {
        const btn = element.getButton();
        btn.innerText = element[lang].upper.toUpperCase();
      });
    } else {
      buttons.filter((element) => !element.service).forEach((element) => {
        const btn = element.getButton();
        btn.innerText = element[lang].lower.toLowerCase();
      });
    }
  } else {
    caps = true;
    document.querySelector('#CapsLock').classList.add('pressed');
    if (shiftPressed) {
      buttons.filter((element) => !element.service).forEach((element) => {
        const btn = element.getButton();
        btn.innerText = element[lang].upper.toLowerCase();
      });
    } else {
      buttons.filter((element) => !element.service).forEach((element) => {
        const btn = element.getButton();
        btn.innerText = element[lang].lower.toUpperCase();
      });
    }
  }
}

function shiftDown(buttons) {
  shiftPressed = true;

  if (caps) {
    buttons.filter((element) => !element.service).forEach((element) => {
      const btn = element.getButton();
      btn.innerText = element[lang].upper.toLowerCase();
    });
  } else {
    buttons.filter((element) => !element.service).forEach((element) => {
      const btn = element.getButton();
      btn.innerText = element[lang].upper.toUpperCase();
    });
  }
}

function shiftUp(buttons) {
  shiftPressed = false;

  if (caps) {
    buttons.filter((element) => !element.service).forEach((element) => {
      const btn = element.getButton();
      btn.innerText = element[lang].lower.toUpperCase();
    });
  } else {
    buttons.filter((element) => !element.service).forEach((element) => {
      const btn = element.getButton();
      btn.innerText = element[lang].lower.toLowerCase();
    });
  }
}

const buttons = initButtons();
const heading = initHeading();
const workspace = initWorkspace();
const textarea = initTextArea();
const keyboard = initKeyboard(buttons);
const hint = initHint();

[textarea, keyboard, hint].forEach((element) => workspace.appendChild(element));
document.body.appendChild(heading);
document.body.appendChild(workspace);

function insertSymbol(symbol) {
  const position = textarea.selectionStart;

  textarea.value = textarea.value.slice(0, position) + symbol + textarea.value.slice(position);
  textarea.selectionStart = position + 1;
  textarea.selectionEnd = position + 1;
}

function keyHandler(btnId) {
  const keyObjects = [].concat(...buttons);
  let pressedKey;

  for (let i = 0; i < keyObjects.length; i += 1) {
    if (keyObjects[i].id === btnId) pressedKey = keyObjects[i];
  }

  const position = textarea.selectionStart;
  textarea.focus();

  if (!pressedKey.service) {
    insertSymbol(pressedKey.getButton().innerText);
  } else {
    switch (btnId) {
      case 'Backspace':
        if (position === 0) break;

        textarea.value = textarea.value.slice(0, position - 1)
          + textarea.value.slice(position);

        textarea.selectionStart = position - 1;
        textarea.selectionEnd = textarea.selectionStart;

        break;

      case 'Tab':
        insertSymbol('\t');
        break;

      case 'Delete':
        if (position === textarea.value.length) break;

        textarea.value = textarea.value.slice(0, position)
          + textarea.value.slice(position + 1);

        textarea.selectionStart = position;
        textarea.selectionEnd = textarea.selectionStart;

        break;

      case 'CapsLock':
        changeSize([].concat(...buttons));
        break;

      case 'Enter':
        insertSymbol('\n');
        break;

      case 'Space':
        insertSymbol(' ');
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
        if (position === 0) break;

        textarea.selectionStart = position - 1;
        textarea.selectionEnd = textarea.selectionStart;
        break;

      case 'ArrowDown':
      case 'ArrowRight':
        if (position === textarea.value.length) break;

        textarea.selectionStart = position + 1;
        textarea.selectionEnd = textarea.selectionStart;
        break;

      default:
        break;
    }
  }
}

document.addEventListener('keydown', (keyboardEvent) => {
  keyboardEvent.preventDefault();

  const pressedButton = document.querySelector(`#${keyboardEvent.code}`);
  if (!pressedButton) return false;

  if (pressedButton.id !== 'CapsLock') pressedButton.classList.add('pressed');

  if (keyboardEvent.ctrlKey && keyboardEvent.shiftKey) {
    changeLanguage([].concat(...buttons));
  } else if (['ShiftLeft', 'ShiftRight'].includes(keyboardEvent.code)) {
    shiftDown([].concat(...buttons));
  } else keyHandler(keyboardEvent.code);

  return true;
});

document.addEventListener('keyup', (keyboardEvent) => {
  keyboardEvent.preventDefault();
  const pressedButton = document.querySelector(`#${keyboardEvent.code}`);

  if (!pressedButton) return false;

  if (pressedButton.id !== 'CapsLock') pressedButton.classList.remove('pressed');

  if (['ShiftLeft', 'ShiftRight'].includes(keyboardEvent.code)) {
    if (!keyboardEvent.shiftKey) shiftUp([].concat(...buttons));
  }

  return true;
});

document.querySelector('.keyboard-container').addEventListener('mousedown', (event) => {
  if (!event.target.classList.contains('key')) return false;

  const pressedButton = event.target;
  if (!pressedButton) return false;

  if (pressedButton.id !== 'CapsLock') pressedButton.classList.add('pressed');

  if (['ShiftLeft', 'ShiftRight'].includes(pressedButton.id)) {
    shiftDown([].concat(...buttons));
  } else keyHandler(pressedButton.id);

  return true;
});

document.querySelector('.keyboard-container').addEventListener('mouseup', (event) => {
  if (!event.target.classList.contains('key')) return false;

  const pressedButton = event.target;
  if (!pressedButton) return false;

  if (pressedButton.id !== 'CapsLock') pressedButton.classList.remove('pressed');

  if (['ShiftLeft', 'ShiftRight'].includes(pressedButton.id)) {
    if (!event.shiftKey) shiftUp([].concat(...buttons));
  }

  return true;
});

window.addEventListener('beforeunload', () => {
  localStorage.setItem('lang', lang);
});
