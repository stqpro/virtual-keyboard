import keys from './keys';

let lang = 'en';
let caps = false;

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
    buttons.filter((element) => !element.service).forEach((element) => {
      const btn = element.getButton();
      btn.innerText = btn.innerText.toLowerCase();
    });
  } else {
    caps = true;
    buttons.filter((element) => !element.service).forEach((element) => {
      const btn = element.getButton();
      btn.innerText = btn.innerText.toUpperCase();
    });
  }
}

function shiftDown(buttons) {
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

[textarea, keyboard].forEach((element) => workspace.appendChild(element));
document.body.appendChild(heading);
document.body.appendChild(workspace);

document.addEventListener('keydown', (keyboardEvent) => {
  keyboardEvent.preventDefault();

  const pressedButton = document.querySelector(`#${keyboardEvent.code}`);
  if (!pressedButton) return false;

  pressedButton.classList.add('pressed');

  if (keyboardEvent.ctrlKey && keyboardEvent.shiftKey) {
    changeLanguage([].concat(...buttons));
  } else if (keyboardEvent.code === 'CapsLock') {
    changeSize([].concat(...buttons));
  } else if (['ShiftLeft', 'ShiftRight'].includes(keyboardEvent.code)) {
    shiftDown([].concat(...buttons));
  }

  return true;
});

document.addEventListener('keyup', (keyboardEvent) => {
  keyboardEvent.preventDefault();
  const pressedButton = document.querySelector(`#${keyboardEvent.code}`);

  if (pressedButton) {
    pressedButton.classList.remove('pressed');
  }

  if (['ShiftLeft', 'ShiftRight'].includes(keyboardEvent.code)) {
    shiftUp([].concat(...buttons));
  }
});
