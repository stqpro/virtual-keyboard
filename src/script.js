import keys from './keys';

const lang = 'en';

class Key {
  constructor(service) {
    this.service = service;
  }

  initServiceButton(name, displayName) {
    this.name = name;
    this.displayName = displayName;
  }

  initLetterButton(en, ru) {
    this.en = en;
    this.ru = ru;
  }

  createButton() {
    const button = document.createElement('button');
    button.classList.add('key');

    if (this.service) {
      button.classList.add('service');
      button.classList.add(this.name);
      button.innerText = this.displayName;
    } else {
      button.classList.add('letter');
      button.innerText = this[lang].lower;
    }
    return button;
  }
}

function initKeyboard() {
  const buttons = [];
  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');

  for (let i = 0; i < keys.length; i += 1) {
    buttons.push(keys[i].map((element) => {
      const key = new Key(element.service);
      if (element.service) key.initServiceButton(element.name, element.displayName);
      else key.initLetterButton(element.en, element.ru);
      return key.createButton();
    }));
  }

  for (let i = 0; i < buttons.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    buttons[i].forEach((element) => row.appendChild(element));
    keyboardContainer.appendChild(row);
  }
}
